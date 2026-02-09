// src/core/messages.ts

import { IServerHeartbeat } from '@omega-edit/client'
import { EditByteModes } from 'dataEditor/extension/editors/utils/dataFormatting'

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
//   data: {
//     selectionToFileOffset: $selectionDataStore.startOffset,
//     editedContent: $editorSelection,
//     viewport: $focusedViewportId,
//     selectionSize: $selectionSize,
//     encoding: $editorEncoding,
//     radix: $displayRadix,
//     editMode: $editMode,
//   }
export type EditedDataRequest = {
  selectionToFileOffset: number
  editedContent: string
  viewport: string
  selectionSize: number
  encoding: BufferEncoding
  radix: number
  editMode: EditByteModes
}
export type ApplyChangesData = {
  offset: number
  original_segment: Uint8Array<ArrayBufferLike>
  edited_segment: Uint8Array
}
export type ApplyChangesRequest = ApplyChangesData
export type SaveRequest = {
  targetFile: string
}

export interface ExtensionMsgCommands {
  counts: never
  clearChanges: never
  applyChanges: ApplyChangesRequest
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
  requestEditedData: EditedDataRequest
  save: SaveRequest
  saveAs: SaveRequest
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
export type EditedDataResponse = {
  data: Uint8Array
  dataDisplay: string
}
export interface ExtensionMsgResponses {
  clearChanges: void
  applyChanges: number
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
  redoChange: void
  replaceResults: void
  requestEditedData: EditedDataResponse
  save: void
  saveAs: void
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
  setUITheme: void
  showMessage: void
  undoChange: number
  updateLogicalDisplay: void
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
export type ReadResponse = {
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

export abstract class SaveAsStrategy {
  abstract getFile(): Promise<string>
  abstract confirm(): Promise<boolean>
  abstract notifyFailure(msg?: string): void
  abstract notifySuccess(): void
}
