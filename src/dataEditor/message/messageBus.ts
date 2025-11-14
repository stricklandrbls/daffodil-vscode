import * as vscode from 'vscode'
import {
  ExtensionMsgCommands,
  ExtensionMsgResponses,
  ExtensionResponse,
  RequestArgs,
} from './messages'

// src/core/messageBus.ts

export interface MessageBus<In, Out> {
  post<K extends keyof Out>(type: K, message: Out[K]): void
  onMessageRx(
    // handler: <K extends keyof In>(...args: RequestArgs<In, K>) => Promise<any>

    handler: <K extends keyof In>(...args: RequestArgs<In, K>) => Promise<any>
  ): () => void // unsubscribe
}

// Extension host side (Editor <-> Webview)
export class WebviewBusHost
  implements MessageBus<ExtensionMsgCommands, ExtensionMsgResponses>
{
  private disposable?: vscode.Disposable
  constructor(readonly panel: vscode.WebviewPanel) {}
  onMessageRx(
    handler: <K extends keyof ExtensionMsgCommands>(
      ...args: RequestArgs<ExtensionMsgCommands, K>
    ) => Promise<ExtensionMsgResponses[K]>
  ): () => void {
    // unsubscribe

    this.panel.webview.onDidReceiveMessage((msg) => {
      const command = msg.command
      const data = msg.data
      handler(command, data)
    })

    return () => {
      this.disposable?.dispose()
      this.disposable = undefined
    }
  }

  post<K extends keyof ExtensionResponse>(type: K, msg: ExtensionResponse[K]) {
    void this.panel.webview.postMessage({ command: type, data: msg })
  }
}
