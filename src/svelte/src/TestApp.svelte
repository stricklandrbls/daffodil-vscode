<script lang="ts">
  import { createContext, onMount, setContext } from 'svelte'
    import {TestState} from './TestState.svelte.ts'
  import type { VSMessenger } from 'utilities/vscode'
    setContext('uiMessenger',{addListener: VSMessenger['addListener'], postMessage: VSMessenger['postMessage']})
    const ctx = createContext<{addListener: VSMessenger['addListener'], postMessage: VSMessenger['postMessage']}>()
    const test = new TestState()
    let appElem = $state<HTMLElement | null> (null)
        let disabled = $state<boolean>(true)
    let addListener!: VSMessenger['addListener']
    let postMessage!: VSMessenger['postMessage']

    // let count = $state<number>(-2)
        onMount(()=>{
let id: NodeJS.Timeout | undefined = undefined
    $effect(()=>{
        id = setInterval(() => {
            appElem = document.getElementById('app')
            if(appElem)
                test.uiMsgId = appElem.attributes['extension_msg_id'].value
        //     count += 1
        //     test.data += count
        //     if(test.data > 0)
        //         test.calculate()
        console.log(`appElem: ${appElem}`)
        }, 1000);
        return ()=>{
            clearInterval(id)
        }
    })
    test.ready.then(msgr => {
            clearInterval(id)
        addListener = msgr.addListener
        postMessage = msgr.postMessage
        disabled = false
    addListener('clearChanges', ()=>{})
    })
        })
</script>
<h3>MsgUi: {test.uiMsgId}</h3>
<button {disabled} onclick={()=> postMessage('showMessage', {level:'Information', message:"Post Worked!"})}>Post</button>
