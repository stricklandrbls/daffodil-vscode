import * as vscode from 'vscode'
import {
  EditorToUi,
  ExtensionMsgCommands,
  ExtensionMsgResponses,
  ExtensionRequest,
  ExtensionResponse,
  RequestArgs,
  UiToEditor,
} from './messages'
import { BaseRequests, MappedType } from 'dataEditor/service/requestHandler'

export type UIToEditorHandler = (m: UiToEditor) => void
export type EditorToUIHandler = (m: EditorToUi) => Thenable<boolean>
// src/core/messageBus.ts

export interface MessageBus<In, Out> {
  post<K extends keyof Out>(type: K, message: Out[K]): void
  onMessageRx(
    handler: <K extends keyof In>(...args: RequestArgs<In, K>) => Promise<void>
  ): () => void // unsubscribe
}

// Extension host side (Editor <-> Webview)
export class WebviewBusHost
  implements MessageBus<ExtensionRequest, ExtensionResponse>
{
  private disposable?: vscode.Disposable
  constructor(readonly panel: vscode.WebviewPanel) {}
  onMessageRx(
    handler: <K extends keyof ExtensionRequest>(
      ...args: RequestArgs<ExtensionRequest, K>
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

  post<K extends keyof ExtensionResponse>(type: K, msg: ExtensionResponse[K]) {
    void this.panel.webview.postMessage({ command: type, data: msg })
  }
}
