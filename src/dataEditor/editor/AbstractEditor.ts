import { DataEditorConfig, DataEditorConfigProvider } from 'dataEditor/config'
import { DefaultEditorLogger, IDataEditorLogger } from 'dataEditor/logs'
import { MessageBus } from 'dataEditor/message/messageBus'
import { AbstractMediator } from 'dataEditor/message/messageMediator'
import {
  UiToEditor,
  EditorToUi,
  ExtensionMsgCommands,
  ExtensionMsgResponses,
  ExtensionRequest,
  ExtensionResponse,
} from 'dataEditor/message/messages'
import { DataEditorService } from 'dataEditor/service/editorService'
import {
  BaseRequests,
  IServiceRequestHandler,
} from 'dataEditor/service/requestHandler'
import { EditorUI } from 'dataEditor/ui/editorUI'

export interface DataEditorDeps {
  configProvider: DataEditorConfigProvider
  service: DataEditorService
  ui: EditorUI
  bus: MessageBus<UiToEditor, EditorToUi>
}

export abstract class IDataEditor {
  protected abstract msgMediator: AbstractMediator<ExtensionRequest>
  protected logger: IDataEditorLogger = new DefaultEditorLogger()
  constructor(
    protected readonly opts: {
      config: DataEditorConfig
      service: DataEditorService
      ui: EditorUI
      bus: MessageBus<ExtensionRequest, ExtensionResponse>
    }
  ) {
    const { logFile, logLevel } = this.opts.config
    this.logger.initialize(logFile, logLevel)
  }
  async open(): Promise<void> {
    const { service, ui, bus } = this.opts
    // this.serviceRequestHandler = await this.serviceConnect()
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
  protected abstract canHandleLocally<K extends keyof ExtensionRequest>(
    type: K,
    msg: ExtensionRequest[K]
  ): boolean
  protected abstract serviceConnect(): Promise<boolean>
}
