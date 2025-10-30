import {
  createSession,
  getByteOrderMark,
  getContentType,
  getLanguage,
  IServerHeartbeat,
} from '@omega-edit/client'
import {
  IServiceRequestHandler,
  ServiceRequestTypes,
} from 'dataEditor/service/requestHandler'
import { updateHeartbeatInterval } from './heartbeat'
import { OmegaEditRequests, OmegaEditResponses } from './requestHandler'

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

export class OmegaEditSession implements IServiceRequestHandler {
  constructor(
    readonly id: string,
    readonly fileMetrics: SessionStaticFileMetrics
  ) {}
  getRequestType<K extends keyof OmegaEditRequests>(
    type: K
  ): OmegaEditRequests[K] {
    return {} as OmegaEditRequests[K]
  }
  canHandle(type: string): boolean {
    return Object.keys({} as OmegaEditRequests).includes(type)
  }
  request<K extends keyof OmegaEditRequests>(
    type: K,
    data: OmegaEditRequests[K]
  ): K extends keyof OmegaEditResponses
    ? Promise<OmegaEditResponses[K]>
    : never {
    throw new Error('Method not implemented.')
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
