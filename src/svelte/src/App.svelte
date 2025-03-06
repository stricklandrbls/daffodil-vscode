<script lang="ts">
  import Button from './components/html/buttons/Button.svelte'
  import IconButton from './components/html/buttons/IconButton.svelte'
  import DataDisplay from './components/sections/data/BinaryDisplay.svelte'
</script>
{#snippet text()}
  <span>Hello</span>
{/snippet}
<main>
  <IconButton text="Something" icon={'start'} />
  <DataDisplay />
</main>

<style>
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
