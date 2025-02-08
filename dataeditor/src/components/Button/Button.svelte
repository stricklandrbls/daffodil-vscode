<script lang='ts'>
	import { onMount } from "svelte";

    export let fn: (event?: Event) => void
    export let description = ''
    export let disabled: boolean = false

</script>
<span>
    {#if disabled}
        <button>{description}</button>
    {:else}
        <button on:click={fn}>{description}</button>
    {/if}
</span>
