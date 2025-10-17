import { MessageBus } from 'dataEditor/message/messageBus'
import { UiToEditor, EditorToUi } from 'dataEditor/message/messages'

export interface EditorUI {
  attach(bus: MessageBus<UiToEditor, EditorToUi>): void
  detach(): void
  notify(msg: EditorToUi): void // Editor -> UI push
}
