export type DebugItem = {
  attribute: string
  value: any
}

export let DebugData = $state<DebugItem[]>([])
export let DebugItems = $state<Map<string, DebugItem>>(new Map())
export const getDebugItems = () => DebugItems
export function addToDebug(item: DebugItem) {
  // DebugData.push(item)
  DebugItems.set(item.attribute, item)
}
