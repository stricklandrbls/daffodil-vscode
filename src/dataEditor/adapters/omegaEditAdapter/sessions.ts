import {
  createSession,
  getByteOrderMark,
  getContentType,
  getLanguage,
  IServerHeartbeat,
} from '@omega-edit/client'
import {
  RequestMap,
  ResponseMap,
  ServiceRequestHandler,
  ServiceRequestKeys,
} from 'dataEditor/service/requestHandler'
import { updateHeartbeatInterval } from './heartbeat'
import {
  handleRequest,
  OmegaEditRequests,
  OmegaEditResponses,
} from './requestHandler'

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
      createSession(
        opts.targetFile,
        opts.desiredId,
        opts.checkpointDirectory
      ).then(async (response) => {
        const id = response.getSessionId()
        let bomFetch = await getByteOrderMark(id)
        const bom = bomFetch.getByteOrderMark()

        const languageFetch = await getLanguage(id, 0, 1024, bom)
        const language = languageFetch.getLanguage()

        const contentFetch = await getContentType(id, 0, 1024)
        const type = contentFetch.getContentType()

        const filesize = response.getFileSize()
        const newSession = new OmegaEditSession(id, {
          BOM: bom,
          filePath: opts.targetFile,
          language,
          type,
        })

        this.activeSessions.push(newSession.id)
        updateHeartbeatInterval(this.activeSessions)
        res(newSession)
      })
    })
  }
}
const SessionManager = new OmegaEditorSessionManager()

export class OmegaEditSession extends ServiceRequestHandler<
  OmegaEditRequests,
  OmegaEditResponses
> {
  request<K extends ServiceRequestKeys | keyof OmegaEditRequests>(
    type: K,
    request: RequestMap<OmegaEditRequests>[K]
  ): K extends ServiceRequestKeys | keyof OmegaEditResponses
    ? Promise<ResponseMap<OmegaEditResponses>[K]>
    : never {
    return handleRequest(type, request)
  }
  constructor(
    readonly id: string,
    readonly fileMetrics: SessionStaticFileMetrics
  ) {
    super()
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
