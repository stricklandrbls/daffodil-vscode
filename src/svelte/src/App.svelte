<script lang="ts">
  import Button from './components/html/buttons/Button.svelte'
  import IconButton from './components/html/buttons/IconButton.svelte'
  import DataDisplay from './components/sections/data/BinaryDisplay.svelte'
  import { ByteRadix } from './components/sections/data/ViewportDisplay'
  import Header from './components/sections/header/Header.svelte'
  import { createMessenger, WindowListener } from './utilities/Messenger'

  let radix = $state<ByteRadix>(16)
    createMessenger<WindowListener>(new WindowListener(window))
</script>
{#snippet text()}
  <span>Hello</span>
{/snippet}
<main>
  <Header />
  <IconButton text="Something" icon={'start'} clickCallback={(e)=>{ radix = 10}}/>
  <DataDisplay {radix}/>
</main>

<style>
  @font-face {
    font-family: 'Material Symbols Outlined';
    font-style: normal;
    font-weight: normal bold;
    src: url(./src/resources/icons/material-icons.woff2) format('woff2');
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
