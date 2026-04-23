
  // export type UIMessengerContext = {
  //   addListener: VSMessenger['addListener']
  //   postMessage: VSMessenger['postMessage']
  //   isValid: boolean

import { createContext } from "svelte"
import { type VSMessenger } from "./vscode"

  // }
  // const messengerContext = $state<UIMessengerContext>({
  //   isValid: false,
  //   addListener: (type, listener) => {},
  //   postMessage: (...args) => {},
  // })
  // setContext('messenger', { messengerContext })

  export class UIMessengerContext{
    #ready = $state<boolean>(false)

    #uiMsgId = $state<string>("")
    #messageApi = $state<VSMessenger | undefined>(undefined);
    initialize(id:string, messenger: VSMessenger){
      if(id === '' || id === '__extension_msg_id__') throw new Error("Invalid UI Message Id Received")
        this.#uiMsgId = id
        this.#messageApi = messenger;
      this.#ready = true
    }
    get ready(){return this.#ready}

    get messageApi(){return this.#messageApi}
  
  
  
  }

  export const createUIMessengerCtx = () => {
    return new UIMessengerContext()
  }
  export const [getUIMessegnerCtx,setUIMessegnerCtx] = createContext<UIMessengerContext>()
//   import { createContext } from 'svelte';

// export class EditorContextState {
//     ready = $state(false);
//     rootElementId = $state<string | undefined>(undefined);

//     initialize(id: string) {
//         this.rootElementId = id;
//         this.ready = true;
//     }
// }

// export function createEditorContextState() {
//     return new EditorContextState();
// }

// export const [getEditorContext, setEditorContext] =
//     createContext<EditorContextState>();
