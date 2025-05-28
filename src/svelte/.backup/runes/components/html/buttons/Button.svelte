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
    tooltipAlwaysEnabled = false
  } = $props()

</script>

<Tooltip alwaysEnabled={tooltipAlwaysEnabled} {description}>
  <button {disabled} onclick={!disabled ? clickCallback : undefined} style:width={width}>
    {@render children?.()}
  </button>
</Tooltip>
