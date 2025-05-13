<script lang="ts">
  import IconButton from '../../../../html/buttons/IconButton.svelte'
  import FlexContainer from '../../../../layout/FlexContainer.svelte'
  import { FileMetrics_t, getFileMetrics, setFileMetrics } from '.'
  import ISO6391 from 'iso-639-1'
  import { addMessageListener } from 'utilities/Messenger'
  import { MessageCommand } from 'utilities/message'
  import { humanReadableByteLength } from 'utilities/display.svelte'
  import { ViewportController } from 'editor_components/data'

  addMessageListener(MessageCommand.fileInfo, (msg) => {
    const metricsMsg = msg.data.data as FileMetrics_t
    setFileMetrics(metricsMsg)
    ViewportController.updateOffsetInfo(metricsMsg.computedFileSize)
  })
</script>

<fieldset class="file-metrics">
  <legend> File Metrics </legend>

  <FlexContainer --dir="row">
    <span id="filename" class="nowrap">{getFileMetrics().fileName}</span>
  </FlexContainer>
  <hr />
  <FlexContainer --dir="row">
    <label for="content-type">Content Type</label>
    <span>{getFileMetrics().type}</span>
  </FlexContainer>
  <FlexContainer --dir="row">
    <label for="langage">Language</label>
    <span>{ISO6391.getName(getFileMetrics().language)}</span>
  </FlexContainer>
  <FlexContainer --dir="row">
    <label for="disk-file-size">Disk Size</label>
    <span>{humanReadableByteLength(getFileMetrics().diskFileSize)}</span>
  </FlexContainer>
  <FlexContainer --dir="row">
    <label for="disk-computed-size">Computed Size</label>
    <span>{humanReadableByteLength(getFileMetrics().computedFileSize)}</span>
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
