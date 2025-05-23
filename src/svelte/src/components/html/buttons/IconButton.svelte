<script lang="ts">
  import type { IconButtonProps } from '.'
  let {
    icon,
    text,
    clickCallback,
    disableIf = () => false,
  }: IconButtonProps = $props()
</script>

{@render buttonContent({ icon, text, clickCallback, disableIf })}

{#snippet buttonContent(content: IconButtonProps)}
  <button onclick={clickCallback} disabled={content.disableIf()}>
    <span class="material-symbols-outlined">{icon}</span>
    {text}
  </button>
{/snippet}

<style lang="scss">
  button {
    width: var(--width, '100%');
    height: var(--height, 'auto');
    font-size: var(--font-size, 'inherit');
  }
</style>
