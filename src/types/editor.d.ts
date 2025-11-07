import {
  ExtensionMsgCommands,
  ExtensionMsgResponses,
} from 'dataEditor/message/messages'
declare global {
  interface Window {
    addEditorMessageListener: <K extends keyof ExtensionMsgCommands>(
      type: K,
      listener: (response: ExtensionMsgResponses[K]) => void
    ) => void
    editor_message: {
      create<K extends keyof ExtensionMsgCommands>(
        type: K,
        data?: ExtensionMsgCommands[K]
      ): ExtensionMsgCommands[K]
    }
  }
}

export {}
