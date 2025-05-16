<script lang="ts">
  import FlexContainer from 'layout/FlexContainer.svelte'
  import { getSeekToInput } from '.'
  import Input from 'HTMLWrappers/Input/Input.svelte'
  import { OnEnterEvent } from 'HTMLWrappers/Input'
  import { getMainViewport, ViewportController } from 'editor_components/data'
  const onSeekOffsetUpdated = (event: OnEnterEvent) => {
    ViewportController.seekViewport(getMainViewport(), event.valueInt)
  }
</script>

<fieldset class="search-replace">
  <legend>Search</legend>
  <FlexContainer --dir="column" --align-items="center">
    <Input
      type="text"
      id="seekInput"
      valueBind={getSeekToInput()}
      onInputEnter={onSeekOffsetUpdated}
      placeholder={'Seek To Offset'}
    />
  </FlexContainer>
</fieldset>
