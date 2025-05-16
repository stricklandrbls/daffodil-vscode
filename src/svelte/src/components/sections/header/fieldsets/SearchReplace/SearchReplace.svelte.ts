import { getDataDisplaySettings } from 'utilities'

let seekOffsetInput = $state('')
let seekOffsetValue = $state(-1)
export const getSeekToInput = () => seekOffsetInput
export const getSeekToValue = () => seekOffsetValue
export const setSeekToInput = (offset: string) => {
  const offsetStrValue = parseInt(offset)
  seekOffsetInput = offsetStrValue.toString(getDataDisplaySettings().dataRadix)
  seekOffsetValue = offsetStrValue
}

export function seekTo(offset: number) {}
