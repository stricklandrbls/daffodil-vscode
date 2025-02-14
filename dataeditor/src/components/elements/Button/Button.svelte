<script lang='ts'>
	import { onMount } from "svelte";

    export let fn: (event?: Event) => void
    export let description = ''
    export let disabled: boolean = false

</script>
<style lang="scss">
    button {
      width: var(--width, 80pt);
      outline: none;
    }
    button.collapsed {
      width: 25pt;
      margin-left: 5px;
      margin-right: 5px;
    }
</style>
<span>
    {#if disabled}
        <button id='test'>{description}</button>
    {:else}
        <button on:click={fn}>{description}</button>
    {/if}
</span>

