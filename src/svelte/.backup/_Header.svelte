<script lang="ts">
  import { MessageCommand } from "../src/global/messageimport { addMessageListener } from "..../src/utilities/Messengerport FlexContainer from "../.../src/components/layout/FlexContainer.svelte
  // import { FileMetricsData } from "./fieldsets/FileMetrics.svelte"
  import FileMetric../src/components/sections/header/fieldsets/FileMetrics/FileMetrics.sveltes.svelte"

    // let metrics = $state<FileMetricsData>({
    //   fileName: '', changeCount: -1, computedSize: -1, diskFileSize: -1, type: "", undoCount: -1,
    //   language: ""
    // })
    // let hide = $state(false) 

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

<!-- {#if hide} -->

<!-- {:else} -->
<FlexContainer --height="150pt">
    <header>
      <!-- <FlexContainer --height="fit-content"> -->
        <!-- <FileMetrics {...metrics} /> -->
        <!-- <FileMetrics on:clearChangeStack on:redo on:undo /> -->
        <!-- <SearchReplace on:seek on:clearDataDisplays /> -->
        <!-- <Settings on:seek /> -->
      <!-- </FlexContainer> -->
    </header>
    <div class="display-icons">

    </div>
  </FlexContainer>
<!-- {/if} -->
<style>
    header {
      display: flex;
      justify-content: center;
      width: 100%;
      max-height: 120pt;
      flex: 0 1 auto;
      transition: all 0.5s;
    }
    div.filename-display {
    font-size: medium;
    padding: 5px;
  }
</style>
