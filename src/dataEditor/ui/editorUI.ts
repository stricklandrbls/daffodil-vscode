import { MessageBus } from 'dataEditor/message/messageBus'
import {
  UiToEditor,
  EditorToUi,
  UiToEditorMsg,
  UiToEditorMsgs,
} from 'dataEditor/message/messages'

export interface EditorUI {
  attach(bus: MessageBus<UiToEditorMsgs, EditorToUi>): void
  detach(): void
  notify(msg: EditorToUi): void // Editor -> UI push
}
