import * as vscode from 'vscode'
import { EditorToUi, UiToEditor } from './messages'

export type UIToEditorHandler = (m: UiToEditor) => void
export type EditorToUIHandler = (m: EditorToUi) => Thenable<boolean>
// src/core/messageBus.ts
export interface MessageBus<In, Out> {
  post(message: Out): void
  onMessage(handler: (msg: In) => void): () => void // unsubscribe
}

// VS Code webview side (UI)
export class WebviewBusUI implements MessageBus<EditorToUi, UiToEditor> {
  constructor(
    private readonly vscodeApi: { postMessage: (m: UiToEditor) => void }
  ) {}

  post(message: UiToEditor) {
    this.vscodeApi.postMessage(message)
  }
  onMessage(handler: (m: EditorToUi) => void) {
    const listener = (ev: MessageEvent) => handler(ev.data as EditorToUi)
    window.addEventListener('message', listener)
    return () => window.removeEventListener('message', listener)
  }
}

// Extension host side (Editor <-> Webview)
export class WebviewBusHost implements MessageBus<UiToEditor, EditorToUi> {
  private disposable?: vscode.Disposable
  constructor(private readonly panel: vscode.WebviewPanel) {}

  post(message: EditorToUi) {
    void this.panel.webview.postMessage(message)
  }
  onMessage(handler: (msg: UiToEditor) => void): () => void {
    this.disposable = this.panel.webview.onDidReceiveMessage((msg) => {
      handler(msg as UiToEditor)
    })
    return () => {
      this.disposable?.dispose()
      this.disposable = undefined
    }
  }
}
