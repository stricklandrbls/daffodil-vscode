<script lang="ts">
  import type { IconButtonProps } from "."
    let {icon,text,clickCallback}:IconButtonProps = $props()
</script>

{@render buttonContent({icon,text, clickCallback})}

{#snippet buttonContent(content:IconButtonProps)}
    
<button onclick={clickCallback}>
    <span class="material-symbols-outlined" >{icon}</span>
    {text}
</button>
{/snippet}
