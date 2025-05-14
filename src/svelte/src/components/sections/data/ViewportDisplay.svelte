<script lang="ts">
  import { addMessageListener } from 'utilities/Messenger'
  import { MessageCommand } from 'utilities/message'
  import {
    getLastViewportOffset,
    getMainViewport,
    Viewport,
    ViewportController,
    ViewportLineData,
    ViewportMsg,
  } from '.'
  import DataLine from './DataLine.svelte'
  import ViewportTraversal from './ViewportTraversal.svelte'
  import { ViewportDisplayType } from './ViewportDisplayer.svelte'
  let { displayType = 'physical' }: { displayType: ViewportDisplayType } =
    $props()
  let viewport = $state.raw(getMainViewport())

  let iterableDisplay = $state<ViewportLineData[]>([])

  $inspect(viewport.getBoundaries()).with(console.log)
  addMessageListener(MessageCommand.viewportRefresh, (msg) => {
    const msgContent: ViewportMsg = {
      data: msg.data.data.data,
      srcOffset: msg.data.data.fileOffset,
      srcBytesRemaining: msg.data.data.bytesLeft,
    }

    viewport.updateViewportFromMsg(msgContent)
    // viewport.getIterableDisplayContent().then((data) => {
    //   iterableDisplay = data
    // })
  })
</script>

<div class="container">
  Upper: {viewport.getBoundaries().upper}
  {#each iterableDisplay as vpLine}
    <div class="line">
      <div class="address">
        {vpLine.srcOffset}
      </div>

      <div class="byte-line">
        <DataLine bytes={vpLine.data} lineOffset={vpLine.srcOffset} />
      </div>
    </div>
  {/each}
</div>
<ViewportTraversal />

<style lang="scss">
  span {
    font-weight: bold;
  }
  span.separator {
    border: 1px solid grey;
    opacity: 0.5;
    display: flex;
    flex-direction: column;
    margin: 0 5px;
  }
  div.container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    font-size: 13px;
    font-family: var(--monospace-font);
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
    width: 100%;
  }
  div.container div.line {
    display: flex;
    flex-direction: row;
    width: fit-content;
    height: 24px;
    width: 100%;
  }
  div.container div.line div {
    display: flex;
    align-items: center;
    width: 100%;
  }
  div.container div.line div.address {
    width: 110px;
    direction: rtl;
    justify-content: right;
    letter-spacing: 4px;
  }
  div.container div.line div.address b::selection {
    background-color: transparent;
  }
  div.container .line .byte-line {
    display: flex;
    flex-direction: row;
    border-width: 0px 2px 0px 2px;
    border-color: var(--color-primary-darkest);
    border-style: solid;
    justify-content: space-between;
  }
  div.file-traversal-indicator {
    width: 100%;
    height: 100%;
    background-color: var(--color-secondary-dark);
  }
  div.line.light.even {
    background-color: var(--color-primary-light-hover);
  }
  div.line.light.odd {
    background-color: var(--color-primary-lightest);
  }
  div.line.dark.even {
    background-color: var(--color-primary-mid);
  }
  div.line.dark.odd {
    background-color: var(--color-primary-dark);
  }
</style>
