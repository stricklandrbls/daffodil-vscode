import { DisplayState } from 'dataEditor/editor/DisplayState'
import { MessageBus } from 'dataEditor/message/messageBus'
import {
  UiToEditor,
  EditorToUi,
  UiToEditorMsgs,
  ExtensionMsgCommands,
  ExtensionMsgResponses,
} from 'dataEditor/message/messages'
import { EditorUI } from 'dataEditor/ui/editorUI'

export class SvelteUIAdapter implements EditorUI {
  private displayState = new DisplayState()
  getDisplayState(): DisplayState {
    return this.displayState
  }
  private bus?: MessageBus<ExtensionMsgCommands, ExtensionMsgResponses>

  attach(bus: MessageBus<ExtensionMsgCommands, ExtensionMsgResponses>): void {
    this.bus = bus
  }
  detach(): void {
    this.bus = undefined
  }
  notify<K extends keyof ExtensionMsgResponses>(
    type: K,
    msg: ExtensionMsgResponses[K]
  ): void {
    this.bus?.post(type, msg)
  }
}
