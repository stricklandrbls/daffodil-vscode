<script lang="ts">
  import FlexContainer from 'layout/FlexContainer.svelte'
  import { ViewportController } from '.'
  import { vscode } from 'utilities/vscode'
  import { MessageCommand } from 'utilities/message'
</script>

<FlexContainer --dir="column">
  <FlexContainer --dir="row">
    <button onclick={() => {}}>+</button>
    <div>Seek:</div>
    <input
      type="text"
      oninput={(e) => {
        vscode.postMessage({
          command: MessageCommand.scrollViewport,
          data: {
            scrollOffset: parseInt(e.currentTarget.value),
            bytesPerRow: 16,
            numLinesDisplayed: 16,
          },
        })
      }}
    />
  </FlexContainer>
</FlexContainer>

<style lang="scss">
  button {
    width: 30pt;
  }
</style>
