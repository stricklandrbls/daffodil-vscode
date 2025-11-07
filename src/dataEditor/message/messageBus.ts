import * as vscode from 'vscode'
import {
  EditorToUi,
  ExtensionMsgCommands,
  ExtensionMsgResponses,
  UiToEditor,
} from './messages'
import { MappedType } from 'dataEditor/service/requestHandler'

export type UIToEditorHandler = (m: UiToEditor) => void
export type EditorToUIHandler = (m: EditorToUi) => Thenable<boolean>
// src/core/messageBus.ts

export interface MessageBus<In, Out> {
  post<K extends keyof Out>(type: K, message: Out[K]): void
  onMessage(
    handler: <K extends keyof In>(type: K, content: In[K]) => Promise<void>
  ): () => void // unsubscribe
}

export interface ServiceBus<
  Requests extends MappedType,
  Responses extends MappedType,
> {
  onReceive<K extends keyof Requests>(
    handler: (type: K, request: Requests[K]) => any
  ): any
  send<K extends keyof Responses>(response: Responses[K]): any
}

// Extension host side (Editor <-> Webview)
export class WebviewBusHost
  implements MessageBus<ExtensionMsgCommands, ExtensionMsgResponses>
{
  private disposable?: vscode.Disposable
  constructor(readonly panel: vscode.WebviewPanel) {}
  onMessage(
    handler: <K extends keyof ExtensionMsgCommands>(
      type: K,
      msg: ExtensionMsgCommands[K]
    ) => Promise<void>
  ): () => void {
    // unsubscribe

    this.panel.webview.onDidReceiveMessage((msg) => {
      const command = msg.command
      const data = msg.data
      handler(command, data)
    }, this)

    return () => {
      this.disposable?.dispose()
      this.disposable = undefined
    }
  }

  post<K extends keyof ExtensionMsgResponses>(
    type: K,
    msg: ExtensionMsgResponses[K]
  ) {
    void this.panel.webview.postMessage({ command: type, data: msg })
  }
}
