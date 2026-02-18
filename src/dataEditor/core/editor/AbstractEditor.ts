import { DataEditorConfig, DataEditorConfigProvider } from 'dataEditor/config'
import { DefaultEditorLogger, IDataEditorLogger } from 'dataEditor/logs'
import { MessageBus, WebviewBusHost } from 'dataEditor/core/message/messageBus'
import { AbstractMediator } from 'dataEditor/core/message/messageMediator'
import {
  ExtensionMsgCommands,
  ExtensionMsgResponses,
  RequestArgs,
} from 'dataEditor/core/message/messages'
import { DataEditorService } from 'dataEditor/core/service/editorService'
import { EditorUI } from 'dataEditor/core/ui/editorUI'
import { OmegaEditorAdapter } from 'dataEditor/extension/adapters/omegaEditAdapter/omegaEditAdapter'

export abstract class IDataEditor {
  protected abstract msgMediator: AbstractMediator<
    ExtensionMsgCommands,
    ExtensionMsgResponses
  >

  protected logger: IDataEditorLogger = new DefaultEditorLogger()
  constructor(
    protected readonly opts: {
      config: DataEditorConfig
      service: OmegaEditorAdapter
      ui: EditorUI
      bus: WebviewBusHost
    }
  ) {
    const { logFile, logLevel } = this.opts.config
    this.logger.initialize(logFile, logLevel)
  }
  async open(): Promise<void> {
    const { service, ui, bus } = this.opts
    await this.serviceConnect()

    ui.attach(bus)

    this.msgMediator.process('fileInfo')
  }
  async close(): Promise<void> {
    this.opts.service.disconnect()
  }
  currentFile() {
    return this.opts.config.targetFile
  }
  protected abstract serviceConnect(): Promise<boolean>
}
