<script lang="ts">
  import {
    getSearchToInput,
    getSeekToInput,
    getSeekToValue,
    seekErr,
    setSeekToInput,
    setSeekToValue,
    validateSeekOffset,
  } from '.'
  import Input from 'HTMLWrappers/Input/Input.svelte'
  import { getMainViewport, ViewportController } from 'editor_components/data'
  import IconButton from 'HTMLWrappers/buttons/IconButton.svelte'
  import Error from 'HTMLWrappers/error/Error.svelte'
  const onSeekOffsetUpdated = (
    event: Event & { currentTarget: EventTarget & HTMLInputElement }
  ) => {
    const offsetStr = event.currentTarget.value
    if (offsetStr === '' || offsetStr === undefined) {
      seekErr.clear()
      return
    }

    validateSeekOffset(
      offsetStr,
      (offset) => {
        seekErr.clear()
        setSeekToValue(offset)
      },
      (err) => seekErr.setMsg(err)
    )
  }
</script>

<fieldset class="search-replace">
  <legend>Search</legend>
  <div class="search-attr-grid">
    <Input
      type="text"
      id="seekInput"
      valueBind={getSeekToInput()}
      onInputEnter={onSeekOffsetUpdated}
      placeholder={'Seek To Offset'}
      --width="inherit"
      --height="-webkit-fill-available"
    />
    <IconButton
      icon={'start'}
      text="Seek"
      clickCallback={() => {
        ViewportController.seekViewport(getMainViewport(), getSeekToValue())
      }}
      disabled={seekErr.hasErrored()}
      --width="inherit"
      --height="-webkit-fill-available"
      --font-size="smaller"
    />
    <Error err={seekErr} display={seekErr.hasErrored()} />
    <Input
      type="text"
      id=""
      valueBind={getSearchToInput()}
      onInputEnter={() => {}}
      placeholder={'Search'}
      --width="inherit"
      --height="-webkit-fill-available"
    />
    <IconButton
      icon={'my_location'}
      text="Search"
      clickCallback={() => {}}
      --width="inherit"
      --height="-webkit-fill-available"
      --font-size="smaller"
    />
    <div class="error"></div>
  </div>
</fieldset>

<style lang="scss">
  fieldset.search-replace {
    width: 100%;
  }
  .search-attr-grid {
    display: grid;
    grid-template-columns: 60% 30% 10%;
    grid-template-rows: 30px 30px 30px;
    grid-gap: 2px;
    align-items: start;
    justify-items: stretch;
  }
</style>
