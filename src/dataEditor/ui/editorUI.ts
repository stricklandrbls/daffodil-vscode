import { DisplayState } from 'dataEditor/editor/DisplayState'
import { MessageBus } from 'dataEditor/message/messageBus'
import {
  ExtensionMsgResponses,
  ExtensionResponse,
  ExtensionRequest,
} from 'dataEditor/message/messages'

export interface EditorUI {
  attach(bus: MessageBus<ExtensionRequest, ExtensionResponse>): void
  detach(): void
  notify<K extends keyof ExtensionMsgResponses>(
    type: K,
    msg: ExtensionMsgResponses[K]
  ): void // Editor -> UI push
  getDisplayState(): DisplayState
}
