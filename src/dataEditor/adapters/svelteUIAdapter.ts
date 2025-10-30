import { MessageBus } from 'dataEditor/message/messageBus'
import {
  UiToEditor,
  EditorToUi,
  UiToEditorMsgs,
} from 'dataEditor/message/messages'
import { EditorUI } from 'dataEditor/ui/editorUI'

export class SvelteUIAdapter implements EditorUI {
  private bus?: MessageBus<UiToEditorMsgs, EditorToUi>

  attach(bus: MessageBus<UiToEditorMsgs, EditorToUi>): void {
    this.bus = bus
  }
  detach(): void {
    this.bus = undefined
  }
  notify(msg: EditorToUi): void {
    this.bus?.post(msg)
  }
}
