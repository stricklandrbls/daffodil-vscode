import { EditorMessage } from 'svelte/src/utilities/message'

export interface DataEditorMessageChannel {
  webviewMsgRxHandler: <MessageType extends EditorMessage>(
    msg: MessageType
  ) => Promise<void>
}
