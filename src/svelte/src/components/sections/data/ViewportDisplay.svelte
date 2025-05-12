<script lang="ts">
  import { addMessageListener } from 'utilities/Messenger'
  import { Byte } from './DataDisplay'
  import { MessageCommand } from 'utilities/message'
  import {
    Viewport,
    ViewportDisplayController,
    ViewportLineData,
    ViewportMsg,
  } from './ViewportData.svelte'
  import ByteDisplay from './ByteDisplay.svelte'
  import { getDataDisplaySettings } from 'utilities'
  import DataLine from './DataLine.svelte'

  let viewport = $state<Viewport>(new Viewport())
  let iterableDisplay = $state<ViewportLineData[]>([])

  addMessageListener(MessageCommand.viewportRefresh, (msg) => {
    // switch (msg.data.command) {
    //   case MessageCommand.viewportRefresh:
    const msgContent: ViewportMsg = {
      data: msg.data.data.data,
      srcOffset: msg.data.data.fileOffset,
      srcBytesRemaining: msg.data.data.bytesLeft,
    }

    viewport.updateViewportFromMsg(msgContent)
    const display = ViewportDisplayController.generateByteDisplay(viewport)
    viewport.getIterableDisplayContent().then((data) => {
      iterableDisplay = data
    })

    //     break
    // }
  })
</script>

<div class="container">
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
