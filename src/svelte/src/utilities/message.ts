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

import type {
  ExtensionMsgCommands,
  ExtensionMsgResponses,
} from 'dataEditor/core/message/messages'

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

window.addEditorMessageListener = <K extends keyof ExtensionMsgCommands>(
  type: K,
  listener: (response: ExtensionMsgResponses[K]) => void
): void => {
  window.addEventListener('message', (event: MessageEvent) => {
    const msg = event.data as {
      command: keyof ExtensionMsgCommands
      data: unknown
    }
    if (msg.command === type) {
      // Use a type assertion since runtime can't validate generics
      listener(msg.data as ExtensionMsgResponses[typeof type])
    }
  })
}

window.addListenerOnEditorMessages = <K extends keyof ExtensionMsgCommands>(
  listener: (response: ExtensionMsgResponses[K]) => void,
  ...types: K[]
) => {
  window.addEventListener('message', (event: MessageEvent) => {
    const msg = event.data as {
      command: keyof ExtensionMsgCommands
      data: unknown
    }
    // if(types.includes(msg.command))
    if (types.includes(event.data.command)) {
      listener(msg.data as ExtensionMsgResponses[K])
    }
  })
}

window.editor_message
