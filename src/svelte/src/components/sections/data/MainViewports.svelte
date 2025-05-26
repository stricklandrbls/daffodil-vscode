<script lang="ts">
  import {
    byteDivWidthFromRadix,
    BytesPerRow,
    getDataDisplaySettings,
    RadixStr,
    RadixStrToValue,
    RadixValues,
  } from 'utilities'
  import { DisplayByte, RadixDisplays } from './ViewportDisplayer.svelte'
  import {
    getMainViewport,
    getMainViewportSettings,
  } from './MainViewport.svelte'
  import FlexContainer from 'layout/FlexContainer.svelte'
  import DataLine from './DataLine.svelte'
  import { getCurrentByteSelection } from './SelectedByte.svelte'
  import SingleByteEdit from './SingleByteEdit.svelte'

  let { children } = $props()
  let lineWidth = $state('100%')
  const changeAddrRadix = (
    event: Event & { currentTarget: HTMLSelectElement }
  ) => {
    const toRadix = event.currentTarget.value as RadixStr
    getDataDisplaySettings().addrRadix = RadixStrToValue[toRadix]
  }
  function generate_offset_headers() {
    let ret: DisplayByte[] = []
    const width = document.getElementById('byte-line')
    if (width != null) lineWidth = width.style.width
    const mainBPR = getMainViewportSettings().bytesPerLine
    const dataRadix = getDataDisplaySettings().dataRadix
    const addrRadix = getDataDisplaySettings().addrRadix
    if (dataRadix != 2) {
      for (let i = 0; i < mainBPR; i++) {
        ret.push({
          str: i.toString(addrRadix).padStart(2, '0'),
          offsets: { src: 0, viewport: 0 },
          value: 0,
          isSelected: false,
        })
      }
    } else {
      for (let i = 0; i < mainBPR; i++) {
        ret.push({
          str: i.toString(addrRadix),
          offsets: { src: 0, viewport: 0 },
          value: 0,
          isSelected: false,
        })
      }
    }
    return ret
  }
</script>

<div class="vp-header">
  <div class="container">
    <div class="hdr-line">
      <div class="byte-line">
        <div class="address">
          <select class="addr" id="vp-addr-offset" onchange={changeAddrRadix}>
            <option value="Hexadecimal">Hexadecimal</option>
            <option value="Decimal">Decimal</option>
            <option value="Octal">Octal</option>
            <option value="Binary">Binary</option>
          </select>
        </div>
        <DataLine bytes={generate_offset_headers()} />
      </div>
    </div>
  </div>
  <div class="container">
    <SingleByteEdit
      active={getCurrentByteSelection().getSelectionType() === 'single'}
    />
    <div class="hdr-line">
      <div class="byte-line">
        <DataLine bytes={generate_offset_headers()} />
      </div>
    </div>
  </div>
</div>
<div class="vp-data">
  {@render children()}
</div>

<style lang="scss">
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
  div.container div.hdr-line div.address {
    min-width: 110px;
  }
  div.container div.hdr-line div {
    display: flex;
    align-items: center;
    width: 100%;
  }
  div.container div.hdr-line {
    display: flex;
    flex-direction: row;
    width: fit-content;
    height: 24px;
    font-weight: 800;
    width: 100%;
  }
  div.container .hdr-line .byte-line {
    display: flex;
    flex-direction: row;
    border-width: 0px 2px 0px 2px;
    border-color: var(--color-primary-darkest);
    border-style: solid;
    justify-content: space-between;
  }
  span.separator {
    border: 1px solid grey;
    opacity: 0.5;
    display: flex;
    flex-direction: column;
    margin: 0 5px;
  }
  div.vp-header {
    border: 2px solid transparent;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    font-size: 13px;
    font-family: var(--monospace-font);
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
    width: 100%;
  }
  div.vp-data {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  div.physical-byte-indices {
    display: flex;
    justify-content: space-between;
    border-width: 0 2px 0 2px;
  }
  div.physical-byte-index {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    font-family: var(--monospace-font);
    border-style: solid;
    border-width: 2px;
    border-color: transparent;
    height: 20px;
    text-align: center;
    transition: all 0.25s;
    border-radius: 5px;
    user-select: none;
    width: 100%;
  }
</style>
