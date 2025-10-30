import { MessageBus } from 'dataEditor/message/messageBus'
import {
  UiToEditor,
  EditorToUi,
  UiToEditorMsg,
  UiToEditorMsgs,
  ExtensionMsgCommands,
} from 'dataEditor/message/messages'

export interface EditorUI {
  attach(bus: MessageBus<ExtensionMsgCommands, EditorToUi>): void
  detach(): void
  notify(msg: EditorToUi): void // Editor -> UI push
}
