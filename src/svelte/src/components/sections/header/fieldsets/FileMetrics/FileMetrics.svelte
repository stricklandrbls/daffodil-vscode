<script lang="ts">
  import IconButton from '../../../../html/buttons/IconButton.svelte'
  import FlexContainer from '../../../../layout/FlexContainer.svelte'
  import FileMetricsData from '.'
  import ISO6391 from 'iso-639-1'

  let {
    onMetricsChange,
  }: { onMetricsChange: (metrics: FileMetricsData.FileMetrics_t) => void } =
    $props()
  $effect(() => {
    onMetricsChange(FileMetricsData)
  })

  // addMessageListener(MessageCommand.fileInfo, msg => {
  //     switch(msg.data.command){
  //         case MessageCommand.fileInfo:
  //             metrics = msg.data.data as FileMetricsData
  //             console.log(msg)
  //             // filename = msg.data.data.fileName ? msg.data.data.fileName : "ERROR: MSGEXT"

  //         break
  //     }

  // })
</script>

<fieldset class="file-metrics">
  <legend> File Metrics </legend>

  <FlexContainer --dir="row">
    <span id="filename" class="nowrap">{FileMetricsData.fileName}</span>
  </FlexContainer>
  <hr />
  <FlexContainer --dir="row">
    <label for="content-type">Content Type</label>
    <span>{FileMetricsData.type}</span>
  </FlexContainer>
  <FlexContainer --dir="row">
    <label for="langage">Language</label>
    <span>{ISO6391.getName(FileMetricsData.language)}</span>
  </FlexContainer>
  <FlexContainer --dir="row">
    <label for="disk-file-size">Disk Size</label>
    <span>{humanReadableByteLength(FileMetricsData.diskFileSize)}</span>
  </FlexContainer>
  <FlexContainer --dir="row">
    <label for="disk-computed-size">Computed Size</label>
    <span>{humanReadableByteLength(FileMetricsData.computedSize)}</span>
  </FlexContainer>
  <FlexContainer --dir="row" --align-items="center">
    <IconButton clickCallback={() => {}} icon="start" text="Save"></IconButton>
    <!-- <Button clickCallback={(e)=>{}} description="Save to Disk" dsabled={false} >
            <span slot="left" class="btn-icon material-symbols-outlined">save</span>
            <span slot="default">&nbsp;Save</span>
          </Button>
          <Button fn={saveAs} description="Save as">
            <span slot="left" class="btn-icon material-symbols-outlined"
              >save_as</span
            >
            <span slot="default">&nbsp;Save As</span>
          </Button>
          <Button fn={toggleSaveDisplay} description="Save">
            <span slot="left" class="btn-icon material-symbols-outlined">save</span>
            <span slot="default">Save&hellip;</span>
          </Button> -->
  </FlexContainer>
</fieldset>

<style>
  label {
    text-align: left;
    width: 50%;
    text-decoration: solid;
  }
</style>
