import { SvelteUIAdapter } from 'dataEditor/adapters/svelteUIAdapter'
import { MessageBus } from 'dataEditor/message/messageBus'
import { UiToEditor, EditorToUi } from 'dataEditor/message/messages'
import { DataEditorService } from 'dataEditor/service/editorService'
import { DataEditor } from './DataEditor'
import { EditorUI } from 'dataEditor/ui/editorUI'
import { OmegaEditorAdapter } from 'dataEditor/adapters/omegaEditAdapter/omegaEditAdapter'
import { EditorType } from '.'
import { DataEditorConfig } from 'dataEditor/config'

export interface EditorFactoryOptions {
  makeService?: (cfg: DataEditorConfig) => DataEditorService
  makeUI?: () => EditorUI
  vendor?: any
}

export class DataEditorFactory {
  constructor(private readonly opts: EditorFactoryOptions = {}) {}

  create(
    type: EditorType,
    cfg: DataEditorConfig,
    bus: MessageBus<UiToEditor, EditorToUi>
  ): DataEditor {
    // parse vscode config json for loglevel

    const service =
      this.opts.makeService?.(cfg) ??
      new OmegaEditorAdapter(cfg, this.opts.vendor)
    const ui = this.opts.makeUI?.() ?? new SvelteUIAdapter()

    return new DataEditor({ config: cfg, service, ui, bus })
  }
}
