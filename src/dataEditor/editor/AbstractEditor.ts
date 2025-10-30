import { DataEditorConfig, DataEditorConfigProvider } from 'dataEditor/config'
import { MessageBus } from 'dataEditor/message/messageBus'
import {
  UiToEditor,
  EditorToUi,
  UiToEditorMsg,
  UiToEditorMsgs,
} from 'dataEditor/message/messages'
import { DataEditorService } from 'dataEditor/service/editorService'
import { EditorUI } from 'dataEditor/ui/editorUI'

export interface DataEditorDeps {
  configProvider: DataEditorConfigProvider
  service: DataEditorService
  ui: EditorUI
  bus: MessageBus<UiToEditor, EditorToUi>
}

export abstract class IDataEditor {
  constructor(
    protected readonly opts: {
      config: DataEditorConfig
      service: DataEditorService
      ui: EditorUI
      bus: MessageBus<UiToEditorMsgs, EditorToUi>
    }
  ) {
    this.serviceConnect()
  }
  async open(): Promise<void> {
    const { service, ui, bus } = this.opts
    ui.attach(bus)
    bus.onMessage((type, msg) => this.messageHandler(type, msg))
  }
  async close(): Promise<void> {
    throw ''
  }
  protected abstract messageHandler<K extends keyof UiToEditorMsgs>(
    type: K,
    msg: UiToEditorMsgs[K]
  ): Promise<any>
  protected abstract serviceConnect(): Promise<any>
}
