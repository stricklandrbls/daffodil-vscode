<script lang='ts'>
    export let disableIf= false
    export let name: string
</script>
<button disabled={disableIf}>{name}</button>
