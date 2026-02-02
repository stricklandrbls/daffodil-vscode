import {
  ExtensionMsgCommands,
  ExtensionMsgResponses,
} from 'dataEditor/core/message/messages'
declare global {
  interface DataEditor {
    read: (offset: number) => boolean
  }
  const DataEditorAPI: DataEditor

  interface Window {
    addEditorMessageListener: <K extends keyof ExtensionMsgCommands>(
      type: K,
      listener: (response: ExtensionMsgResponses[K]) => void
    ) => void
    addListenerOnEditorMessages: <K extends keyof ExtensionMsgCommands>(
      listener: (response: ExtensionMsgResponses[K]) => void,
      ...types: K[]
    ) => void
  }
}

export {}
