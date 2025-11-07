import { DataEditorConfig, DataEditorConfigProvider } from 'dataEditor/config'
import {
  DefaultEditorLogger,
  IDataEditorLogger,
  initializeLogger,
} from 'dataEditor/logs'
import { MessageBus } from 'dataEditor/message/messageBus'
import {
  UiToEditor,
  EditorToUi,
  UiToEditorMsg,
  UiToEditorMsgs,
  ExtensionMsgCommands,
  ExtensionMsgResponses,
} from 'dataEditor/message/messages'
import { DataEditorService } from 'dataEditor/service/editorService'
import { IServiceRequestHandler } from 'dataEditor/service/requestHandler'
import { EditorUI } from 'dataEditor/ui/editorUI'
import { DisplayState } from './DisplayState'

export interface DataEditorDeps {
  configProvider: DataEditorConfigProvider
  service: DataEditorService
  ui: EditorUI
  bus: MessageBus<UiToEditor, EditorToUi>
}

export abstract class IDataEditor {
  protected serviceRequestHandler: IServiceRequestHandler | undefined =
    undefined
  protected logger: IDataEditorLogger = new DefaultEditorLogger()
  constructor(
    protected readonly opts: {
      config: DataEditorConfig
      service: DataEditorService
      ui: EditorUI
      bus: MessageBus<ExtensionMsgCommands, ExtensionMsgResponses>
    }
  ) {
    const { logFile, logLevel } = this.opts.config
    this.logger.initialize(logFile, logLevel)
  }
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
    this.serviceRequestHandler.request('fileInfo').then((metrics) => {
      ui.notify('fileInfo', metrics)
    })
    this.serviceRequestHandler
      .request('viewportRefresh', { offset: 0, bytesPerRow: 16 })
      .then((dataResponse) => {
        ui.notify('viewportRefresh', dataResponse)
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
