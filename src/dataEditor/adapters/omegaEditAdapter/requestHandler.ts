import { modifyViewport, getViewportData } from "@omega-edit/client";
import { ExtensionMsgCommands, ExtensionMsgResponses } from "dataEditor/global";
import { DataEditorViewport, OmegaEditSession } from "./sessions";

export type RequestMap = {
  [K in keyof ExtensionMsgCommands]: (
    ids: { session: string; viewport: DataEditorViewport },
    content: ExtensionMsgCommands[K]
  ) => Promise<ExtensionMsgResponses[K]>
}
export class OmegaEditRequestMap {
  constructor(private sessionRef: OmegaEditSession) {}
  reqMap: RequestMap = {
      applyChanges: function (
          ids: { session: string; viewport: DataEditorViewport} ,
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
      profile: function (
          ids: { session: string; viewport: DataEditorViewport} ,
          content: { start: number; length: number} 
      ): Promise<{ start: number; length: number} > {
          throw new Error('Function not implemented.')
      },
      saveSegment: function (
          ids: { session: string; viewport: DataEditorViewport} ,
          content: { offset: number; length: number} 
      ): Promise<{ offset: number; length: number} > {
          throw new Error('Function not implemented.')
      },
      scrollViewport: function (
          ids: { session: string; viewport: DataEditorViewport} ,
          content: { scrollOffset: number; bytesPerRow: number} 
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
          ids: { session: string; viewport: DataEditorViewport} ,
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
          ids: { session: string; viewport: DataEditorViewport} ,
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
      viewportRefresh: function (
          ids: { session: string; viewport: DataEditorViewport} ,
          content: { offset: number; bytesPerRow: number} 
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
          ids: { session: string; viewport: DataEditorViewport} ,
          content: never
      ): Promise<{
          filename: string
          bom: string
          language: string
          contentType: string
          sizes: { computed: number; disk: number} 
          changes: { applied: number; undos: number} 
      }> {
          throw new Error('Function not implemented.')
      },
      clearChanges: function (ids: { session: string; viewport: DataEditorViewport }, content: never): Promise<never> {
          throw new Error('Function not implemented.')
      },
      editorOnChange: function (ids: { session: string; viewport: DataEditorViewport }, content: { editMode: 'single' | 'multi'; encoding: BufferEncoding | string; selectionData: Uint8Array }): Promise<{ encodedStr: string }> {
          throw new Error('Function not implemented.')
      },
      heartbeat: function (ids: { session: string; viewport: DataEditorViewport }, content: never): Promise<never> {
          throw new Error('Function not implemented.')
      },
      redoChange: function (ids: { session: string; viewport: DataEditorViewport }, content: never): Promise<never> {
          throw new Error('Function not implemented.')
      },
      replaceResults: function (ids: { session: string; viewport: DataEditorViewport }, content: never): Promise<never> {
          throw new Error('Function not implemented.')
      },
      requestEditedData: function (ids: { session: string; viewport: DataEditorViewport }, content: never): Promise<never> {
          throw new Error('Function not implemented.')
      },
      save: function (ids: { session: string; viewport: DataEditorViewport }, content: never): Promise<never> {
          throw new Error('Function not implemented.')
      },
      saveAs: function (ids: { session: string; viewport: DataEditorViewport }, content: never): Promise<never> {
          throw new Error('Function not implemented.')
      },
      searchResults: function (ids: { session: string; viewport: DataEditorViewport }, content: never): Promise<never> {
          throw new Error('Function not implemented.')
      },
      setUITheme: function (ids: { session: string; viewport: DataEditorViewport }, content: never): Promise<never> {
          throw new Error('Function not implemented.')
      },
      showMessage: function (ids: { session: string; viewport: DataEditorViewport }, content: never): Promise<never> {
          throw new Error('Function not implemented.')
      },
      undoChange: function (ids: { session: string; viewport: DataEditorViewport }, content: never): Promise<never> {
          throw new Error('Function not implemented.')
      },
      updateLogicalDisplay: function (ids: { session: string; viewport: DataEditorViewport }, content: never): Promise<never> {
          throw new Error('Function not implemented.')
      }
  }
  getRequestExecutor<K extends keyof RequestMap>(type: K): RequestMap[K] {
    return this.reqMap[type]
  }
}
