import { SvelteUIAdapter } from 'dataEditor/extension/adapters/svelteUIAdapter'
import { WebviewBusHost } from 'dataEditor/core/message/messageBus'
import { DataEditorService } from 'dataEditor/core/service/editorService'
import { EditorUI } from 'dataEditor/core/ui/editorUI'
import { OmegaEditorAdapter } from 'dataEditor/extension/adapters/omegaEditAdapter/omegaEditAdapter'
import { EditorType } from '.'
import { DataEditorConfig } from 'dataEditor/config'
import { DataEditorArgMap, DataEditorRegistry } from './editorRegistry'
import { IDataEditor } from './AbstractEditor'

export interface EditorFactoryOptions {
  makeService?: (cfg: DataEditorConfig) => DataEditorService
  makeUI?: () => EditorUI
  vendor?: any
}

export class DataEditorFactory {
  private editorCtrs = new DataEditorRegistry()
  constructor(private readonly opts: EditorFactoryOptions = {}) {}

  async create<K extends EditorType>(
    type: K,
    cfg: DataEditorArgMap[K],
    bus: WebviewBusHost
  ): Promise<IDataEditor> {
    // parse vscode config json for loglevel
    let service: DataEditorService
    if (this.opts.makeService) {
      service = this.opts.makeService?.(cfg)
    } else {
      service = new OmegaEditorAdapter(cfg, this.opts.vendor)
    }
    const ui = this.opts.makeUI?.() ?? new SvelteUIAdapter()

    return this.editorCtrs.create(type, cfg, service, ui, bus)
  }
}
