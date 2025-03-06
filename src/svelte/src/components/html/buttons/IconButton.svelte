<script lang="ts">
  import type { IconButtonProps } from "."



    let {icon,text }:IconButtonProps = $props()
</script>

{@render buttonContent({icon,text})}

{#snippet buttonContent(content:IconButtonProps)}
    
<button>
    <span class="material-symbols-outlined">{icon}</span>
    {text}
</button>
{/snippet}
