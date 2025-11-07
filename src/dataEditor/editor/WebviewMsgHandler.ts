// import { ExtensionMsgCommands } from "dataEditor/message/messages";
// import { IDataEditor } from "./AbstractEditor";

// export interface WebviewMsgHandler{
//     handle<K extends keyof ExtensionMsgCommands>(type: K, msg: ExtensionMsgCommands[K]): Promise<void>
// }

// export class DefaultWebviewMsgHandler implements WebviewMsgHandler{
//     constructor(private editorRef: IDataEditor){}
//     handle<K extends keyof ExtensionMsgCommands>(type: K, msg: ExtensionMsgCommands[K]): Promise<void> {
//         switch(type){
//             case 'editorOnChange':
//                 return new Promise(async (res, rej) => {

//                 })
//         }
//     }

// }
