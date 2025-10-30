import { DataEditorConfig, DataEditorConfigProvider } from 'dataEditor/config'
import { MessageBus } from 'dataEditor/message/messageBus'
import {
  UiToEditor,
  EditorToUi,
  UiToEditorMsg,
  UiToEditorMsgs,
  ExtensionMsgCommands,
} from 'dataEditor/message/messages'
import { DataEditorService } from 'dataEditor/service/editorService'
import { IServiceRequestHandler } from 'dataEditor/service/requestHandler'
import { EditorUI } from 'dataEditor/ui/editorUI'

export interface DataEditorDeps {
  configProvider: DataEditorConfigProvider
  service: DataEditorService
  ui: EditorUI
  bus: MessageBus<UiToEditor, EditorToUi>
}

export abstract class IDataEditor {
  protected serviceRequestHandler: IServiceRequestHandler | undefined =
    undefined
  constructor(
    protected readonly opts: {
      config: DataEditorConfig
      service: DataEditorService
      ui: EditorUI
      bus: MessageBus<ExtensionMsgCommands, EditorToUi>
    }
  ) {}
  async open(): Promise<void> {
    const { service, ui, bus } = this.opts
    this.serviceRequestHandler = await this.serviceConnect()
    ui.attach(bus)
    bus.onMessage(async (type, msg) => {
      this.messageHandler(
        type,
        msg,
        this.serviceRequestHandler!.canHandle(type)
      )
    })
  }
  async close(): Promise<void> {
    throw ''
  }
  protected abstract messageHandler<K extends keyof ExtensionMsgCommands>(
    type: K,
    msg: ExtensionMsgCommands[K],
    isServiceRequestable: boolean
  ): Promise<void>
  protected abstract serviceConnect(): Promise<IServiceRequestHandler>
}
