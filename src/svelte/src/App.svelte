<script lang="ts">
  import Header from './components/sections/header/Header.svelte'
  import Main from './Main.svelte'
  import ViewportDisplay from 'editor_components/data/ViewportDisplay.svelte'
  import DebugInfo from './testing/DebugInfo.svelte'

  // <Header /> Required Stores:
  // - ViewportDisplayConfig: For modifying the viewport display in the <Settings> Component
</script>

<Main>
  <Header />
  <!-- <ViewportDisplay /> -->
  <ViewportDisplay />
</Main>
<DebugInfo />

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
