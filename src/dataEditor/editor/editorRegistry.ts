import { MessageBus } from 'dataEditor/message/messageBus'
import { UiToEditor, EditorToUi } from 'dataEditor/message/messages'
import { DataEditorService } from 'dataEditor/service/editorService'
import { EditorUI } from 'dataEditor/ui/editorUI'
import { IDataEditor } from './AbstractEditor'
import { EditorType } from '.'
import { DataEditor } from './DataEditor'
import { DebugEditorConfig, StandaloneEditorConfig } from 'dataEditor/config'
import { StandaloneDataEditor } from './StandaloneEditor'
import { DFDLDebugEditor } from './DFDLDebugEditor'

export interface DataEditorConstructor<K extends EditorType> {
  new (
    config: DataEditorArgMap[K],
    service: DataEditorService,
    ui: EditorUI,
    bus: MessageBus<UiToEditor, EditorToUi>
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
