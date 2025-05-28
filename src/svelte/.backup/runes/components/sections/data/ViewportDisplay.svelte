<script lang="ts">
  import { addMessageListener } from 'utilities/Messenger'
  import { MessageCommand } from 'utilities/message'
  import {
    getCurrentByteSelection,
    getMainViewport,
    selectionLengthDelta,
    ViewportLineData,
    ViewportMsg,
  } from '.'
  import DataLine from './DataLine.svelte'
  import {
    LogicalDisplay,
    RadixDisplays,
    ViewportDisplayType,
  } from './ViewportDisplayer.svelte'
  import { getDataDisplaySettings } from 'utilities'
  let {
    displayType = 'physical',
    addrShow = true,
  }: { displayType: ViewportDisplayType; addrShow: boolean } = $props()
  let viewport = $state(getMainViewport())
  let dataDisplayPromise = $state<Promise<ViewportLineData[]>>()
  $effect(() => {
    dataDisplayPromise =
      displayType === 'physical'
        ? RadixDisplays[getDataDisplaySettings().dataRadix].generateByteDisplay(
            viewport.getData(),
            viewport.getSettings()
          )
        : LogicalDisplay.generateByteDisplay(
            viewport.getData(),
            viewport.getSettings()
          )
  })

  addMessageListener(MessageCommand.viewportRefresh, (msg) => {
    const msgContent: ViewportMsg = {
      data: msg.data.data.data,
      srcOffset: msg.data.data.fileOffset,
      srcBytesRemaining: msg.data.data.bytesLeft,
    }

    viewport.updateViewportFromMsg(msgContent)
  })
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<div
  class="container"
  onmousedown={getCurrentByteSelection().isActive()
    ? undefined
    : (e) => {
        const target = e.target as HTMLDivElement
        const targetOffsetId = target.getAttribute('id')?.split('vp')
        if (!targetOffsetId) throw 'Selection is not within the viewport window'

        const selectedVPOffset =
          parseInt(targetOffsetId[1]) + viewport.getBoundaries().lower
        getCurrentByteSelection().setSelected('start', selectedVPOffset)
      }}
  onmouseup={getCurrentByteSelection().isActive()
    ? undefined
    : (e) => {
        const target = e.target as HTMLDivElement
        const targetOffsetId = target.getAttribute('id')?.split('vp')
        if (!targetOffsetId) throw 'Selection is not within the viewport window'

        const selectedVPOffset =
          parseInt(targetOffsetId[1]) + viewport.getBoundaries().lower
        getCurrentByteSelection().setSelected('end', selectedVPOffset)
      }}
  onmouseover={getCurrentByteSelection().isActive()
    ? undefined
    : (e) => {
        if (getCurrentByteSelection().isSelectionInProgress()) {
          const target = e.target as HTMLDivElement
          const targetOffsetId = target.getAttribute('id')?.split('vp')
          if (!targetOffsetId)
            throw 'Selection is not within the viewport window'

          const selectedVPOffset =
            parseInt(targetOffsetId[1]) + viewport.getBoundaries().lower
          getCurrentByteSelection().setSelected('add', selectedVPOffset)
        }
      }}
>
  {@render displayViewport()}
</div>
{#snippet displayViewport()}
  {#if dataDisplayPromise != undefined}
    {#await dataDisplayPromise}
      Awaiting Data generation..
    {:then dataDisplay}
      {#each dataDisplay as vpLine}
        <div class="line">
          <div class="byte-line">
            <DataLine
              bytes={vpLine.data}
              lineOffset={addrShow ? vpLine.srcOffset : undefined}
            />
          </div>
        </div>
      {/each}
    {:catch rejectedGeneration}
      No Data to display
    {/await}
  {/if}
{/snippet}

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
