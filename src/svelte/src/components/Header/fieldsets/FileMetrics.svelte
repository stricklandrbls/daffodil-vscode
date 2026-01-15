<!--
Licensed to the Apache Software Foundation (ASF) under one or more
contributor license agreements.  See the NOTICE file distributed with
this work for additional information regarding copyright ownership.
The ASF licenses this file to You under the Apache License, Version 2.0
(the "License"); you may not use this file except in compliance with
the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->
<script lang="ts">
  import Button from '../../Inputs/Buttons/Button.svelte'
  import FlexContainer from '../../layouts/FlexContainer.svelte'
  import { MessageCommand } from '../../../utilities/message'
  import { vscode } from '../../../utilities/vscode'
  import { saveable, fileMetrics, replaceQuery } from '../../../stores'
  import { createEventDispatcher } from 'svelte'
  import SidePanel from '../../layouts/SidePanel.svelte'
  import ByteFrequencyGraph from '../../DataMetrics/DataMetrics.svelte'
  import { viewport } from '../../../stores'
  import { humanReadableByteLength } from '../../../utilities/display'
  import { DATA_PROFILE_MAX_LENGTH } from '../../../stores/configuration'
  import Tooltip from '../../layouts/Tooltip.svelte'
  import ISO6391 from 'iso-639-1'
  import { writable } from 'svelte/store'
  const eventDispatcher = createEventDispatcher()

  let displayOpts = false
  let isProfilerOpen = false
  let metricsDisplayType: 'file-info' | 'hashes' = 'file-info'

  let canUndo: boolean
  let canRedo: boolean
  let canRevert: boolean
  let startOffset: number = 0
  let length: number = 0

  function saveAs() {
    vscode.postMessage({
      command: MessageCommand.saveAs,
    })
    displayOpts = false
  }

  function save() {
    vscode.postMessage({
      command: MessageCommand.save,
    })
    displayOpts = false
  }

  function toggleSaveDisplay() {
    displayOpts = !displayOpts
    if (displayOpts) {
      // set displayOpts to false after 10 seconds
      setTimeout(() => {
        displayOpts = false
      }, 10000)
    }
  }

  const viewportHash = writable('')
  const diskViewportHash = writable('')

  window.addEventListener('message', (msg) => {
    switch (msg.data.command) {
      case 21:
        if (msg.data.data.hashes.local.viewport) {
          const hashStr = msg.data.data.hashes.local.viewport as string

          $viewportHash = hashStr.substring(hashStr.length - 5)
        }
        if (msg.data.data.hashes.disk.viewport) {
          const hashStr = msg.data.data.hashes.disk.viewport as string
          $diskViewportHash = hashStr.substring(hashStr.length - 5)
        }

        break
      case MessageCommand.fileInfo:
        {
          // reset the profiler if changes have been made
          isProfilerOpen = false
          startOffset = length = 0
          if ('fileName' in msg.data.data) {
            $fileMetrics.name = msg.data.data.fileName
          }
          if ('type' in msg.data.data) {
            $fileMetrics.type = msg.data.data.type
          }
          if ('language' in msg.data.data) {
            $fileMetrics.language = msg.data.data.language
          }
          if ('diskFileSize' in msg.data.data) {
            $fileMetrics.diskSize = msg.data.data.diskFileSize
          }
          if ('computedFileSize' in msg.data.data) {
            $fileMetrics.computedSize = msg.data.data.computedFileSize
          }
          if ('changeCount' in msg.data.data) {
            $fileMetrics.changeCount = msg.data.data.changeCount
          }
          if ('undoCount' in msg.data.data) {
            $fileMetrics.undoCount = msg.data.data.undoCount
          }
        }
        break
      default:
        break // do nothing
    }
  })

  $: {
    canUndo = $fileMetrics.changeCount > 0
    canRedo = $fileMetrics.undoCount > 0
    canRevert = $fileMetrics.undoCount + $fileMetrics.changeCount > 0
    length = length <= 0 ? viewport.offsetMax - startOffset : length
  }

  function redo() {
    eventDispatcher('redo')
  }

  function undo() {
    eventDispatcher('undo')
  }

  function clearChangeStack() {
    eventDispatcher('clearChangeStack')
  }

  function toggleDataProfiler() {
    isProfilerOpen = !isProfilerOpen
  }

  function toggleMetricsDisplayType() {
    metricsDisplayType =
      metricsDisplayType == 'file-info' ? 'hashes' : 'file-info'
  }
</script>

<SidePanel
  position="top-left"
  title="Data Profiler"
  panelWidth="285px"
  bind:open={isProfilerOpen}
>
  {#if isProfilerOpen}
    <ByteFrequencyGraph
      title="Byte Frequency Profile"
      {startOffset}
      length={Math.min(length, DATA_PROFILE_MAX_LENGTH)}
    />
  {/if}
</SidePanel>

<fieldset class="file-metrics">
  <legend>File Metrics</legend>
  <FlexContainer --dir="row">
    <span id="file_name" class="nowrap">{$fileMetrics.name}</span>&nbsp;
  </FlexContainer>
  <FlexContainer --dir="row" --align-items="center">
    {#if displayOpts}
      <Button fn={save} disabledBy={!$saveable} description="Save to disk">
        <span slot="left" class="btn-icon material-symbols-outlined">save</span>
        <span slot="default">&nbsp;Save</span>
      </Button>
      <Button fn={saveAs} description="Save as">
        <span slot="left" class="btn-icon material-symbols-outlined"
          >save_as</span
        >
        <span slot="default">&nbsp;Save As</span>
      </Button>
    {:else}
      <Button fn={toggleSaveDisplay} description="Save">
        <span slot="left" class="btn-icon material-symbols-outlined">save</span>
        <span slot="default">Save&hellip;</span>
      </Button>
    {/if}
  </FlexContainer>
  <hr />
  <FlexContainer --dir="row">
    <FlexContainer --dir="column">
      <Tooltip
        description={metricsDisplayType == 'file-info'
          ? 'Initial file size'
          : 'Disk Hash'}
        alwaysEnabled={true}
      >
        <label for="disk_file_size"
          >{metricsDisplayType == 'file-info'
            ? 'Disk Size'
            : 'Disk Hash'}</label
        >
      </Tooltip>
      <Tooltip
        description="{$fileMetrics.diskSize.toLocaleString('en')} bytes"
        alwaysEnabled={true}
      >
        <span id="disk_file_size" class="nowrap"
          >{metricsDisplayType == 'file-info'
            ? humanReadableByteLength($fileMetrics.diskSize)
            : $viewportHash}</span
        >
      </Tooltip>
    </FlexContainer>
    <FlexContainer --dir="column">
      <Tooltip description="Size as file is being edited" alwaysEnabled={true}>
        <label for="computed_file_size"
          >{metricsDisplayType == 'file-info'
            ? 'Computed Size'
            : 'Modified Hash'}</label
        >
      </Tooltip>
      <Tooltip
        description="{$fileMetrics.computedSize.toLocaleString(
          'en'
        )} bytes ({$diskViewportHash})"
        alwaysEnabled={true}
      >
        <span id="computed_file_size" class="nowrap"
          >{metricsDisplayType == 'file-info'
            ? humanReadableByteLength($fileMetrics.computedSize)
            : $viewportHash}</span
        >
      </Tooltip>
    </FlexContainer>
    <FlexContainer --dir="column">
      <label for="content_type">Content Type</label>
      <Tooltip description={$fileMetrics.type} alwaysEnabled={true}>
        <span id="content_type" class="nowrap"
          >{$fileMetrics.type.split('/').pop()}</span
        >
      </Tooltip>
    </FlexContainer>
    <FlexContainer --dir="column">
      <label for="language">Language</label>
      <Tooltip
        description={ISO6391.getName($fileMetrics.language)}
        alwaysEnabled={true}
      >
        <span id="language" class="nowrap">{$fileMetrics.language}</span>
      </Tooltip>
    </FlexContainer>
  </FlexContainer>
  <hr />
  <FlexContainer>
    <FlexContainer --dir="column" --align-items="center">
      <FlexContainer --dir="row">
        <Button disabledBy={!canRedo} fn={redo} description="Redo change">
          <span slot="left" class="icon-container">
            <span class="btn-icon material-symbols-outlined">redo</span>
            <div class="icon-badge">{$fileMetrics.undoCount}</div>
          </span>
          <span slot="default">&nbsp;Redo</span>
        </Button>
        <Button disabledBy={!canUndo} fn={undo} description="Undo change">
          <span slot="left" class="icon-container">
            <span class="btn-icon material-symbols-outlined">undo</span>
            <div class="icon-badge">{$fileMetrics.changeCount}</div>
          </span>
          <span slot="default">&nbsp;Undo</span>
        </Button>
        <Button
          disabledBy={!canRevert}
          fn={clearChangeStack}
          description="Revert all changes"
        >
          <span slot="left" class="btn-icon material-symbols-outlined"
            >restart_alt</span
          >
          <span slot="default">&nbsp;Revert All</span>
        </Button>
      </FlexContainer>
    </FlexContainer>
    <FlexContainer --dir="row" --justify-content="end">
      <Button fn={toggleDataProfiler} description="Open data profiler">
        <span slot="left" class="btn-icon material-symbols-outlined"
          >functions</span
        >
        <span slot="default">Profile</span>
      </Button>
      <Button
        fn={toggleMetricsDisplayType}
        description={`Toggle Metrics Display Type`}
      >
        <span slot="left" class="btn-icon material-symbols-outlined">123</span>
      </Button>
    </FlexContainer>
  </FlexContainer>
</fieldset>

<style lang="scss">
  fieldset {
    width: 100%;
    min-width: 180pt;
  }
  fieldset label {
    font-weight: bold;
  }
  span.nowrap {
    white-space: nowrap;
    overflow-x: auto;
    display: inline-block;
  }
</style>
