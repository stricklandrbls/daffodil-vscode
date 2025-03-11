<script lang="ts">
  import type { IconButtonProps } from "."
    let {icon,text,clickCallback}:IconButtonProps = $props()
</script>

{@render buttonContent({icon,text, clickCallback})}

{#snippet buttonContent(content:IconButtonProps)}
    
<button>
    <span class="material-symbols-outlined" onclick={clickCallback}>{icon}</span>
    {text}
</button>
{/snippet}
