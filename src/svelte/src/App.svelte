<script lang="ts">
  import Header from './components/sections/header/Header.svelte'
  import { createMessenger, WindowListener } from './utilities/Messenger'
  import { FileMetrics } from './components/sections/header/fieldsets/FileMetrics'

  createMessenger<WindowListener>(new WindowListener(window))
  let title = $state<string>('')

  // <Header /> Required Stores:
  // - ViewportDisplayConfig: For modifying the viewport display in the <Settings> Component
</script>

<main>
  <Header title={'FIlename'}>
    <FileMetrics />
  </Header>
  <!-- <DataDisplay /> -->
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
