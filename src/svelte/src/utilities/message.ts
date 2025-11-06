/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export enum MessageCommand {
  clearChanges = 'clearChanges',
  applyChanges = 'applyChanges',
  editorOnChange = 'editorOnChange',
  fileInfo = 'fileInfo',
  heartbeat = 'heartbeat',
  profile = 'profile',
  redoChange = 'redoChange',
  replaceResults = 'replaceResults',
  requestEditedData = 'requestEditedData',
  save = 'save',
  saveAs = 'saveAs',
  saveSegment = 'saveSegment',
  scrollViewport = 'scrollViewport',
  search = 'search',
  replace = 'replace',
  searchResults = 'searchResults',
  setUITheme = 'setUITheme',
  showMessage = 'showMessage',
  undoChange = 'undoChange',
  updateLogicalDisplay = 'updateLogicalDisplay',
  viewportRefresh = 'viewportRefresh',
}

export enum MessageLevel {
  Error,
  Info,
  Warn,
}

export type EditorMessage = {
  command: MessageCommand
  data: Record<string, any>
}

export interface ExtensionMsgCommands {
  clearChanges: {}
  applyChanges: {
    offset: number
    original_segment: Uint8Array<ArrayBufferLike>
    edited_segment: Uint8Array
  }
  editorOnChange: {
    // extension
    editMode: 'single' | 'multi'
    encoding: BufferEncoding
    selectionData: string
  }
  fileInfo: {} // service
  heartbeat: {} // service
  profile: { start: number; length: number } // service
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
export interface ExtensionMsgResponses {
  clearChanges: {}
  applyChanges: {
    offset: number
    original_segment: Uint8Array<ArrayBufferLike>
    edited_segment: Uint8Array
  }
  editorOnChange: {
    // extension
    editMode: 'single' | 'multi'
    encoding: BufferEncoding
    selectionData: string
  }
  fileInfo: {} // service
  heartbeat: {} // service
  profile: { start: number; length: number } // service
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
