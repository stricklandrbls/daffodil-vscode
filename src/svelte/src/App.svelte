<script lang="ts">
  import FlexContainer from 'layout/FlexContainer.svelte'
  import Header from './components/sections/header/Header.svelte'
  import Main from './Main.svelte'
  import ViewportDisplay from 'editor_components/data/ViewportDisplay.svelte'
  import MainViewports from 'editor_components/data/MainViewports.svelte'

  // <Header /> Required Stores:
  // - ViewportDisplayConfig: For modifying the viewport display in the <Settings> Component
</script>

<Main>
  <Header />
  <MainViewports>
    <ViewportDisplay displayType={'physical'} addrShow={true} />
    <ViewportDisplay displayType={'logical'} addrShow={false} />
  </MainViewports>
</Main>

<style>
  @font-face {
    font-family: 'Material Symbols Outlined';
    font-style: normal;
    font-weight: normal bold;
    src: url(./src/resources/icons/material-icons.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Red Hat Mono';
    font-style: normal;
    font-weight: normal bold;
    src: url(./src/resources/fonts/RedHatMono-Regular.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: normal bold;
    src: url(./src/resources/fonts/SpaceGrotesk-Variable.woff2) format('woff2');
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
