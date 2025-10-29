import * as vscode from 'vscode'
import { EditorToUi, ExtensionMsgCommands, UiToEditor } from './messages'
import { MappedType } from 'dataEditor/service/requestHandler'
import {
  OmegaEditRequests,
  OmegaEditResponses,
} from 'dataEditor/adapters/omegaEditAdapter/requestHandler'

export type UIToEditorHandler = (m: UiToEditor) => void
export type EditorToUIHandler = (m: EditorToUi) => Thenable<boolean>
// src/core/messageBus.ts

export interface MessageBus<In, Out> {
  post(message: Out): void
  onMessage(handler: (msg: In) => Promise<void>): () => void // unsubscribe
}

// Implementations contain member for sending content when processed.
// UI: vscodeAPI for `postMessage()` and window for `addListener()` for receipt
// Host: webview panel for panel's `postMessage()` and `onDidReceiveMessage()` for receipt
//
// ServiceExternal:
//  TX: 'Receiver' class for `respond()`
//  RX: 'Handler' class for `onRequest()`
// ServiceExtension:
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
export class WebviewBusHost implements MessageBus<UiToEditor, EditorToUi> {
  private disposable?: vscode.Disposable
  constructor(private readonly panel: vscode.WebviewPanel) {}
  onMessage(
    handler: (msg: { [K in keyof UiToEditor]: UiToEditor[K] }) => Promise<void>
  ): () => void {
    // unsubscribe

    this.panel.webview.onDidReceiveMessage((msg) => {
      handler(msg)
    })

    return () => {
      this.disposable?.dispose()
      this.disposable = undefined
    }
  }

  post(message: EditorToUi) {
    void this.panel.webview.postMessage(message)
  }
  // onMessage(handler: (msg: UiToEditor) => void): () => void {
  //   this.disposable = this.panel.webview.onDidReceiveMessage((msg) => {
  //     handler(msg as UiToEditor)
  //   })
  //   return () => {
  //     this.disposable?.dispose()
  //     this.disposable = undefined
  //   }
  // }
}
export class OmegaEditServiceBus
  implements ServiceBus<OmegaEditRequests, OmegaEditResponses>
{
  constructor(
    private requestHandler: <K extends keyof OmegaEditRequests>(
      type: K,
      request: OmegaEditRequests[K]
    ) => any
  ) {}
  onReceive<K extends keyof OmegaEditRequests>(
    handler: (type: K, request: OmegaEditRequests[K]) => any
  ) {
    this.requestHandler
  }
  send<K extends keyof OmegaEditResponses>(response: OmegaEditResponses[K]) {
    throw new Error('Method not implemented.')
  }
}
// export class ServiceBus implements MessageBus<any, any> {
//   post(message: any): void {
//     throw new Error('Method not implemented.')
//   }
//   onMessage(handler: (msg: any) => void): () => void {
//     // unsubscribe
//     throw new Error('Method not implemented.')
//   }
// }
