import { getContext, setContext } from 'svelte'

export interface DebugVariable {
  id: string
  valueStr: () => string
}

/**
 * #### Svelte Runes Set / Get
 * Svelte Runes that are defined and initialized in a `.svelte.ts` file and imported into a `.svelte` component
 * file are **not modifiable** through the component.
 *
 * The reactive variables must be wrapped in an object-type in order to allow for manipulation of content.
 * For example, the following would emit an error when attempting to set `filename` to another value.
 * ```ts
 * export let filename = $state<string>('')
 * ```
 */
export const fileinfo = $state({ filename: '' })
let filename = $state('')
export const setFilename = (name: string) => (filename = name)
export const getFilename = () => filename

/**
 * #### Complex Runes as Properties
 *
 * Attempting to set a value within a complex object from a rune will not provide reactivity when mutating the
 * rune that provides reactivity for a value.
 *
 * In order to gain reactivity for variables like this, the complex object must be mutated OR the rune value within the
 * complex object must instead be a function which returns the rune
 *
 * **Example**
 * `debugVars` uses the `fileinfo` object's `filename` rune as a value but is not reactive to mutations of the `fileinfo` object.
 * Resolving this can be done by using a rune 'getter':
 * ```ts
 *  export const debugVars_ValFromFunc = $state({
 *    vars: [{ id: 'filename', value: () => fileinfo.filename }],
 *   })
 * ```
 * Or by mutating the object's property directly
 * ```ts
 *  debugVars_ValFromRune.vars[0].value = `some value`
 * ```
 */

export const debugVars = $state<DebugVariable[]>([])
export const addVarToDebug = (...vars: DebugVariable[]) => {
  debugVars.push(...vars)
}

export function setDebugVarContext() {
  setContext('debug-vars', { add: addVarToDebug })
}
export type DebugVarsContextType = {
  add: typeof addVarToDebug
}
export function getDebugVarContext() {
  return getContext('debug-vars') as DebugVarsContextType
}
