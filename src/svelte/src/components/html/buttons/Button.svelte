<script lang="ts">
  import type { ButtonProps } from '.'
  import FlexContainer from '../../layout/FlexContainer.svelte'
  import Tooltip from '../tooltip/Tooltip.svelte'
  let {
    clickCallback,
    disabled = false,
    width = '',
    fixedWidth = '',
    description = '',
    tooltipAlwaysEnabled = false,
    children
  }: ButtonProps = $props()
</script>

<Tooltip alwaysEnabled={tooltipAlwaysEnabled} {description}>
  <button {disabled} onclick={!disabled ? clickCallback : undefined} style:width={width}>
    {#if children}
    {@render children.left?.()}
    {@render children.right?.()}
    {/if}
  </button>
</Tooltip>
