<script lang="ts">
  import { handleFocus, InputProps } from '.'
  let {
    id,
    type,
    valueBind,
    placeholder,
    onInputEnter,
    width = '100%',
  }: InputProps = $props()

  let thisInputElement = $state<HTMLInputElement>()

  const handleKeyPress = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'Enter':
        const parsedValue = parseInt(thisInputElement!.value)
        onInputEnter({
          id,
          valueStr: thisInputElement!.value,
          valueInt: Number.isNaN(parsedValue) ? -1 : parsedValue,
        })
        break
    }
  }
</script>

{#if type === 'text' || type === 'search'}
  <span
    {id}
    onfocusin={handleFocus}
    onfocusout={handleFocus}
    style={`width: ${width}`}
  >
    <span>
      <input
        class={type}
        bind:this={thisInputElement}
        bind:value={valueBind}
        {placeholder}
        onkeydown={handleKeyPress}
      />
    </span>
    <div>
      value: {valueBind}
    </div>
  </span>
{/if}

<style lang="scss">
  .checkbox {
    width: auto;
  }
  span.input-actions {
    height: 20px;
    border: 2px solid var(--color-secondary-mid);
  }
  span.input-actions input {
    flex-grow: 1;
    border: none;
  }
  span.input-actions input {
    flex-grow: 1;
    border: none;
  }
  span.input-actions input:focus {
    outline: none;
    border-color: var(--color-alternate-grey);
    border: 1px solid;
  }
  span.input-actions span.inline-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
  }
  span.input-actions.dark {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--color-primary-dark);
  }
  span.input-actions.light {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--color-primary-light);
  }
</style>
