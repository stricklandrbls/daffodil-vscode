// src/core/messages.ts
export enum Notification {
  ServiceConnected = 'ServiceConnected',
  ServiceDisconnected = 'ServiceDisconnected',
  Heartbeat = 'Heartbeat',
  DataUpdated = 'DataUpdated',
  Error = 'Error',
}

export interface UiToEditor {
  clearChanges: {}
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
  requestEditedData: {}
  save: {}
  saveAs: {}
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
// export type UiToEditor =
//   | { type: 'RequestBytes'; offset: number; length: number }
//   | { type: 'WriteBytes'; offset: number; data: Uint8Array }
//   | { type: 'Ping' }

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
export type UiToEditorMsg =
  | { clearChanges: {} }
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
  | { requestEditedData: {} }
  | { save: {} }
  | { saveAs: {} }
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
export interface ExtensionMsgCommands {
  clearChanges: {}
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
  fileInfo: {}
  heartbeat: {}
  profile: { start: number; length: number }
  redoChange: {}
  replaceResults: {}
  requestEditedData: {}
  save: {}
  saveAs: {}
  saveSegment: { offset: number; length: number }
  scrollViewport: {}
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
  searchResults: {}
  setUITheme: {}
  showMessage: {}
  undoChange: {}
  updateLogicalDisplay: {}
  viewportRefresh: { offset: number; bytesPerRow: number }
}
export enum MessageLevel {
  Error,
  Info,
  Warn,
}
