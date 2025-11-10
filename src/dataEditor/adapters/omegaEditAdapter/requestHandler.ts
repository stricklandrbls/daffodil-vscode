import {
  modifyViewport,
  getViewportData,
  searchSession,
} from '@omega-edit/client'
import { ExtensionMsgCommands, ExtensionMsgResponses } from 'dataEditor/global'
import {
  DataEditorViewport,
  OmegaEditRequests,
  OmegaEditResponses,
  OmegaEditSession,
} from './sessions'
import { RequestArgs } from 'dataEditor/message/messages'

export interface OmegaEditRequest {
  fileInfo: never // service
  heartbeat: never // service
  profile: { start: number; length: number } // service
  scrollViewport: {
    scrollOffset: number
    bytesPerRow: number
  }
  search: {
    encoding: BufferEncoding | string
    searchStr: string | Uint8Array
    is_case_insensitive?: boolean
    is_reverse?: boolean
    offset?: number
    length?: number
    limit?: number
  }
  replace: {
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
  undoChange: never
  redoChange: never
  clearChanges: never
  applyChanges: {
    offset: number
    original_segment: Uint8Array<ArrayBufferLike>
    edited_segment: Uint8Array
  }
}
export interface OmegaEditResponse {
  fileInfo: never // service
  heartbeat: never // service
  profile: { start: number; length: number } // service
  scrollViewport: {
    scrollOffset: number
    bytesPerRow: number
  }
  search: {
    encoding: BufferEncoding | string
    searchStr: string | Uint8Array
    is_case_insensitive?: boolean
    is_reverse?: boolean
    offset?: number
    length?: number
    limit?: number
  }
  replace: {
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
  undoChange: never
  redoChange: never
  clearChanges: never
  applyChanges: {
    offset: number
    original_segment: Uint8Array<ArrayBufferLike>
    edited_segment: Uint8Array
  }
}
export type RequestMap = {
  [K in keyof OmegaEditRequests]: (
    content: OmegaEditRequests[K]
  ) => Promise<OmegaEditResponses[K]>
}

export class OmegaEditRequestMap {
  constructor(private sessionRef: OmegaEditSession) {}
  private requestMap: RequestMap = {
    fileInfo: function (
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
    viewportRefresh: function (content: {
      offset: number
      bytesPerRow: number
    }): Promise<{
      srcOffset: number
      length: number
      bytesRemaining: number
      data: Uint8Array
      capacity: number
    }> {
      throw new Error('Function not implemented.')
    },
    scrollViewport: function (content: {
      scrollOffset: number
      bytesPerRow: number
    }): Promise<{
      srcOffset: number
      length: number
      bytesRemaining: number
      data: Uint8Array
      capacity: number
    }> {
      throw new Error('Function not implemented.')
    },
  }
  // reqMap: RequestMap = {
  //   applyChanges: function (
  //     ids: { session: string; viewport: DataEditorViewport },
  //     content: {
  //       offset: number
  //       original_segment: Uint8Array<ArrayBufferLike>
  //       edited_segment: Uint8Array
  //     }
  //   ): Promise<{
  //     offset: number
  //     original_segment: Uint8Array<ArrayBufferLike>
  //     edited_segment: Uint8Array
  //   }> {
  //     throw new Error('Function not implemented.')
  //   },
  //   profile: function (
  //     ids: { session: string; viewport: DataEditorViewport },
  //     content: { start: number; length: number }
  //   ): Promise<{ start: number; length: number }> {
  //     throw new Error('Function not implemented.')
  //   },
  //   saveSegment: function (
  //     ids: { session: string; viewport: DataEditorViewport },
  //     content: { offset: number; length: number }
  //   ): Promise<{ offset: number; length: number }> {
  //     throw new Error('Function not implemented.')
  //   },
  //   scrollViewport: (ids, content) => {

  //   },
  //   viewportRefresh: function (
  //     ids: { session: string; viewport: DataEditorViewport },
  //     content: { offset: number; bytesPerRow: number }
  //   ): Promise<{
  //     srcOffset: number
  //     length: number
  //     bytesRemaining: number
  //     data: Uint8Array
  //     capacity: number
  //   }> {
  //     //TODO: Check if fetch to service is required (new offset outside of current viewport offset bounds)
  //     //  i.e, `modifyViewport` or `getViewportData`
  //     return new Promise(async (res, rej) => {
  //       const response = ids.viewport.requiresFetchAt(content.offset)
  //         ? await modifyViewport(
  //             ids.viewport.id,
  //             content.offset,
  //             DataEditorViewport.capacity
  //           )
  //         : await getViewportData(ids.viewport.id)
  //       ids.viewport.setViewport(
  //         response.getOffset(),
  //         response.getLength(),
  //         response.getFollowingByteCount(),
  //         response.getData_asU8()
  //       )
  //       res({ ...ids.viewport.toObject() })
  //     })
  //   },
  //   fileInfo: function (
  //     ids: { session: string; viewport: DataEditorViewport },
  //     content: never
  //   ): Promise<{
  //     filename: string
  //     bom: string
  //     language: string
  //     contentType: string
  //     sizes: { computed: number; disk: number }
  //     changes: { applied: number; undos: number }
  //   }> {
  //     throw new Error('Function not implemented.')
  //   },
  //   clearChanges: function (
  //     ids: { session: string; viewport: DataEditorViewport },
  //     content: never
  //   ): Promise<never> {
  //     throw new Error('Function not implemented.')
  //   },
  //   editorOnChange: function (
  //     ids: { session: string; viewport: DataEditorViewport },
  //     content: {
  //       editMode: 'single' | 'multi'
  //       encoding: BufferEncoding | string
  //       selectionData: Uint8Array
  //     }
  //   ): Promise<{ encodedStr: string }> {
  //     throw new Error('Function not implemented.')
  //   },
  //   heartbeat: function (
  //     ids: { session: string; viewport: DataEditorViewport },
  //     content: never
  //   ): Promise<never> {
  //     throw new Error('Function not implemented.')
  //   },
  //   redoChange: function (
  //     ids: { session: string; viewport: DataEditorViewport },
  //     content: never
  //   ): Promise<never> {
  //     throw new Error('Function not implemented.')
  //   },
  //   replaceResults: function (
  //     ids: { session: string; viewport: DataEditorViewport },
  //     content: never
  //   ): Promise<never> {
  //     throw new Error('Function not implemented.')
  //   },
  //   requestEditedData: function (
  //     ids: { session: string; viewport: DataEditorViewport },
  //     content: never
  //   ): Promise<never> {
  //     throw new Error('Function not implemented.')
  //   },
  //   save: function (
  //     ids: { session: string; viewport: DataEditorViewport },
  //     content: never
  //   ): Promise<never> {
  //     throw new Error('Function not implemented.')
  //   },
  //   saveAs: function (
  //     ids: { session: string; viewport: DataEditorViewport },
  //     content: never
  //   ): Promise<never> {
  //     throw new Error('Function not implemented.')
  //   },
  //   searchResults: function (
  //     ids: { session: string; viewport: DataEditorViewport },
  //     content: never
  //   ): Promise<never> {
  //     throw new Error('Function not implemented.')
  //   },
  //   setUITheme: function (
  //     ids: { session: string; viewport: DataEditorViewport },
  //     content: never
  //   ): Promise<never> {
  //     throw new Error('Function not implemented.')
  //   },
  //   showMessage: function (
  //     ids: { session: string; viewport: DataEditorViewport },
  //     content: never
  //   ): Promise<never> {
  //     throw new Error('Function not implemented.')
  //   },
  //   undoChange: function (
  //     ids: { session: string; viewport: DataEditorViewport },
  //     content: never
  //   ): Promise<never> {
  //     throw new Error('Function not implemented.')
  //   },
  //   updateLogicalDisplay: function (
  //     ids: { session: string; viewport: DataEditorViewport },
  //     content: never
  //   ): Promise<never> {
  //     throw new Error('Function not implemented.')
  //   },
  //   replace: function (
  //     ids: { session: string; viewport: DataEditorViewport },
  //     content: {
  //       encoding: BufferEncoding | string
  //       searchStr: string | Uint8Array
  //       replaceStr: string | Uint8Array
  //       is_case_insensitive?: boolean
  //       is_reverse?: boolean
  //       offset?: number
  //       length?: number
  //       limit?: number
  //       overwriteOnly?: boolean
  //     }
  //   ): Promise<{
  //     encoding: BufferEncoding
  //     searchStr: string | Uint8Array
  //     is_case_insensitive?: boolean
  //     is_reverse?: boolean
  //     offset?: number
  //     length?: number
  //     limit?: number
  //     overwriteOnly?: boolean
  //   }> {
  //     throw new Error('Function not implemented.')
  //   },
  //   search: function (
  //     ids: { session: string; viewport: DataEditorViewport },
  //     content: {
  //       encoding: BufferEncoding | string
  //       searchStr: string | Uint8Array
  //       is_case_insensitive?: boolean
  //       is_reverse?: boolean
  //       offset?: number
  //       length?: number
  //       limit?: number
  //     }
  //   ): Promise<number[]> {
  //     return searchSession(
  //       ids.session,
  //       content.searchStr,
  //       content.is_case_insensitive,
  //       content.is_reverse,
  //       content.offset,
  //       content.length,
  //       content.limit
  //     )
  //   },
  // }

  getRequestExecutor<K extends keyof RequestMap>(type: K): RequestMap[K] {
    return this.requestMap[type]
  }
  setRequestExecutor<K extends keyof RequestMap>(
    type: K,
    executor: RequestMap[K]
  ) {
    this.requestMap[type] = executor
  }
}
