<script lang="ts">
  import FlexContainer from './layouts/FlexContainer.svelte'
  import { testStore } from './layouts'
  import HelpIcon from './layouts/HelpIcon.svelte'
  import Help from './layouts/Help.svelte'
  export let disableIf = false
  export let name: string
</script>

<FlexContainer>
    <HelpIcon helpSectionId={'edit-instructions'}/>
  <button
    disabled={disableIf}
    on:click={() => {
      $testStore = true
    }}>{name}</button
  >
  <Help />
</FlexContainer>
