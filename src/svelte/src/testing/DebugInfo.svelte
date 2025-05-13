<script lang="ts">
  import { DebugData, DebugItems, getDebugItems } from '.'
</script>

<div class="debug-section">
  <h3>Debug</h3>
  {#each getDebugItems() as debugItem}
    <div class="debug-item">
      <div class="debug-attr">
        {debugItem[0]}
      </div>
      <div class="debug-value">
        {#if typeof debugItem[1].value == 'object'}
          {#each Object.keys(debugItem[1].value) as key}
            <div class="debug-value-obj">
              {key} : {debugItem[1].value[key]}
            </div>
          {/each}
        {:else}
          {debugItem[1].value}
        {/if}
      </div>
    </div>
  {/each}
</div>

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
