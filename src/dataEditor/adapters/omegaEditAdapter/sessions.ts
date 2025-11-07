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
import { OmegaEditRequests, OmegaEditResponses } from './requestHandler'
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
  requestAnd<K extends keyof ExtensionMsgCommands>(
    cmd: { type: K; data: ExtensionMsgCommands[K] },
    cb: (response: ExtensionMsgResponses[K]) => Promise<void>
  ) {}
  getRequestType<K extends keyof ExtensionMsgCommands>(
    type: K
  ): ExtensionMsgCommands[K] {
    throw ''
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
export type RequestMap = {
  [K in keyof ExtensionMsgCommands]: (
    ids: { session: string; viewport: DataEditorViewport },
    content: ExtensionMsgCommands[K]
  ) => Promise<ExtensionMsgResponses[K]>
}
class OmegaEditRequestMap {
  constructor(private sessionRef: OmegaEditSession) {}
  reqMap: RequestMap = {
    clearChanges: function (
      ids: { session: string; viewport: DataEditorViewport },
      content: {}
    ): Promise<{}> {
      throw new Error('Function not implemented.')
    },
    applyChanges: function (
      ids: { session: string; viewport: DataEditorViewport },
      content: {
        offset: number
        original_segment: Uint8Array<ArrayBufferLike>
        edited_segment: Uint8Array
      }
    ): Promise<{
      offset: number
      original_segment: Uint8Array<ArrayBufferLike>
      edited_segment: Uint8Array
    }> {
      throw new Error('Function not implemented.')
    },
    heartbeat: function (
      ids: { session: string; viewport: DataEditorViewport },
      content: {}
    ): Promise<{}> {
      throw new Error('Function not implemented.')
    },
    profile: function (
      ids: { session: string; viewport: DataEditorViewport },
      content: { start: number; length: number }
    ): Promise<{ start: number; length: number }> {
      throw new Error('Function not implemented.')
    },
    redoChange: function (
      ids: { session: string; viewport: DataEditorViewport },
      content: {}
    ): Promise<{}> {
      throw new Error('Function not implemented.')
    },
    replaceResults: function (
      ids: { session: string; viewport: DataEditorViewport },
      content: {}
    ): Promise<{}> {
      throw new Error('Function not implemented.')
    },
    requestEditedData: function (
      ids: { session: string; viewport: DataEditorViewport },
      content: {}
    ): Promise<{}> {
      throw new Error('Function not implemented.')
    },
    save: function (
      ids: { session: string; viewport: DataEditorViewport },
      content: {}
    ): Promise<{}> {
      throw new Error('Function not implemented.')
    },
    saveAs: function (
      ids: { session: string; viewport: DataEditorViewport },
      content: {}
    ): Promise<{}> {
      throw new Error('Function not implemented.')
    },
    saveSegment: function (
      ids: { session: string; viewport: DataEditorViewport },
      content: { offset: number; length: number }
    ): Promise<{ offset: number; length: number }> {
      throw new Error('Function not implemented.')
    },
    scrollViewport: function (
      ids: { session: string; viewport: DataEditorViewport },
      content: { scrollOffset: number; bytesPerRow: number }
    ): Promise<ExtensionMsgResponses['scrollViewport']> {
      return new Promise(async (res, rej) => {
        const vpResponse = await modifyViewport(
          ids.viewport.id,
          content.scrollOffset,
          DataEditorViewport.capacity
        )
        res({
          bytesRemaining: vpResponse.getFollowingByteCount(),
          capacity: DataEditorViewport.capacity,
          data: vpResponse.getData_asU8(),
          length: vpResponse.getLength(),
          srcOffset: vpResponse.getOffset(),
        })
      })
    },
    search: function (
      ids: { session: string; viewport: DataEditorViewport },
      content: {
        encoding: BufferEncoding
        searchStr: string | Uint8Array
        is_case_insensitive?: boolean
        is_reverse?: boolean
        offset?: number
        length?: number
        limit?: number
      }
    ): Promise<{
      encoding: BufferEncoding
      searchStr: string | Uint8Array
      is_case_insensitive?: boolean
      is_reverse?: boolean
      offset?: number
      length?: number
      limit?: number
    }> {
      throw new Error('Function not implemented.')
    },
    replace: function (
      ids: { session: string; viewport: DataEditorViewport },
      content: {
        encoding: BufferEncoding
        searchStr: string | Uint8Array
        is_case_insensitive?: boolean
        is_reverse?: boolean
        offset?: number
        length?: number
        limit?: number
        overwriteOnly?: boolean
      }
    ): Promise<{
      encoding: BufferEncoding
      searchStr: string | Uint8Array
      is_case_insensitive?: boolean
      is_reverse?: boolean
      offset?: number
      length?: number
      limit?: number
      overwriteOnly?: boolean
    }> {
      throw new Error('Function not implemented.')
    },
    searchResults: function (
      ids: { session: string; viewport: DataEditorViewport },
      content: {}
    ): Promise<{}> {
      throw new Error('Function not implemented.')
    },
    setUITheme: function (
      ids: { session: string; viewport: DataEditorViewport },
      content: {}
    ): Promise<{}> {
      throw new Error('Function not implemented.')
    },
    showMessage: function (
      ids: { session: string; viewport: DataEditorViewport },
      content: {}
    ): Promise<{}> {
      throw new Error('Function not implemented.')
    },
    undoChange: function (
      ids: { session: string; viewport: DataEditorViewport },
      content: {}
    ): Promise<{}> {
      throw new Error('Function not implemented.')
    },
    updateLogicalDisplay: function (
      ids: { session: string; viewport: DataEditorViewport },
      content: {}
    ): Promise<{}> {
      throw new Error('Function not implemented.')
    },
    viewportRefresh: function (
      ids: { session: string; viewport: DataEditorViewport },
      content: { offset: number; bytesPerRow: number }
    ): Promise<{
      srcOffset: number
      length: number
      bytesRemaining: number
      data: Uint8Array
      capacity: number
    }> {
      //TODO: Check if fetch to service is required (new offset outside of current viewport offset bounds)
      //  i.e, `modifyViewport` or `getViewportData`
      return new Promise(async (res, rej) => {
        const response = ids.viewport.requiresFetchAt(content.offset)
          ? await modifyViewport(
              ids.viewport.id,
              content.offset,
              DataEditorViewport.capacity
            )
          : await getViewportData(ids.viewport.id)
        ids.viewport.setViewport(
          response.getOffset(),
          response.getLength(),
          response.getFollowingByteCount(),
          response.getData_asU8()
        )
        res({ ...ids.viewport.toObject() })
      })
    },
    fileInfo: function (
      ids: { session: string; viewport: DataEditorViewport },
      content: never
    ): Promise<{
      filename: string
      bom: string
      language: string
      contentType: string
      sizes: { computed: number; disk: number }
      changes: { applied: number; undos: number }
    }> {
      throw new Error('Function not implemented.')
    },
    editorOnChange: function (
      ids: { session: string; viewport: DataEditorViewport },
      content: {
        editMode: 'single' | 'multi'
        encoding: BufferEncoding
        selectionData: string
      }
    ): Promise<{ encodedStr: string }> {
      throw '' // TODO: Remove non-service related msg command functions
    },
  }
  getRequestExecutor<K extends keyof RequestMap>(type: K): RequestMap[K] {
    return this.reqMap[type]
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
