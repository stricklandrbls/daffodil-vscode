<script lang="ts">
  import { setContext } from 'svelte'
  import { type DebugVariable, fileinfo, debugVars, addVarToDebug, setDebugVarContext } from './Debug.svelte.ts'
  let { children } = $props()

  let fileCount = $state(1)
  debugVars.push({ id: 'fileCount', valueStr: () => fileCount.toString() })
  debugVars.push({ id: 'filename', valueStr: () => fileinfo.filename })
  setDebugVarContext()

</script>

{@render children()}

{#snippet printVar(dvar: DebugVariable)}
  <div class="debug-var">
    <span class="id">{dvar.id}:</span>
    <span class="value">{dvar.valueStr()}</span>
  </div>
{/snippet}
<h3>Debug Vars Count: {debugVars.length}</h3>
<div id="debug-container">
  {#each debugVars as dvar}
    {@render printVar(dvar)}
  {/each}
</div>

<style lang="scss">
  div#debug-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: space-between;
  }
  div#debug-container .debug-var {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  div#debug-container .debug-var .id {
    overflow: hidden;
  }
  div#debug-container .debug-var .value {
    width: 50%;
  }
</style>
