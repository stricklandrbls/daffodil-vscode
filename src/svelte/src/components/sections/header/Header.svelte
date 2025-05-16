<script lang="ts">
  import FlexContainer from '../../layout/FlexContainer.svelte'
  import { FileMetrics, getFileMetrics } from './fieldsets/FileMetrics'
  import SearchReplace from './fieldsets/SearchReplace/SearchReplace.svelte'
  import Settings from './fieldsets/Settings/Settings.svelte'
  /// Responsible only for rendering the fieldset children and toggling their visibility
  let hide = $state(false)
</script>

<button onclick={() => (hide = !hide)}>Hide</button>

{#if hide}
  <FlexContainer>
    <FlexContainer --justify-content="space-between" --align-items="center">
      <div class="filename-display"><b>{getFileMetrics().fileName}</b></div>
    </FlexContainer>
  </FlexContainer>
{:else}
  <FlexContainer --height="150pt">
    <header>
      <FlexContainer --height="fit-content">
        <FileMetrics />
        <SearchReplace />
        <Settings bom={getFileMetrics().byteOrderMark} />
        <!-- <FileMetrics {...metrics} /> -->
        <!-- <FileMetrics on:clearChangeStack on:redo on:undo /> -->
        <!-- <SearchReplace on:seek on:clearDataDisplays /> -->
        <!-- <Settings on:seek /> -->
      </FlexContainer>
    </header>
    <div class="display-icons"></div>
  </FlexContainer>
{/if}
