import {
  modifyViewport,
  getCounts,
  CountKind,
  edit,
  undo,
  saveSession,
  IOFlags,
} from '@omega-edit/client'
import { ExtensionMsgCommands, ExtensionMsgResponses } from 'dataEditor/global'
import {
  ApplyChangesData,
  CountResponse,
  ReadResponse,
  SaveRequest,
} from 'dataEditor/core/message/messages'
export type OmegaEditRequestableKeys =
  | 'fileInfo'
  | 'viewportRefresh'
  | 'scrollViewport'
  | 'counts'
  | 'applyChanges'
  | 'undoChange'
  | 'save'
  | 'saveAs'
  | 'saveSegment'
  | 'profile'
  | 'clearChanges'

export type OmegaEditRequestTypeMap = {
  [K in keyof OmegaEditRequests]: (
    request: OmegaEditRequests[K],
    opts?: OptionalIdsType
  ) => OmegaEditResponses[K] | Promise<OmegaEditResponses[K]>
}
export type OptionalIdsType = {
  ids: { sessionId?: string; viewportId?: string }
}
export type OmegaEditRequests = Pick<
  ExtensionMsgCommands,
  OmegaEditRequestableKeys
>

export type OmegaEditResponses = Pick<
  ExtensionMsgResponses,
  OmegaEditRequestableKeys
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
    sessionId?: string,
    onProcessed?: (response: OmegaEditResponses[K]) => any
  ) => Promise<OmegaEditResponses[K]>
}

export const DefaultOERequestHandler: OmegaEditRequestTypeMap = {
  fileInfo: function (
    request: never,
    opts?: OptionalIdsType
  ):
    | { filename: string; bom: string; language: string; contentType: string }
    | Promise<{
        filename: string
        bom: string
        language: string
        contentType: string
      }> {
    throw new Error('Function not implemented.')
  },
  viewportRefresh: function (
    request: { viewportId: string },
    opts?: OptionalIdsType
  ): ReadResponse | Promise<ReadResponse> {
    throw new Error('Function not implemented.')
  },
  scrollViewport: function (
    request: { scrollOffset: number; bytesPerRow: number },
    opts?: OptionalIdsType
  ): ReadResponse | Promise<ReadResponse> {
    return new Promise((res, rej) => {
      if (!opts?.ids?.viewportId)
        rej(`Service Request (scrollViewport) requires viewport id`)
      const { scrollOffset, bytesPerRow } = request
      // start of the row containing the offset, making sure the offset is never negative
      const startOffset = Math.max(
        0,
        scrollOffset - (scrollOffset % bytesPerRow)
      )
      modifyViewport(opts!.ids.viewportId!, startOffset, 1024).then(
        (response) => {
          res({
            bytesRemaining: response.getFollowingByteCount(),
            capacity: 1024,
            data: response.getData_asU8(),
            length: response.getLength(),
            srcOffset: response.getOffset(),
          })
        }
      )
    })
  },
  counts: function (
    request: never,
    opts?: OptionalIdsType
  ): CountResponse | Promise<CountResponse> {
    return new Promise(async (res, rej) => {
      const ret: CountResponse = {
        applied: -1,
        computedFileSize: -1,
        undos: -1,
      }
      const countResponse = await getCounts(opts!.ids.sessionId, [
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
    })
  },
  applyChanges: function (
    request: ApplyChangesData,
    opts?: OptionalIdsType
  ): number | Promise<number> {
    return new Promise((res, rej) => {
      edit(
        opts!.ids.sessionId!,
        request.offset,
        request.original_segment,
        request.edited_segment
      )
        .then((serial) => {
          res(serial)
        })
        .catch((err) => {
          rej(err)
        })
    })
  },
  undoChange: function (
    request: never,
    opts?: OptionalIdsType
  ): number | Promise<number> {
    return new Promise((res, rej) => {
      undo(opts!.ids.sessionId!)
        .then((serial) => {
          res(serial)
        })
        .catch((err) => {
          rej(err)
        })
    })
  },
  save: function (request: SaveRequest, opts?: OptionalIdsType): Promise<void> {
    return new Promise((res, rej) => {
      saveSession(
        opts!.ids.sessionId!,
        request.targetFile!,
        IOFlags.IO_FLG_OVERWRITE
      ).catch((err) => {
        rej(err)
      })
      return
    })
  },
  saveAs: function (
    request: SaveRequest,
    opts?: OptionalIdsType
  ): Promise<void> {
    throw new Error('Function not implemented.')
  },
  saveSegment: function (
    request: { offset: number; length: number },
    opts?: OptionalIdsType
  ):
    | { offset: number; length: number }
    | Promise<{ offset: number; length: number }> {
    throw new Error('Function not implemented.')
  },
  profile: function (
    request: { start: number; length: number },
    opts?: OptionalIdsType
  ):
    | { start: number; length: number }
    | Promise<{ start: number; length: number }> {
    throw new Error('Function not implemented.')
  },
  clearChanges: function (
    request: never,
    opts?: OptionalIdsType
  ): Promise<void> {
    throw new Error('Function not implemented.')
  },
}
// export class OmegaEditRequestMap implements RequestMap {
//   constructor(
//     readonly sessionId: string,
//     public viewportId: string,
//     public processedCallback?: <K extends keyof RequestMap>(
//       type: K,
//       response: OmegaEditResponses[K]
//     ) => any
//   ) {}
//   undoChange(
//     content: number,
//     sessionId?: string,
//     onProcessed?: ((response: never) => any) | undefined
//   ): Promise<number> {
//     return new Promise((res, rej) => {
//       if (!sessionId) rej('[OmegaEdit::undo] Requires session id')
//       undo(sessionId!).then((serial) => {
//         res(serial)
//       })
//     })
//   }

//   save(
//     content: SaveRequest,
//     sessionId?: string,
//     onProcessed?: ((response: never) => any) | undefined
//   ): Promise<never> {
//     return new Promise((res, rej) => {
//       if (!sessionId) rej('[OmegaEdit::save] Requires session id')
//       saveSession(sessionId!, content.targetFile)
//     })
//   }
//   saveAs(
//     content: SaveAsRequest,
//     sessionId?: string,
//     onProcessed?: ((response: never) => any) | undefined
//   ): Promise<never> {
//     return new Promise((res, rej) => {})
//   }
//   saveSegment(
//     content: { offset: number; length: number },
//     sessionId?: string,
//     onProcessed?:
//       | ((response: { offset: number; length: number }) => any)
//       | undefined
//   ): Promise<{ offset: number; length: number }> {
//     return new Promise((res, rej) => {})
//   }
//   profile(
//     content: { start: number; length: number },
//     sessionId?: string,
//     onProcessed?:
//       | ((response: { start: number; length: number }) => any)
//       | undefined
//   ): Promise<{ start: number; length: number }> {
//     return new Promise((res, rej) => {})
//   }
//   clearChanges(
//     content: never,
//     sessionId?: string,
//     onProcessed?: ((response: never) => any) | undefined
//   ): Promise<never> {
//     return new Promise((res, rej) => {})
//   }
//   applyChanges(
//     content: ApplyChangesData,
//     sessionId?: string,
//     onProcessed?: ((response: number) => any) | undefined
//   ): Promise<number> {
//     return new Promise((res, rej) => {
//       edit(
//         sessionId!,
//         content.offset,
//         content.original_segment,
//         content.edited_segment
//       )
//         .then((serial) => {
//           res(serial)
//         })
//         .catch((err) => {
//           rej(err)
//         })
//     })
//   }
//   fileInfo(
//     onProcessed?:
//       | ((response: {
//           filename: string
//           bom: string
//           language: string
//           contentType: string
//         }) => any)
//       | undefined
//   ): Promise<{
//     filename: string
//     bom: string
//     language: string
//     contentType: string
//   }> {
//     throw ''
//   }

//   scrollViewport: (content: {
//     scrollOffset: number
//     bytesPerRow: number
//   }) => Promise<{
//     srcOffset: number
//     length: number
//     bytesRemaining: number
//     data: Uint8Array
//     capacity: number
//   }> = (content) => {
//     return new Promise((res, rej) => {
//       const { scrollOffset, bytesPerRow } = content
//       // start of the row containing the offset, making sure the offset is never negative
//       const startOffset = Math.max(
//         0,
//         scrollOffset - (scrollOffset % bytesPerRow)
//       )
//       modifyViewport(this.viewportId, startOffset, 1024).then((response) => {
//         res({
//           bytesRemaining: response.getFollowingByteCount(),
//           capacity: 1024,
//           data: response.getData_asU8(),
//           length: response.getLength(),
//           srcOffset: response.getOffset(),
//         })
//       })
//     })
//   }

//   counts: (content: {
//     type: 'applied' | 'undos' | 'all'
//   }) => Promise<CountResponse> = (content) => {
//     return new Promise(async (res, rej) => {
//       if (!this) {
//         rej("'this' is not defined in counts()")
//       }
//       const ret: CountResponse = {
//         applied: -1,
//         computedFileSize: -1,
//         undos: -1,
//       }
//       const countResponse = await getCounts(this.sessionId, [
//         CountKind.COUNT_CHANGES,
//         CountKind.COUNT_UNDOS,
//         CountKind.COUNT_COMPUTED_FILE_SIZE,
//       ]).catch((err) => console.log(err))

//       countResponse!.forEach((count) => {
//         switch (count.getKind()) {
//           case CountKind.COUNT_CHANGES:
//             ret.applied = count.getCount()
//             break
//           case CountKind.COUNT_COMPUTED_FILE_SIZE:
//             ret.computedFileSize = count.getCount()
//             break
//           case CountKind.COUNT_UNDOS:
//             ret.undos = count.getCount()
//             break
//         }
//       })
//       res(ret)
//       // .then((values) => {

//       // })
//     })
//   }

//   viewportRefresh(content: { viewportId: string }): Promise<{
//     srcOffset: number
//     length: number
//     bytesRemaining: number
//     data: Uint8Array
//     capacity: number
//   }> {
//     return new Promise((res, rej) => {
//       getViewportData(this.viewportId).then((response) => {
//         res({
//           srcOffset: response.getOffset(),
//           length: response.getLength(),
//           bytesRemaining: response.getFollowingByteCount(),
//           data: response.getData_asU8(),
//           capacity: 1024,
//         })
//       })
//     })
//   }
// }
