import {
  EditorToUi,
  UiToEditor,
  UiToEditorMsgs,
} from 'dataEditor/message/messages'
import { IDataEditor } from './AbstractEditor'
import { DataEditorConfig } from 'classes/dataEditor'
import { MessageBus } from 'dataEditor/message/messageBus'
import { DataEditorService } from 'dataEditor/service/editorService'
import { EditorUI } from 'dataEditor/ui/editorUI'
import { DataEditorArgMap } from './editorRegistry'

export class DFDLDebugEditor extends IDataEditor {
  protected messageHandler<K extends keyof UiToEditorMsgs>(
    type: K,
    msg: UiToEditorMsgs[K]
  ): Promise<any> {
    throw new Error('Method not implemented.')
  }
  constructor(
    config: DataEditorArgMap['dfdl-debug'],
    service: DataEditorService,
    ui: EditorUI,
    bus: MessageBus<UiToEditorMsgs, EditorToUi>
  ) {
    super({ config, service, ui, bus })
  }
  protected processUICommand(cmd: UiToEditor) {
    throw new Error('Method not implemented.')
  }
}
