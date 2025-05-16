<script lang="ts">
  import { createMessenger, WindowListener } from './utilities/Messenger'

  let { children } = $props()

  createMessenger<WindowListener>(new WindowListener(window))
</script>

<main>
  {@render children()}
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
