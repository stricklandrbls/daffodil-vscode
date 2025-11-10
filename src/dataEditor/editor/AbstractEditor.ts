import { DataEditorConfig, DataEditorConfigProvider } from 'dataEditor/config'
import { DefaultEditorLogger, IDataEditorLogger } from 'dataEditor/logs'
import { MessageBus } from 'dataEditor/message/messageBus'
import { AbstractMediator } from 'dataEditor/message/messageMediator'
import {
  UiToEditor,
  EditorToUi,
  ExtensionMsgCommands,
  ExtensionMsgResponses,
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
  protected abstract msgMediator: AbstractMediator<
    ExtensionMsgCommands,
    ExtensionMsgResponses
  >
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
    await this.serviceConnect()
    ui.attach(bus)
    bus.onMessageRx(this.msgMediator.handle)
    // bus.onMessage(async (type, msg) => {
    //   console.debug(`Received message bus msg: ${type}: ${msg}`)
    //   let response = this.canHandleLocally(type, msg)
    //     ? this.messageHandler(type, msg)
    //     : this.serviceRequestHandler?.request(type, msg)

    //   // this.messageHandler(
    //   //   type,
    //   //   msg,
    //   //   this.serviceRequestHandler!.canHandle(type)
    //   // ).then((response) => {
    //   //   this.opts.ui.notify(response.type, response.data)
    //   // })
    // })
    // this.messageHandler('fileInfo')
    // this.serviceRequestHandler.request('fileInfo').then((metrics) => {
    //   ui.notify('fileInfo', metrics)
    // })
    // this.serviceRequestHandler
    //   .request('viewportRefresh', { offset: 0, bytesPerRow: 16 })
    //   .then((dataResponse) => {
    //     ui.notify('viewportRefresh', dataResponse)
    //   })
  }
  async close(): Promise<void> {
    throw ''
  }
  protected abstract serviceConnect(): Promise<boolean>
}
