<script lang="ts">
  import { createMessenger, WindowListener } from './utilities/Messenger'

  let { children } = $props()

  createMessenger<WindowListener>(new WindowListener(window))
</script>

<main>
  {@render children()}
</main>
