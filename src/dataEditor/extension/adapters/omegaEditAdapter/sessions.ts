import * as vscode from 'vscode'
import {
  ALL_EVENTS,
  createSession,
  createViewport,
  destroySession,
  EventSubscriptionRequest,
  getByteOrderMark,
  getClient,
  getContentType,
  getLanguage,
  getViewportData,
  IOFlags,
  saveSession,
  SaveStatus,
  ViewportDataResponse,
  ViewportEvent,
} from '@omega-edit/client'
import { RequestHandler } from 'dataEditor/core/service/requestHandler'
import {
  getCurrentHeartbeatInfo,
  HeartbeatReceiver,
  registerHeartbeatReceiver,
  unregisterAllHeartbeatReceivers,
  unregisterHeartbeatReceiver,
} from './heartbeat'
import {
  DefaultOERequestHandler,
  OmegaEditRequests,
  OmegaEditRequestTypeMap,
  OmegaEditResponses,
  RequestTypeMap,
} from './requestHandler'
import {
  ReadResponse,
  RequestArgs,
  SaveAsStrategy,
} from 'dataEditor/core/message/messages'
import { DataEditorViewport } from 'dataEditor/core/editor/Viewport'

export interface SessionCreateOpts {
  targetFile: string
  heartbeatReceiver?: HeartbeatReceiver
  dataSubscriber?: (response: ReadResponse) => any
  saveAsStrategy: SaveAsStrategy
  readonly hostname: string
  readonly port: number
  desiredId?: string
  checkpointDirectory?: string
}
export interface SessionStaticFileMetrics {
  filePath: string
  readonly BOM: string
  readonly language: string
  readonly type: string
  readonly filesize: number
}
export interface SessionInfo {
  changeCount: number
  computedFilesize: number
  diskFilesize: number
  undoCount: number
}

class OmegaEditorSessionManager {
  activeSessions: string[] = []
  sessions: Map<string, () => any> = new Map()
  _sessions: Map<string, { targetFile: string; hbRecv: () => any }> = new Map()
  onAllSessionsDestroyed: () => any = () => {
    throw ''
  }
  async create(opts: SessionCreateOpts): Promise<OmegaEditSession> {
    return new Promise(async (res, rej) => {
      const response = await createSession(
        opts.targetFile,
        opts.desiredId,
        opts.checkpointDirectory
      )
      const id = response.getSessionId()

      let bomFetch = await getByteOrderMark(id)
      const bom = bomFetch.getByteOrderMark()

      const languageFetch = await getLanguage(id, 0, 1024, bom)
      const language = languageFetch.getLanguage()

      const contentFetch = await getContentType(id, 0, 1024)
      const type = contentFetch.getContentType()

      const filesize = response.getFileSize()

      const vpCreateResponse = await createViewport(undefined, id, 0, 1024)
      const vpId = vpCreateResponse.getViewportId()
      getClient().then((client) => {
        client
          .subscribeToViewportEvents(
            new EventSubscriptionRequest().setId(vpId).setInterest(ALL_EVENTS)
          )
          .on('data', (chunk: ViewportEvent) => {
            console.debug(
              'Viewport Subscription from [OmegaEditorSessionManager::create]'
            )
            const vpid = chunk.getViewportId()
            getViewportData(vpid)
              .then((resp) => {
                if (opts.dataSubscriber) {
                  opts.dataSubscriber({
                    bytesRemaining: resp.getFollowingByteCount(),
                    capacity: 1024,
                    data: resp.getData_asU8(),
                    length: resp.getLength(),
                    srcOffset: resp.getOffset(),
                  })
                }
              })
              .catch((err) => {
                throw err
              })
          })
      })
      const newSession = new OmegaEditSession(
        id,
        opts.port,
        {
          BOM: bom,
          filePath: opts.targetFile,
          language,
          type,
          filesize: filesize ? filesize : -1,
        },
        opts.saveAsStrategy,
        vpId
      )
      if (opts.heartbeatReceiver) {
        this.sessions.set(newSession.sessionId, () => {
          const hb = getCurrentHeartbeatInfo()!
          opts.heartbeatReceiver!({ ...hb })
        })
      }
      registerHeartbeatReceiver(newSession.sessionId, opts.heartbeatReceiver)
      res(newSession)
    })
  }
  setHeartbeatReceiverForSession(id: string, receiver: HeartbeatReceiver) {
    if (!this.sessions[id]) throw `Session (${id}) is not registered`
    registerHeartbeatReceiver(id, receiver)
  }
  async remove(id: string) {
    await destroySession(id)
    this.sessions.delete(id)
    if (sessionCount() === 0) {
      this.onAllSessionsDestroyed()
    }
  }
  removeAll() {
    this.sessions.clear()
    unregisterAllHeartbeatReceivers()
    this.onAllSessionsDestroyed()
  }
}
const SessionManager = new OmegaEditorSessionManager()

export class OmegaEditSession
  implements RequestHandler<OmegaEditRequests, OmegaEditResponses>
{
  private handlerMap: OmegaEditRequestTypeMap = DefaultOERequestHandler
  private currentViewport: DataEditorViewport
  constructor(
    readonly sessionId: string,
    readonly port: number,
    private fileMetrics: SessionStaticFileMetrics,
    private saveAsStrategy: SaveAsStrategy,
    private viewportId: string
  ) {
    this.currentViewport = new DataEditorViewport(viewportId)
    this.handlerMap['fileInfo'] = () => {
      return computeFileInfo(this.sessionId, this.fileMetrics)
    }
    this.handlerMap['save'] = (request) => {
      saveSession(this.sessionId, request.targetFile, IOFlags.IO_FLG_OVERWRITE)
    }
    this.handlerMap['saveAs'] = async (request) => {
      const targetSaveFile = await this.saveAsStrategy.getFile()
      const saveResponse = await saveSession(
        this.sessionId,
        targetSaveFile,
        IOFlags.IO_FLG_OVERWRITE
      )
      let saveSuccess = false
      if (saveResponse.getSaveStatus() === SaveStatus.MODIFIED) {
        const confirm = await this.saveAsStrategy.confirm()
        if (confirm) {
          const forceSaveResponse = await saveSession(
            this.sessionId,
            targetSaveFile,
            IOFlags.IO_FLG_FORCE_OVERWRITE
          )
          saveSuccess =
            forceSaveResponse.getSaveStatus() === SaveStatus.SUCCESS
              ? true
              : false
        }
      }
      if (saveSuccess) {
        this.fileMetrics.filePath = targetSaveFile
        this.request('fileInfo')
        this.request('counts')
        this.saveAsStrategy.notifySuccess()
      }
    }
  }
  set<K extends keyof OmegaEditRequestTypeMap>(
    handleId: K,
    handler: OmegaEditRequestTypeMap[K]
  ) {
    this.handlerMap[handleId] = handler
  }

  canHandle(type: string): boolean {
    return Object.keys({} as OmegaEditRequests).includes(type)
  }
  request<K extends keyof OmegaEditRequests>(
    ...args: RequestArgs<OmegaEditRequests, K>
  ): OmegaEditResponses[K] | Promise<OmegaEditResponses[K]> {
    const [type, data] = args as [K, OmegaEditRequests[K]]
    const executor = this.handlerMap[type]
    return executor(data, {
      ids: { sessionId: this.sessionId, viewportId: this.currentViewportId() },
    })
  }

  currentViewportId() {
    return this.viewportId
  }
  getSessionId() {
    return this.sessionId
  }
  onHeartbeat(receiver: HeartbeatReceiver) {
    SessionManager.setHeartbeatReceiverForSession(this.sessionId, receiver)
  }
  destroy: () => any = () => {
    throw ''
  }
}

export function sessionCreate(
  opts: SessionCreateOpts
): Promise<OmegaEditSession> {
  return SessionManager.create(opts)
}
export function sessionCount() {
  return SessionManager.sessions.size
}
export async function sessionDestroy(id: string) {
  await SessionManager.remove(id)
  unregisterHeartbeatReceiver(id)
}
export function sessionDestroyAll() {
  SessionManager.removeAll()
}
export function onAllSessionsDestroyed(cb: () => any) {
  SessionManager.onAllSessionsDestroyed = cb
}
function computeFileInfo(
  sessionId: string,
  staticMetrics: SessionStaticFileMetrics
): Promise<OmegaEditResponses['fileInfo']> {
  return new Promise(async (res, rej) => {
    const ret: OmegaEditResponses['fileInfo'] = {
      bom: staticMetrics.BOM,
      language: staticMetrics.language,
      contentType: staticMetrics.type,
      filename: staticMetrics.filePath,
    }
    // const ret: OmegaEditResponse['fileInfo'] = {
    //   bom: staticMetrics.BOM,
    //   contentType: staticMetrics.type,
    //   filename: staticMetrics.filePath,
    //   language: staticMetrics.language,
    //   changes: {
    //     applied: 0,
    //     undos: 0,
    //   },
    //   sizes: {
    //     computed: 0,
    //     disk: 0,
    //   },
    // }
    // const counts = await getCounts(sessionId, [
    //   CountKind.COUNT_CHANGES,
    //   CountKind.COUNT_UNDOS,
    //   CountKind.COUNT_COMPUTED_FILE_SIZE,
    // ])
    // counts.forEach((count) => {
    //   switch (count.getKind()) {
    //     case CountKind.COUNT_CHANGES:
    //       ret.changes.applied = count.getCount()
    //       break
    //     case CountKind.COUNT_COMPUTED_FILE_SIZE:
    //       ret.sizes.computed = ret.sizes.disk = count.getCount()
    //       break
    //     case CountKind.COUNT_UNDOS:
    //       ret.changes.undos = count.getCount()
    //       break
    //   }
    // })
    res(ret)
  })
}
