import { DisplayState } from 'dataEditor/core/editor/DisplayState'
import { WebviewBusHost } from 'dataEditor/core/message/messageBus'
import { ExtensionMsgResponses } from 'dataEditor/core/message/messages'

export interface EditorUI {
  attach(bus: WebviewBusHost): void
  detach(): void
  notify<K extends keyof ExtensionMsgResponses>(
    type: K,
    msg: ExtensionMsgResponses[K] extends any ? ExtensionMsgResponses[K] : never
  ): void // Editor -> UI push
  getDisplayState(): DisplayState
}
