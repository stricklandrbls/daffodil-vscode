import { createContext } from "svelte"
import { vscode, type VSMessenger } from "utilities/vscode"

let [getMessengerCtx, setMessengerCtx] = createContext<{addListener: VSMessenger['addListener'], postMessage: VSMessenger['postMessage']}>()
export const getCtx = getMessengerCtx

export class TestState{
    ready: Promise<VSMessenger>
    #readyResolve!: (msgr: VSMessenger)=>void
    #uiMsgId = $state<string>('')

    constructor(){
        this.ready = new Promise<VSMessenger>(resolve =>{
            this.#readyResolve = (msgr) => resolve(msgr)
        })
    }
    set uiMsgId(id: string){ 
        if(['','__extension_msg_id__'].includes(id)) return
        this.#uiMsgId = id
        const {addListener,postMessage} = vscode.getMessenger(this.#uiMsgId)
        this.#readyResolve({addListener,postMessage} )
    }
    get uiMsgId(){ return this.#uiMsgId }
    // #data = $state<number>(-1)
    // #resultResolve!: (value:number)=> void
    // result: Promise<number>

    // constructor(){
    //     this.result = new Promise<number>((resolve: (value:number)=>void, reject) => {
    //         this.#resultResolve = (v)=>{resolve(v)}
    //     })
    // }
    // get data(){return this.#data}
    // set data(data: number){
    //     this.#data = data > 0 ? data : -1
    // }

    // calculate(){
    //     if(this.#data < 0) return
    //     this.#data ^= Math.abs(0x69)
    //     this.#resultResolve(this.#data)
        
    // }

}
export function calculate(number:number): Promise<number>{
    return new Promise((resolve, reject)=>{

    })
}
