import {
  CountKind,
  createSession,
  getByteOrderMark,
  getContentType,
  getCounts,
  getLanguage,
} from '@omega-edit/client'

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
export class OmegaEditSession {
  constructor(
    readonly id: string,
    readonly fileMetrics: SessionStaticFileMetrics
  ) {}
  async updateSessionInfo(): Promise<SessionInfo> {
    return new Promise(async (res, rej) => {
      const counts = await getCounts(this.id, [
        CountKind.COUNT_COMPUTED_FILE_SIZE,
        CountKind.COUNT_CHANGE_TRANSACTIONS,
        CountKind.COUNT_UNDO_TRANSACTIONS,
      ])
    })
  }
}
class OmegaEditorSessions {
  private activeSessions: OmegaEditSession[] = []

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

        this.activeSessions.push(newSession)
        res(newSession)
      })
    })
  }
}

const SessionManager = new OmegaEditorSessions()
