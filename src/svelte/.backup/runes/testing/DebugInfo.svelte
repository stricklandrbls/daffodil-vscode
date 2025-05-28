<script lang="ts">
  import { DebugData, DebugItem, DebugItems, getDebugItems } from '.'
</script>

<style lang="scss">
  div.debug-section {
    width: 100%;
    border: 2px solid white;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
  }
  div.debug-item {
    width: 100%;
    display: flex;
    border-bottom: 1px solid grey;
    align-items: center;
    justify-content: flex-start;
    font-family: monospace;
  }
  div.debug-attr {
    min-width: 150px;

    text-decoration: underline;
    text-decoration-color: coral;
    font-family: monospace;
    font-weight: 800;
  }
</style>
