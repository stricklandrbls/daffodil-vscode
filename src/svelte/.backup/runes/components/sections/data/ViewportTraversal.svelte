<script lang="ts">
  import FlexContainer from 'layout/FlexContainer.svelte'
  import { getMainViewport, ViewportController } from '.'
  import { vscode } from 'utilities/vscode'
  import { MessageCommand } from 'utilities/message'
  function seekTo() {
    const viewport = getMainViewport()
    const inputElement = document.getElementById(
      'seek-offset-input'
    ) as HTMLInputElement
    const offsetToSeek = parseInt(inputElement.value)
    if (viewport.isFetchableAt(offsetToSeek))
      ViewportController.seekViewport(viewport, offsetToSeek)
  }
</script>

<FlexContainer --dir="column">
  <FlexContainer --dir="row">
    <button onclick={seekTo}>Seek</button>
    <input type="text" id="seek-offset-input" />
  </FlexContainer>
</FlexContainer>

<style lang="scss">
  button {
    width: 30pt;
  }
</style>
