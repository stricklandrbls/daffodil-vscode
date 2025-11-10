import {
  CountKind,
  createSession,
  createViewport,
  getByteOrderMark,
  getChangeCount,
  getComputedFileSize,
  getContentType,
  getCounts,
  getLanguage,
  IServerHeartbeat,
} from '@omega-edit/client'
import {
  IServiceRequestHandler,
  RequestHandler,
  RequestType,
} from 'dataEditor/service/requestHandler'
import { updateHeartbeatInterval } from './heartbeat'
import { OmegaEditRequestMap } from './requestHandler'
import {
  ExtensionMsgCommands,
  ExtensionMsgResponses,
  ExtensionReqSubMap,
  ExtensionResSubMap,
  RequestArgs,
} from 'dataEditor/message/messages'
import { LOADIPHLPAPI } from 'dns'

export interface SessionCreateOpts {
  targetFile: string
  desiredId?: string
  checkpointDirectory?: string
}
export interface SessionStaticFileMetrics {
  readonly filePath: string
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
  sessions: Map<string, (hb: IServerHeartbeat & { port: number }) => any> =
    new Map()

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

      const newSession = new OmegaEditSession(
        id,
        {
          BOM: bom,
          filePath: opts.targetFile,
          language,
          type,
          filesize: filesize ? filesize : -1,
        },
        vpCreateResponse.getViewportId()
      )

      this.activeSessions.push(newSession.sessionId)
      updateHeartbeatInterval(this.activeSessions)
      res(newSession)
    })
  }
}
const SessionManager = new OmegaEditorSessionManager()

export class DataEditorViewport {
  static capacity: number = 1024
  private srcOffset: number = -1
  private length = -1
  private bytesRemaining = -1
  private data: Uint8Array | undefined = undefined

  constructor(readonly id: string) {}
  updateData(data: Uint8Array): void {
    this.data = data
  }
  setViewport(
    offset: number,
    length: number,
    bytesRemaining: number,
    data: Uint8Array
  ): void {
    this.srcOffset = offset
    this.length = length
    this.bytesRemaining = bytesRemaining
    this.data = data
  }
  isValid() {
    if (this.data === undefined) return false
  }
  requiresFetchAt(offset: number) {
    return offset > this.srcOffset + this.length || offset < this.srcOffset
  }
  toObject() {
    return {
      srcOffset: this.srcOffset,
      length: this.length,
      bytesRemaining: this.bytesRemaining,
      data: this.data!,
      capacity: DataEditorViewport.capacity,
    }
  }
}

export type OmegaEditRequests = Pick<
  ExtensionMsgCommands,
  'fileInfo' | 'viewportRefresh' | 'scrollViewport'
>
export type OmegaEditResponses = Pick<
  ExtensionMsgResponses,
  'fileInfo' | 'viewportRefresh' | 'scrollViewport'
>
export class OmegaEditSession
  implements RequestHandler<OmegaEditRequests, OmegaEditResponses>
{
  private reqMap: OmegaEditRequestMap
  private currentViewport: DataEditorViewport
  constructor(
    readonly sessionId: string,
    readonly fileMetrics: SessionStaticFileMetrics,
    private viewportId: string
  ) {
    this.reqMap = new OmegaEditRequestMap(this)
    this.reqMap.setRequestExecutor('fileInfo', () => {
      return new Promise(async (res, rej) => {
        const counts = await getCounts(this.sessionId, [
          CountKind.COUNT_CHANGES,
          CountKind.COUNT_UNDOS,
        ])

        res({
          bom: this.fileMetrics.BOM,
          contentType: this.fileMetrics.type,
          filename: this.fileMetrics.filePath,
          language: this.fileMetrics.language,
          sizes: {
            computed: await getComputedFileSize(this.sessionId),
            disk: 0,
          },
          changes: {
            applied: counts[0].getCount(),
            undos: counts[1].getCount(),
          },
        })
      })
    })
    this.currentViewport = new DataEditorViewport(viewportId)
  }
  canHandle(type: string): boolean {
    return Object.keys({} as ExtensionMsgCommands).includes(type)
  }
  request<K extends keyof OmegaEditRequests>(
    ...args: RequestArgs<OmegaEditRequests, K>
  ): Promise<OmegaEditResponses[K]> {
    const [type, data] = args as [K, OmegaEditRequests[K]]
    return this.reqMap.getRequestExecutor(type)(
      { session: this.sessionId, viewport: this.currentViewport },
      data
    )

    // return this.reqMap.getRequestExecutor(type)(
    //   { session: this.sessionId, viewport: this.currentViewport },
    //   data
    // )
  }
  // request<K extends keyof OmegaEditRequests>(
  //   ...args: RequestArgs<OmegaEditRequests, K>
  // ): Promise<OmegaEditResponses[K]> {
  //   return new Promise((res, rej) => {})
  // }
  // async request<K extends keyof ExtensionMsgCommands>(
  //   ...args: RequestType<K>
  // ): Promise<ExtensionMsgResponses[K]> {
  //   const [type, optData] = args as [K, ExtensionMsgCommands[K]]
  //   // this.reqMap.reqMap['fileInfo'] = (
  //   //   ids: { session: string; viewport: DataEditorViewport },
  //   //   content: never
  //   // ) => {
  //   //   return new Promise(async (res, rej) => {
  //   //     res({
  //   //       bom: this.fileMetrics.BOM,
  //   //       contentType: this.fileMetrics.type,
  //   //       language: this.fileMetrics.language,
  //   //       sizes: {
  //   //         computed: await getComputedFileSize(this.sessionId),
  //   //         disk: this.fileMetrics.filesize,
  //   //       },
  //   //       filename: this.fileMetrics.filePath,
  //   //       changes: { applied: 0, undos: 0 },
  //   //     })
  //   //   })
  //   // }
  //   return this.reqMap.getRequestExecutor(type)(
  //     { session: this.sessionId, viewport: this.currentViewport },
  //     optData
  //   )
  // }
  currentViewportId() {
    return this.viewportId
  }
}

export function sessionCreate(
  opts: SessionCreateOpts
): Promise<OmegaEditSession> {
  return SessionManager.create(opts)
}
export function sessionCount() {
  return SessionManager.activeSessions.length
}
