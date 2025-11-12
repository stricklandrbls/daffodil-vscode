import { SvelteUIAdapter } from 'dataEditor/adapters/svelteUIAdapter'
import { MessageBus } from 'dataEditor/message/messageBus'
import {
  ExtensionMsgCommands,
  ExtensionMsgResponses,
} from 'dataEditor/message/messages'
import { DataEditorService } from 'dataEditor/service/editorService'
import { EditorUI } from 'dataEditor/ui/editorUI'
import { OmegaEditorAdapter } from 'dataEditor/adapters/omegaEditAdapter/omegaEditAdapter'
import { EditorType } from '.'
import { DataEditorConfig } from 'dataEditor/config'
import { DataEditorRegistry } from './editorRegistry'
import { IDataEditor } from './AbstractEditor'

export interface EditorFactoryOptions {
  makeService?: (cfg: DataEditorConfig) => DataEditorService
  makeUI?: () => EditorUI
  vendor?: any
}

export class DataEditorFactory {
  private editorCtrs = new DataEditorRegistry()
  constructor(private readonly opts: EditorFactoryOptions = {}) {}

  async create(
    type: EditorType,
    cfg: DataEditorConfig,
    bus: MessageBus<ExtensionMsgCommands, ExtensionMsgResponses>
  ): Promise<IDataEditor> {
    // parse vscode config json for loglevel
    let service: DataEditorService
    if (this.opts.makeService) {
      service = this.opts.makeService?.(cfg)
    } else {
      service = new OmegaEditorAdapter(cfg, this.opts.vendor)
      service.on('heartbeatUpdate', (content) => {
        bus.post('heartbeat', content)
      })
    }
    const ui = this.opts.makeUI?.() ?? new SvelteUIAdapter()

    return this.editorCtrs.create(type, cfg, service, ui, bus)
  }
}
