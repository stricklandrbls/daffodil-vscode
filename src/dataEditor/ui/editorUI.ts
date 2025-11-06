import { MessageBus } from 'dataEditor/message/messageBus'
import {
  UiToEditor,
  EditorToUi,
  UiToEditorMsg,
  UiToEditorMsgs,
  ExtensionMsgCommands,
  ExtensionMsgResponses,
} from 'dataEditor/message/messages'

export interface EditorUI {
  attach(bus: MessageBus<ExtensionMsgCommands, ExtensionMsgResponses>): void
  detach(): void
  notify<K extends keyof ExtensionMsgResponses>(
    type: K,
    msg: ExtensionMsgResponses[K]
  ): void // Editor -> UI push
}
