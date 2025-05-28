<script lang="ts">
  import { getDataEditSettings } from 'utilities'
  import { getMainViewport } from './MainViewport.svelte'
  import {
    ActionElement,
    ActionElements,
    Actions,
    getCurrentByteSelection,
  } from './SelectedByte.svelte'
  let { active = false } = $props()
  let selectedByte = $derived(
    getCurrentByteSelection().getSelectionType() === 'single'
      ? getCurrentByteSelection().getOffsets().start.src
      : -1
  )

  let selectedTarget: {
    element?: HTMLDivElement
    parent?: HTMLDivElement
    divWidth: string
  } = {
    element: undefined,
    parent: undefined,
    divWidth: '',
  }

  let actionElements: ActionElements = {
    input: {
      id: 'binary-action-input',
      HTMLRef: undefined,
      render: true,
      position: { viewportLine: -1, viewportByteIndex: -1 },
    },
    'insert-before': {
      id: 'binary-action-before',
      HTMLRef: undefined,
      render: true,
      position: { viewportLine: -1, viewportByteIndex: -1 },
    },
    'insert-after': {
      id: 'binary-action-after',
      HTMLRef: undefined,
      render: true,
      position: { viewportLine: -1, viewportByteIndex: -1 },
    },
    delete: {
      id: 'binary-action-delete',
      HTMLRef: undefined,
      render: true,
      position: { viewportLine: -1, viewportByteIndex: -1 },
    },
  }

  function byteOffsetToElementId(byteOffset: number): string {
    return getMainViewport().id + byteOffset.toString()
  }

  function grab_action_element_refs() {
    for (const element in actionElements) {
      actionElements[element as Actions].HTMLRef = document.getElementById(
        actionElements[element as Actions].id
      ) as ActionElement['HTMLRef']
    }
  }
  function initialize_action_elements() {
    setup_action_element('input')
    // if ($editorActionsAllowed == EditActionRestrictions.OverwriteOnly) return

    setup_action_element('insert-before')
    setup_action_element('insert-after')
  }
  function apply_element_replacements(
    parent: HTMLElement,
    replacee: HTMLDivElement | HTMLInputElement,
    replacer: HTMLDivElement | HTMLInputElement
  ) {
    parent.replaceChild(replacer, replacee)
    // restorationFns.push(() => {
    //   parent.replaceChild(replacee, replacer)
    // })
  }
  function setup_action_element(element: Actions) {
    switch (element) {
      case 'input':
        const inputContainer = actionElements[element]
          .HTMLRef! as HTMLDivElement
        apply_element_replacements(
          selectedTarget.parent!,
          selectedTarget.element!,
          inputContainer
        )
        break

      case 'insert-before':
        {
          const previousByteId = byteOffsetToElementId(selectedByte - 1)
          const insertBeforeElement = actionElements[element]
            .HTMLRef as HTMLDivElement
          let elementToReplace = document.getElementById(
            previousByteId
          ) as HTMLDivElement

          if (!elementToReplace) {
            actionElements[element].render = false
            break
          }

          selectedTarget.parent!.contains(elementToReplace)
            ? apply_element_replacements(
                selectedTarget.parent!,
                elementToReplace,
                insertBeforeElement
              )
            : apply_element_replacements(
                elementToReplace.parentElement!,
                elementToReplace,
                insertBeforeElement
              )
        }
        break

      // case 'insert-after':
      //   {
      //     const nextByteId = byteOffsetToElementId(selectedByte + 1)
      //     const insertAfterElement = actionElements[element]
      //       .HTMLRef as HTMLDivElement

      //     let elementToReplace = document.getElementById(
      //       nextByteId
      //     ) as HTMLDivElement

      //     if (!elementToReplace) {
      //       actionElements[element].render = false
      //       break
      //     }

      //     selectedTarget.parent!.contains(elementToReplace)
      //       ? apply_element_replacements(
      //           selectedTarget.parent!,
      //           elementToReplace,
      //           insertAfterElement
      //         )
      //       : apply_element_replacements(
      //           elementToReplace.parentElement!,
      //           elementToReplace,
      //           insertAfterElement
      //         )
      //   }
      //   break
    }
  }
  let origByteDiv = $state<HTMLDivElement>()
  $effect(() => {
    if (active) {
      selectedTarget.element = document.getElementById(
        getCurrentByteSelection().getOffsets().start.src.toString()
      ) as HTMLDivElement
      if (selectedTarget.element)
        selectedTarget.parent = selectedTarget.element
          .parentElement as HTMLDivElement

      grab_action_element_refs()
      initialize_action_elements()
      actionElements['input'].HTMLRef?.focus()
    }
  })

  window.addEventListener('keydown', (key) => {
    if (key.code === 'Escape' && getCurrentByteSelection().isActive()) {
      getCurrentByteSelection().clear()

      const inputContainer = document.getElementById('actions-container')
      inputContainer?.appendChild(actionElements['input'].HTMLRef!)
      selectedTarget.parent?.removeChild(actionElements['input'].HTMLRef!)
      // apply_element_replacements(
      //   selectedTarget.parent!,
      //   actionElements['input'].HTMLRef!,
      //   selectedTarget.element!
      // )
    }
  })
</script>

<span
  id="actions-container"
  class="single-byte-edit-actions {active ? 'active' : 'inactive'}"
>
  <input class="insert" id={actionElements['input'].id} />
  <span class="delete" id={actionElements['delete'].id}></span>
  <div class="insert-before" id={actionElements['insert-before'].id}></div>
  <div class="insert-after" id={actionElements['insert-after'].id}></div>
</span>

<style lang="scss">
  @keyframes shake {
    0%,
    100% {
      translate: 0;
    }
    25% {
      translate: -3px;
    }
    75% {
      translate: 3px;
    }
  }
  input,
  div.insert-before,
  div.insert-after,
  div.delete {
    height: 20px;
    font-family: var(--monospace-font);
    font-weight: normal;
    text-align: center;
    border-radius: 5px;
    border-style: solid;
    border-width: 2px;
    border-color: var(--color-primary-dark);
    transition:
      border-color 0.25s,
      top 0.15s,
      left 0.15s,
      right 0.15s;
    outline: none;
  }
  input {
    padding: 0;
    background-color: var(--color-secondary-light);
    color: var(--color-secondary-darkest);
  }
  input::placeholder {
    font-size: 12px;
    font-style: normal;
  }
  input.invalid {
    border-color: crimson;
    animation: shake 0.15s 3;
  }
  input.inProgress {
    border-color: gold;
  }
  span.single-byte-edit-actions.inactive {
    z-index: -99;
    position: absolute;
    visibility: hidden;
  }
  span.single-byte-edit-actions.active {
    z-index: 2;
    visibility: visible;
  }
  div.insert-before,
  div.insert-after,
  div.delete {
    font-size: 20px;
    line-height: 1;
  }
  div.insert-before,
  div.insert-after {
    font-size: 20px;
    border-style: dashed;
    border-color: var(--color-secondary-mid);
    background-color: transparent;
  }
  div.insert-before:hover,
  div.insert-after:hover {
    color: var(--color-secondary-lightest);
    border-color: var(--color-secondary-light);
    cursor: pointer;
  }
  div.delete {
    position: absolute;
    background-color: crimson;
    border-style: solid;
    color: var(--color-secondary-lightest);
    transition: none;
  }
  div.delete:hover {
    border-color: var(--color-secondary-light);
    cursor: pointer;
  }
</style>
