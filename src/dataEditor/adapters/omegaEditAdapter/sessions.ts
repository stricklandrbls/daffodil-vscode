import {
  createSession,
  createViewport,
  EditorClient,
  getByteOrderMark,
  getClient,
  getComputedFileSize,
  getContentType,
  getLanguage,
  getViewportData,
  IServerHeartbeat,
  modifyViewport,
} from '@omega-edit/client'
import {
  IServiceRequestHandler,
  RequestType,
  ServiceRequestTypes,
} from 'dataEditor/service/requestHandler'
import { updateHeartbeatInterval } from './heartbeat'
import { OmegaEditRequestMap} from './requestHandler'
import {
  ExtensionMsgCommands,
  ExtensionMsgResponses,
} from 'dataEditor/message/messages'

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

export class OmegaEditSession implements IServiceRequestHandler {
  private reqMap: OmegaEditRequestMap
  private currentViewport: DataEditorViewport
  constructor(
    readonly sessionId: string,
    readonly fileMetrics: SessionStaticFileMetrics,
    private viewportId: string
  ) {
    this.reqMap = new OmegaEditRequestMap(this)
    this.currentViewport = new DataEditorViewport(viewportId)
  }
  canHandle(type: string): boolean {
    return Object.keys({} as ExtensionMsgCommands).includes(type)
  }
  async request<K extends keyof ExtensionMsgCommands>(
    ...args: RequestType<K>
  ): Promise<ExtensionMsgResponses[K]> {
    const [type, optData] = args as [K, ExtensionMsgCommands[K]]
    this.reqMap.reqMap['fileInfo'] = (
      ids: { session: string; viewport: DataEditorViewport },
      content: never
    ) => {
      return new Promise(async (res, rej) => {
        res({
          bom: this.fileMetrics.BOM,
          contentType: this.fileMetrics.type,
          language: this.fileMetrics.language,
          sizes: {
            computed: await getComputedFileSize(this.sessionId),
            disk: this.fileMetrics.filesize,
          },
          filename: this.fileMetrics.filePath,
          changes: { applied: 0, undos: 0 },
        })
      })
    }
    return this.reqMap.getRequestExecutor(type)(
      { session: this.sessionId, viewport: this.currentViewport },
      optData
    )
  }
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
