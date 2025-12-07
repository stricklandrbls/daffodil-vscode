import { DataEditorConfig, DataEditorConfigProvider } from 'dataEditor/config'
import { DefaultEditorLogger, IDataEditorLogger } from 'dataEditor/logs'
import { MessageBus } from 'dataEditor/core/message/messageBus'
import { AbstractMediator } from 'dataEditor/core/message/messageMediator'
import {
  ExtensionMsgCommands,
  ExtensionMsgResponses,
} from 'dataEditor/core/message/messages'
import { DataEditorService } from 'dataEditor/core/service/editorService'
import { EditorUI } from 'dataEditor/core/ui/editorUI'

export abstract class IDataEditor {
  protected abstract msgMediator:
    | AbstractMediator<ExtensionMsgCommands, ExtensionMsgResponses>
    | undefined
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
    bus.onMessageRx(this.msgMediator!.process)
    this.msgMediator!.process('fileInfo').then((info) =>
      this.opts.bus.post('fileInfo', info)
    )
    this.msgMediator!.process('counts').then((counts) => {
      this.opts.bus.post('counts', counts)
    })
    this.msgMediator!.process('scrollViewport', {
      scrollOffset: 0,
      bytesPerRow: 16,
    }).then((data) => {
      this.opts.bus.post('viewportRefresh', data)
    })
  }
  async close(): Promise<void> {
    this.opts.service.disconnect()
  }
  protected abstract serviceConnect(): Promise<boolean>
}
