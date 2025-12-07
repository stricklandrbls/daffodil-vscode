import { DisplayState } from 'dataEditor/editor/DisplayState'
import { MessageBus } from 'dataEditor/core/message/messageBus'
import {
  ExtensionMsgResponses,
  ExtensionResponse,
  ExtensionRequest,
  ExtensionMsgCommands,
} from 'dataEditor/core/message/messages'

export interface EditorUI {
  attach(bus: MessageBus<ExtensionMsgCommands, ExtensionMsgResponses>): void
  detach(): void
  notify<K extends keyof ExtensionMsgResponses>(
    type: K,
    msg: ExtensionMsgResponses[K]
  ): void // Editor -> UI push
  getDisplayState(): DisplayState
}
