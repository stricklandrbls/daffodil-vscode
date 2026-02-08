// src/core/messages.ts

import { IServerHeartbeat } from '@omega-edit/client'

export enum MessageCommand {
  clearChanges,
  applyChanges,
  editorOnChange,
  fileInfo,
  heartbeat,
  profile,
  redoChange,
  replaceResults,
  requestEditedData,
  save,
  saveAs,
  saveSegment,
  scrollViewport,
  search,
  replace,
  searchResults,
  setUITheme,
  showMessage,
  undoChange,
  updateLogicalDisplay,
  viewportRefresh,
}
export interface ExtensionMsgCommands {
  counts: never
  clearChanges: never
  applyChanges: {
    offset: number
    original_segment: Uint8Array<ArrayBufferLike>
    edited_segment: Uint8Array
  }
  editorOnChange: {
    // extension
    editMode: 'single' | 'multi'
    encoding: BufferEncoding | string
    selectionData: Uint8Array
  }
  fileInfo: never // service
  heartbeat: never // service
  profile: { start: number; length: number } // service
  redoChange: never
  replaceResults: never
  requestEditedData: never
  save: never
  saveAs: never
  saveSegment: { offset: number; length: number }
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
  searchResults: never
  setUITheme: never
  showMessage: never
  undoChange: never
  updateLogicalDisplay: never
  viewportRefresh: { viewportId: string }
}

export type CountResponse = {
  applied: number
  undos: number
  computedFileSize: number
}
export interface ExtensionMsgResponses {
  clearChanges: never
  applyChanges: {
    offset: number
    original_segment: Uint8Array
    edited_segment: Uint8Array
  }
  editorOnChange: {
    encodedStr: string
  }
  fileInfo: {
    filename: string
    bom: string
    language: string
    contentType: string
  } // service
  counts: CountResponse
  heartbeat: IServerHeartbeat & { port: number } // service
  profile: { start: number; length: number } // service
  redoChange: never
  replaceResults: never
  requestEditedData: never
  save: never
  saveAs: never
  saveSegment: { offset: number; length: number }
  scrollViewport: ReadResponse
  search: number[]
  replace: {
    encoding: BufferEncoding
    searchStr: string | Uint8Array
    is_case_insensitive?: boolean
    is_reverse?: boolean
    offset?: number
    length?: number
    limit?: number
    overwriteOnly?: boolean
  }
  searchResults: number[]
  setUITheme: never
  showMessage: never
  undoChange: never
  updateLogicalDisplay: never
  viewportRefresh: ReadResponse
}
export type ExtensionReqSubMap = Pick<
  ExtensionMsgCommands,
  keyof ExtensionMsgCommands
>
export type ExtensionResSubMap = Pick<
  ExtensionMsgResponses,
  keyof ExtensionMsgResponses
>
type ReadRequest = {
  offset: number
  capacity: number
  isFloating?: boolean
}
type ReadResponse = {
  srcOffset: number
  length: number
  bytesRemaining: number
  data: Uint8Array
  capacity: number
}
export enum MessageLevel {
  Error,
  Info,
  Warn,
}

export type RequestArgs<R, K extends keyof R> = [R[K]] extends [never]
  ? [type: K]
  : [type: K, payload: R[K]]
export interface ExtensionRequest {}
export interface ExtensionResponse {}
