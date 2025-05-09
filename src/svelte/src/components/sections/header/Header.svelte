<script lang="ts">
  import FlexContainer from "../../layout/FlexContainer.svelte"

    /// Responsible only for rendering the fieldset children and toggling their visibility
    let { children, title }: {children: any, title: string} = $props()

    let hide = $state(false)
</script>

<button onclick={()=> hide = !hide}>Hide</button>

{#if hide}
<FlexContainer>
    <FlexContainer --justify-content="space-between" --align-items="center">
      <div class="filename-display"><b>{title}</b> </div>
    </FlexContainer>
  </FlexContainer>
{:else}
  {@render children()}
{/if}
