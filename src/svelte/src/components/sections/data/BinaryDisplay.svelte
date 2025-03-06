<script lang="ts">
  import FlexContainer from '../../layout/FlexContainer.svelte'
  import { getLineFrom, ViewportData, type Byte, type LineData } from './DataDisplay'

  export class DataDisplay {
    static LineCount = 16
    static FileOffset = 0

    private _data = $state(new ViewportData())
    private _lines = $state(new Array<LineData>(16))
    constructor(){

    }

    public update(viewport: ViewportData) {
      this._data.update(viewport)
      let currentLine = 0

      for(let i = 0; i < 16; i++)
        this._lines[i] = getLineFrom(this._data, i*16)

      console.log(this._lines)
    }

    public lineData() {
      return this._lines
    }
    
    public hasData(){ return this._data.length > 0}
  }

  const data = new DataDisplay()

  window.addEventListener('message', (msg) => {
    switch (msg.data.command) {
      case 20:
        data.update(msg.data.data as ViewportData)
    }
  })
</script>

{#snippet linedata(bytes: Array<Byte>)}
  {#each bytes as byte}
    <div class="byte-value">0x{byte.value.toString(16)}</div>
  {/each}
{/snippet}
{#if data.hasData()}
    {#each data.lineData() as dataline}
            
        <FlexContainer >
            {@render linedata(dataline.bytes)}
        </FlexContainer>
    {/each}
{/if}
<style>
  .byte-value {
    padding: 5px 5px 5px 5px;
  }
</style>
