<script lang="ts">
  import {
    ByteOrderMark,
    EditActionRestrictions,
    EditActions,
    getDataEditSettings,
    setDataEditSettings,
  } from 'utilities/data.svelte'
  import FlexContainer from 'layout/FlexContainer.svelte'
  import {
    AvailableStrEncodings,
    ENCODING_GROUPS,
    getDataDisplaySettings,
    RadixStr,
    RadixStrToValue,
    RadixValueToStr,
    setDataDisplaySettings,
  } from 'utilities'

  let { bom }: { bom: ByteOrderMark } = $props()
</script>

<fieldset>
  <legend>Settings</legend>
  <FlexContainer --dir="column">
    <FlexContainer --dir="row" --align-items="center">
      <label for="radix"
        >Display Radix: {getDataDisplaySettings().dataRadix}</label
      >
      <!-- <select id="radix" class={$UIThemeCSSClass} bind:value={$displayRadix}> -->
      <select
      value={RadixValueToStr[getDataDisplaySettings().dataRadix]}
        id="radix"
        onchange={(event) => {
          const selectedRadix = event.currentTarget.value as RadixStr
          setDataDisplaySettings('dataRadix', RadixStrToValue[selectedRadix])
        }}
      >
        <option value="Hexadecimal">Hexadecimal</option>
        <option value="Decimal">Decimal</option>
        <option value="Octal">Octal</option>
        <option value="Binary">Binary</option>
      </select>
    </FlexContainer>

    <FlexContainer --dir="row" --align-items="center">
      <label for="encoding"
        >Edit Encoding:{getDataDisplaySettings().editorEncoding}</label
      >
      <!-- <select
          id="encoding"
          class={$UIThemeCSSClass}
          bind:value={$editorEncoding}
        > -->
      <select
        value={getDataDisplaySettings().editorEncoding}
        id="encoding"
        onchange={(event) => {
          const selectedEncoding = event.currentTarget
            .value as AvailableStrEncodings
          setDataDisplaySettings('editorEncoding', selectedEncoding)
        }}
      >
        {#each ENCODING_GROUPS as { group, encodings }}
          <optgroup label={group}>
            {#each encodings as { name, value }}
              <option {value}>{name}</option>
            {/each}
          </optgroup>
        {/each}
      </select>
    </FlexContainer>

    <FlexContainer --dir="row" --align-items="center">
      <label for="encoding">Editing:{getDataEditSettings().allowedEdit}</label>
      <!-- <select
          id="allowed-editing-actions"
          class={$UIThemeCSSClass}
          bind:value={$editorActionsAllowed}
        > -->
      <select
        value={getDataEditSettings().allowedEdit}
        id="allowed-editing-actions"
        onchange={(event) => {
          const selectedActionRestriction = parseInt(
            event.currentTarget.value
          ) as EditActionRestrictions
          setDataEditSettings('allowedEdit', selectedActionRestriction)
        }}
      >
        <option value={EditActionRestrictions.None}
          >{EditActions[EditActionRestrictions.None]}</option
        >
        <option value={EditActionRestrictions.OverwriteOnly}
          >{EditActions[EditActionRestrictions.OverwriteOnly]}</option
        >
      </select>
    </FlexContainer>
  </FlexContainer>
</fieldset>

<style lang="scss">
  fieldset label {
    width: 50%;
  }
  fieldset select {
    width: 50%;
  }
  fieldset hr {
    width: 100%;
    margin: 5pt 0 5pt 0;
  }
</style>
