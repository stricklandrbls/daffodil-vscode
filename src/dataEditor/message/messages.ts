// src/core/messages.ts
export enum Notification {
  ServiceConnected = 'ServiceConnected',
  ServiceDisconnected = 'ServiceDisconnected',
  Heartbeat = 'Heartbeat',
  DataUpdated = 'DataUpdated',
  Error = 'Error',
}

export interface UiToEditor {
  clearChanges: never
  applyChanges: {
    offset: number
    original_segment: Uint8Array<ArrayBufferLike>
    edited_segment: Uint8Array
  }
  editorOnChange: {
    editMode: 'single' | 'multi'
    encoding: BufferEncoding
    selectionData: string
  }

  profile: { start: number; length: number }
  requestEditedData: never
  save: never
  saveAs: never
  saveSegment: { offset: number; length: number }
  search: {
    encoding: BufferEncoding
    searchStr: string | Uint8Array
    is_case_insensitive?: boolean
    is_reverse?: boolean
    offset?: number
    length?: number
    limit?: number
  }
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
}

export type EditorToUi =
  | { type: 'Notify'; kind: Notification; payload?: unknown }
  | { type: 'Bytes'; offset: number; data: Uint8Array }
  | { type: 'Ack'; id?: string }
  | { type: 'Error'; message: string; details?: unknown }

// Narrow helper
export type MessageDirection = UiToEditor | EditorToUi

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
export type UiToEditorMsgId =
  | 'ClearChanges'
  | 'ApplyChanges'
  | 'EditorOnChange'
  | 'Profile'
  | 'RequestEditedData'
  | 'Save'
  | 'SaveAs'
  | 'SaveSegment'
  | 'Search'
  | 'Replace'
export interface UiToEditorMsgs {
  ClearChanges: never
  ApplyChanges: {
    editMode: 'single' | 'multi'
    encoding: BufferEncoding
    selectionData: string
  }
  EditorOnChange: { start: number; length: number }
  Profile: never
  RequestEditedData: never
  Save: never
  SaveAs: never
  SaveSegment: { offset: number; length: number }
  Search: {
    encoding: BufferEncoding
    searchStr: string | Uint8Array
    is_case_insensitive?: boolean
    is_reverse?: boolean
    offset?: number
    length?: number
    limit?: number
  }
  Replace: {
    encoding: BufferEncoding
    searchStr: string | Uint8Array
    is_case_insensitive?: boolean
    is_reverse?: boolean
    offset?: number
    length?: number
    limit?: number
    overwriteOnly?: boolean
  }
}
export type UiToEditorMsg =
  | { clearChanges: never }
  | {
      applyChanges: {
        offset: number
        original_segment: Uint8Array<ArrayBufferLike>
        edited_segment: Uint8Array
      }
    }
  | {
      editorOnChange: {
        editMode: 'single' | 'multi'
        encoding: BufferEncoding
        selectionData: string
      }
    }
  | { profile: { start: number; length: number } }
  | { requestEditedData: never }
  | { save: never }
  | { saveAs: never }
  | { saveSegment: { offset: number; length: number } }
  | {
      search: {
        encoding: BufferEncoding
        searchStr: string | Uint8Array
        is_case_insensitive?: boolean
        is_reverse?: boolean
        offset?: number
        length?: number
        limit?: number
      }
    }
  | {
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
    }

export interface DataEditorAPI {
  createMessage<K extends UiToEditorMsg>(type: K)
}
const t: DataEditorAPI = {
  createMessage: function <K extends UiToEditorMsg>(type: K) {
    throw new Error('Function not implemented.')
  },
}

export interface ExtensionMsgCommands {
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
    encoding: BufferEncoding
    searchStr: string | Uint8Array
    is_case_insensitive?: boolean
    is_reverse?: boolean
    offset?: number
    length?: number
    limit?: number
  }
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
  searchResults: never
  setUITheme: never
  showMessage: never
  undoChange: never
  updateLogicalDisplay: never
  viewportRefresh: { offset: number; bytesPerRow: number }
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
    sizes: { computed: number; disk: number }
    changes: { applied: number; undos: number }
  } // service
  heartbeat: never // service
  profile: { start: number; length: number } // service
  redoChange: never
  replaceResults: never
  requestEditedData: never
  save: never
  saveAs: never
  saveSegment: { offset: number; length: number }
  scrollViewport: ReadResponse
  search: {
    encoding: BufferEncoding
    searchStr: string | Uint8Array
    is_case_insensitive?: boolean
    is_reverse?: boolean
    offset?: number
    length?: number
    limit?: number
  }
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
  searchResults: never
  setUITheme: never
  showMessage: never
  undoChange: never
  updateLogicalDisplay: never
  viewportRefresh: ReadResponse
  read: ReadResponse
}
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
