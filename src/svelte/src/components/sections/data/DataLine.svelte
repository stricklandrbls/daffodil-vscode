<script lang="ts">
  import { getDataDisplaySettings } from 'utilities'
  import { Byte, DisplayByte } from '.'

  let { lineOffset, bytes }: { lineOffset?: number; bytes: DisplayByte[] } =
    $props()
</script>

{#if lineOffset != undefined}
  <div class="address">
    {lineOffset.toString(getDataDisplaySettings().addrRadix)}
  </div>
{/if}
{#each bytes as byte}
  <div class="byte" id={byte.offsets.viewport.toString()}>
    {byte.str}
  </div>
{/each}

<style>
  div.address {
    min-width: 110px;
    direction: rtl;
    justify-content: right;
    letter-spacing: 4px;
  }
  div.byte {
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
  div.byte.selected {
    background-color: var(--color-secondary-light);
    color: var(--color-secondary-darkest);
  }
  div.byte.searchresult {
    border-color: var(--color-search-result);
  }
  div.byte.replacement {
    border-color: var(--color-replace-result);
  }
  @keyframes byteBlink {
    0% {
      background-color: initial;
    }
    100% {
      background-color: indianred;
    }
  }
  div.byte.bytepos1b {
    animation-name: byteBlink;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
  }
  div.byte:hover {
    border-color: var(--color-secondary-mid);
    cursor: pointer;
  }
  div.byte::selection {
    background-color: transparent;
  }
  div.latin1Undefined::after {
    content: '?';
    font-size: 16px;
    filter: brightness(0.75);
  }
  div.disabled {
    background-color: var(--color-primary-darkest);
    color: var(--color-primary-darkest);
    cursor: default;
  }
</style>
