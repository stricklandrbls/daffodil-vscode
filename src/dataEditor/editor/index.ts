import { EditorClient, getClient } from '@omega-edit/client'
import { Disposable, ExtensionContext } from 'vscode'

export abstract class DataEditorInitializer<D extends DataEditor = DataEditor> {
  abstract Initialize(ctx: ExtensionContext): Promise<D>
}

export type EditorCommand = {
  command: string
  initializer: DataEditorInitializer
}

export abstract class DataEditor implements Disposable {
  constructor(
    protected client: EditorClient
    // protected ui: DataEditorUI
  ) {
    getClient().then((client) => {
      this.client = client
    })

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
