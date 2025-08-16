import { createSession, EditorClient, getClient } from '@omega-edit/client'
import { ServerConnection } from 'dataEditor/include/server'
import { Disposable, ExtensionContext } from 'vscode'

export interface DataEditorConfig {
  editorClient: EditorClient
  connection: ServerConnection
  fileToEdit: string
}
export abstract class DataEditor implements Disposable {
  protected omegaEditSessionId: string = ''

  constructor(protected config: DataEditorConfig) {
    // serviceClient.addResponseListener((response) => {
    //   this.ui.updateUI(response)
    // })
    // ui.onInputEvent = (input) => {
    //   this.serviceClient.request(input)
    // }
    // ui.onClosed(() => {
    //   this.dispose()
    // })
  }
  dispose() {
    // this.serviceClient.close()
  }
}
