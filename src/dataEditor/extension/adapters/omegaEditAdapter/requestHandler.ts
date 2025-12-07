import {
  modifyViewport,
  getViewportData,
  getCounts,
  CountKind,
} from '@omega-edit/client'
import { ExtensionMsgCommands, ExtensionMsgResponses } from 'dataEditor/global'
import { CountResponse } from 'dataEditor/core/message/messages'

export type OmegaEditRequests = Pick<
  ExtensionMsgCommands,
  'fileInfo' | 'viewportRefresh' | 'scrollViewport' | 'counts'
>
export type OmegaEditResponses = Pick<
  ExtensionMsgResponses,
  'fileInfo' | 'viewportRefresh' | 'scrollViewport' | 'counts'
>

export type SearchRequest = {
  encoding: BufferEncoding | string
  searchStr: string | Uint8Array
  is_case_insensitive?: boolean
  is_reverse?: boolean
  offset?: number
  length?: number
  limit?: number
}
export type ReplaceRequest = {
  encoding: BufferEncoding | string
  searchStr: string | Uint8Array
  replaceStr: string | Uint8Array
  is_case_insensitive?: boolean
  is_reverse?: boolean
  offset?: number
  length?: number
  limit?: number
  overwriteOnly?: boolean
}

export type FileInfoResponse = {
  bom: string
  language: string
  contentType: string
  filename: string
}
export type RequestTypeMap = {
  [K in keyof OmegaEditRequests]: (
    content: OmegaEditRequests[K],
    onProcessed?: (response: OmegaEditResponses[K]) => any
  ) => Promise<OmegaEditResponses[K]>
}
interface RequestMap extends RequestTypeMap {}
export class OmegaEditRequestMap implements RequestMap {
  constructor(
    readonly sessionId: string,
    public viewportId: string,
    public processedCallback?: <K extends keyof RequestMap>(
      type: K,
      response: OmegaEditResponses[K]
    ) => any
  ) {}
  fileInfo(
    onProcessed?:
      | ((response: {
          filename: string
          bom: string
          language: string
          contentType: string
        }) => any)
      | undefined
  ): Promise<{
    filename: string
    bom: string
    language: string
    contentType: string
  }> {
    throw ''
  }

  scrollViewport: (content: {
    scrollOffset: number
    bytesPerRow: number
  }) => Promise<{
    srcOffset: number
    length: number
    bytesRemaining: number
    data: Uint8Array
    capacity: number
  }> = (content) => {
    return new Promise((res, rej) => {
      const { scrollOffset, bytesPerRow } = content
      // start of the row containing the offset, making sure the offset is never negative
      const startOffset = Math.max(
        0,
        scrollOffset - (scrollOffset % bytesPerRow)
      )
      modifyViewport(this.viewportId, startOffset, 1024).then((response) => {
        res({
          bytesRemaining: response.getFollowingByteCount(),
          capacity: 1024,
          data: response.getData_asU8(),
          length: response.getLength(),
          srcOffset: response.getOffset(),
        })
      })
    })
  }

  counts: (content: {
    type: 'applied' | 'undos' | 'all'
  }) => Promise<CountResponse> = (content) => {
    return new Promise(async (res, rej) => {
      if (!this) {
        rej("'this' is not defined in counts()")
      }
      const ret: CountResponse = {
        applied: -1,
        computedFileSize: -1,
        undos: -1,
      }
      const countResponse = await getCounts(this.sessionId, [
        CountKind.COUNT_CHANGES,
        CountKind.COUNT_UNDOS,
        CountKind.COUNT_COMPUTED_FILE_SIZE,
      ]).catch((err) => console.log(err))

      countResponse!.forEach((count) => {
        switch (count.getKind()) {
          case CountKind.COUNT_CHANGES:
            ret.applied = count.getCount()
            break
          case CountKind.COUNT_COMPUTED_FILE_SIZE:
            ret.computedFileSize = count.getCount()
            break
          case CountKind.COUNT_UNDOS:
            ret.undos = count.getCount()
            break
        }
      })
      res(ret)
      // .then((values) => {

      // })
    })
  }

  viewportRefresh(content: { viewportId: string }): Promise<{
    srcOffset: number
    length: number
    bytesRemaining: number
    data: Uint8Array
    capacity: number
  }> {
    return new Promise((res, rej) => {
      getViewportData(this.viewportId).then((response) => {
        res({
          srcOffset: response.getOffset(),
          length: response.getLength(),
          bytesRemaining: response.getFollowingByteCount(),
          data: response.getData_asU8(),
          capacity: 1024,
        })
      })
    })
  }
}
