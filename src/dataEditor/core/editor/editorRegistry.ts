import { MessageBus, WebviewBusHost } from 'dataEditor/core/message/messageBus'
import { DataEditorService } from 'dataEditor/core/service/editorService'
import { EditorUI } from 'dataEditor/core/ui/editorUI'
import { IDataEditor } from './AbstractEditor'
import { EditorType } from '.'
import { DebugEditorConfig, StandaloneEditorConfig } from 'dataEditor/config'
import { StandaloneDataEditor } from '../../extension/editors/standalone/StandaloneEditor'
import { DFDLDebugEditor } from '../../extension/editors/dfdlDebug/DFDLDebugEditor'

export interface DataEditorConstructor<K extends EditorType> {
  new (
    config: DataEditorArgMap[K],
    service: DataEditorService,
    ui: EditorUI,
    bus: WebviewBusHost
  ): IDataEditor
}

export interface DataEditorArgMap {
  [EditorType.Standalone]: StandaloneEditorConfig
  [EditorType.DFDLDebugLinked]: DebugEditorConfig
}

export type ExtensionCommandArgs = {
  [K in EditorType]: any | never
}

export class DataEditorRegistry {
  private ctrMap: { [K in EditorType]: DataEditorConstructor<K> } = {
    [EditorType.Standalone]: StandaloneDataEditor,
    [EditorType.DFDLDebugLinked]: DFDLDebugEditor,
  }

  async create<K extends EditorType>(
    type: K,
    ...args: ConstructorParameters<DataEditorConstructor<K>>
  ): Promise<IDataEditor> {
    return new this.ctrMap[type](...args)
  }
}
