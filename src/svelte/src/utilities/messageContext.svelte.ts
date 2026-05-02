
  // export type UIMessengerContext = {
  //   addListener: VSMessenger['addListener']
  //   postMessage: VSMessenger['postMessage']
  //   isValid: boolean

import { createContext } from "svelte"
import { vscode, type VSMessenger } from "./vscode"

  // }
  // const messengerContext = $state<UIMessengerContext>({
  //   isValid: false,
  //   addListener: (type, listener) => {},
  //   postMessage: (...args) => {},
  // })
  // setContext('messenger', { messengerContext })

  export class UIMessengerContext{
    ready: Promise<VSMessenger>
    #readyResolve!: (msgr:VSMessenger)=>void

    #uiMsgId = $state<string>("")

    constructor(){
        this.ready = new Promise<VSMessenger>(resolve => {
            this.#readyResolve = (msgr)=> resolve(msgr)
        })
    }
    initialize(id:string){
      if(['','__extension_msg_id__'].includes(id)) throw new Error("Invalid UI Message Id Received")
        this.#uiMsgId = id
        const {addListener, postMessage} = vscode.getMessenger(id)
        
    }
  
  }
const MessengerContext = new UIMessengerContext()

  export const createUIMessengerCtx = () => {
    return MessengerContext
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
