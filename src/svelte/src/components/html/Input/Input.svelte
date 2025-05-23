<script lang="ts">
  import { InputProps } from '.'
  let {
    id,
    type,
    valueBind,
    placeholder,
    onInputEnter,
    width = '100%',
  }: InputProps = $props()

  let thisInputElement = $state<HTMLInputElement>()
</script>

{#if type === 'text' || type === 'search'}
  <span {id} style={`width: ${width}`}>
    <span>
      <input
        class="custom {type}"
        bind:this={thisInputElement}
        bind:value={valueBind}
        {placeholder}
        oninput={onInputEnter}
      />
    </span>
  </span>
{/if}

<style lang="scss">
  .checkbox {
    width: auto;
  }
  span input.custom {
    width: var(--width, -webkit-fill-available);
    height: var(--height, 'auto');
    border-radius: 5px;
    margin: 1pt 2pt 1pt 2px;
    padding: 4px;
    display: inline-block;
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
