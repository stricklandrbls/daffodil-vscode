import {
  EditorToUi,
  ExtensionMsgCommands,
  ExtensionMsgResponses,
  UiToEditor,
  UiToEditorMsgs,
} from 'dataEditor/core/message/messages'
import { IDataEditor } from '../../../core/editor/AbstractEditor'
import { DataEditorConfig } from 'classes/dataEditor'
import { MessageBus, WebviewBusHost } from 'dataEditor/core/message/messageBus'
import { DataEditorService } from 'dataEditor/core/service/editorService'
import { EditorUI } from 'dataEditor/core/ui/editorUI'
import { DataEditorArgMap } from '../../../core/editor/editorRegistry'
import { AbstractMediator } from 'dataEditor/core/message/messageMediator'

export class DFDLDebugEditor extends IDataEditor {
  protected msgMediator: AbstractMediator<
    ExtensionMsgCommands,
    ExtensionMsgResponses
  >
  protected serviceConnect(): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
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
    bus: WebviewBusHost
  ) {
    super({ config, service, ui, bus })
  }
  protected processUICommand(cmd: UiToEditor) {
    throw new Error('Method not implemented.')
  }
}
