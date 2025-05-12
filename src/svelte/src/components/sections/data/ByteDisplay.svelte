<script lang="ts">
  import { getDataDisplaySettings, RadixValues } from 'utilities'
  import { Byte } from './DataDisplay'

  let { byte, display }: { byte: Byte; display: RadixValues } = $props()
</script>

<div>{byte.value.toString(display)}</div>
