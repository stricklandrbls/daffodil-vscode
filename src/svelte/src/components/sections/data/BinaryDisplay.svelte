<script lang="ts">
  import FlexContainer from '../../layout/FlexContainer.svelte'
  import { Byte, ViewportData, ViewportMsg } from './DataDisplay'
  import {
    ByteDisplay,
    ByteRadix,
    ByteRadixDisplays,
    createViewportConfig,
    ViewportDisplayConfig,
    ViewportDisplayContent,
  } from './ViewportDisplay'
  import { viewportDisplayConfig } from './index.svelte'

  export class ViewportDisplay {
    static NullByte = 'NULL'

    readonly content: ViewportDisplayContent = {}

    readonly viewport = $state<ViewportData>(new ViewportData())

    vp = $state<Uint8Array>(new Uint8Array(ViewportData.Capacity))
    vpUpdated = $state(false)
    config = $state<ViewportDisplayConfig>(createViewportConfig())
    constructor(config: ViewportDisplayConfig) {
      this.config = config
    }
    public get() {
      // Create Line
      let lineBytes: ByteDisplay[] = []
      let lineIndex = 0
      // Create total content as lines of byte data
      for (let l = lineIndex; l < this.config.lineCount; l++) {
        let lineOffset = l * this.config.bytesPerLine
        for (let i = 0; i < this.config.bytesPerLine; i++) {
          const byte = this.viewport.byteAt(lineOffset + i)
          lineBytes.push({
            ...this.viewport.byteAt(lineOffset + i),
            str: byte.value
              ? this.config.byteDisplay(byte.value)[0]
              : ViewportDisplay.NullByte,
          })
        }
        this.content[l] = lineBytes

        lineBytes = []
      }
      return this.content
    }
  }

  const dataDisplay = new ViewportDisplay({
    byteDisplay: ByteRadixDisplays['16'],
    bytesPerLine: 16,
    lineCount: 16,
  })

  let displayContent = $state<ViewportDisplayContent>()

  window.addEventListener('message', (msg) => {
    switch (msg.data.command) {
      case 20:
        const msgContent: ViewportMsg = {
          data: msg.data.data.data,
          srcOffset: msg.data.data.fileOffset,
          srcBytesRemaining: msg.data.data.bytesLeft,
        }
        dataDisplay.viewport.update(msgContent)
        dataDisplay.vp = msgContent.data
        dataDisplay.vpUpdated = true
        displayContent = dataDisplay.get()
        console.log(dataDisplay.viewport.byteAt(0))
    }
  })
</script>

{#snippet linedata(bytes: Byte[])}
  {#each bytes as byte}
    <div class="byte-value">{dataDisplay.config.byteDisplay(byte.value)}</div>
  {/each}
{/snippet}

{#if dataDisplay.vpUpdated}
  {#each Object.keys(dataDisplay.get()) as dataLineNum}
    <FlexContainer>
      {@render linedata(displayContent![parseInt(dataLineNum)])}
    </FlexContainer>
  {/each}
{/if}

<style>
  .byte-value {
    padding: 5px 5px 5px 5px;
  }
</style>
