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
import {
  BaseRequests,
  MappedType,
} from 'dataEditor/core/service/requestHandler'

export type UIToEditorHandler = (m: UiToEditor) => void
export type EditorToUIHandler = (m: EditorToUi) => Thenable<boolean>
// src/core/messageBus.ts

// export interface MessageBus<In, Out> {
//   post<K extends keyof Out>(type: K, message: Out[K]): void
//   receiver<K extends keyof ExtensionMsgCommands>(
//     ...args: RequestArgs<ExtensionMsgCommands, K>
//   ): Promise<ExtensionMsgResponses[K]>
//   onMessageRx(
//     handler: <K extends keyof In>(...args: RequestArgs<In, K>) => Promise<any>,
//     thisArg?: any
//   ): () => void // unsubscribe
// }

export interface IMessageBus<In, Out extends Record<keyof In, any>> {
  post<K extends keyof Out>(type: K, message: Out[K]): void
  receive<K extends keyof In>(...args: RequestArgs<In, K>): Promise<Out[K]>
}

export abstract class MessageBus<In, Out extends Record<keyof In, any>> {
  abstract post<K extends keyof In>(type: K, message: Out[K]): void
  abstract receive<K extends keyof In>(
    ...args: RequestArgs<In, K>
  ): Promise<Out[K]>

  onMessageRx(
    handler: <K extends keyof In>(...args: RequestArgs<In, K>) => Promise<any>,
    thisArg?: any
  ): void {
    // unsubscribe
    this.receive = handler
  }
}

// Extension host side (Editor <-> Webview)
export class WebviewBusHost
  implements MessageBus<ExtensionMsgCommands, ExtensionMsgResponses>
{
  private disposable?: vscode.Disposable
  constructor(readonly panel: vscode.WebviewPanel) {}
  receive<K extends keyof ExtensionMsgCommands>(
    ...args: RequestArgs<ExtensionMsgCommands, K>
  ): Promise<ExtensionMsgResponses[K]> {
    throw new Error('Method not implemented.')
  }
  onMessageRx(
    handler: <K extends keyof ExtensionMsgCommands>(
      ...args: RequestArgs<ExtensionMsgCommands, K>
    ) => Promise<ExtensionMsgResponses[K]>,
    thisArg?: any
  ): () => void {
    // unsubscribe
    this.receive = handler.bind(thisArg)
    this.panel.webview.onDidReceiveMessage((msg) => {
      const command = msg.command
      const data = msg.data
      this.receive(command, data)
    })
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
