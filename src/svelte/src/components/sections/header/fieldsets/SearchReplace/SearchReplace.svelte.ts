import { getMainViewport } from 'editor_components/data'
import { Error, ErrorComponentType } from 'HTMLWrappers/error'
import { getDataDisplaySettings } from 'utilities'

export const searchErr = new Error(ErrorComponentType.SYMBOL)
export const seekErr = new Error(ErrorComponentType.SYMBOL)

export interface SeekOffsetValidator {
  validate(
    offset: number | string,
    valid: (offset: number) => any,
    invalid: (err: string) => any
  ): any
}

export function validateSeekOffset<
  P extends Parameters<SeekOffsetValidator['validate']>,
>(...params: P) {
  const offset = typeof params[0] === 'string' ? parseInt(params[0]) : params[0]

  const valid = params[1]
  const invalid = params[2]

  if (offset < 0) {
    invalid('Invalid Seek Offset: Offset < 0')
    return
  }
  if (Number.isNaN(offset)) {
    invalid('Invalid Seek Offset: NaN Offset Value')
    return
  }
  const vp = getMainViewport()
  if (offset > vp.getData().getBytesRemaining() + vp.getBoundaries().lower) {
    invalid('Invalid Offset: Exceeds Source EOF')
    return
  }
  valid(offset)
}

let seekOffsetInput = $state('')
let seekOffsetValue = $state(-1)
export const getSeekToInput = () => seekOffsetInput
export const getSeekToValue = () => seekOffsetValue
export const setSeekToValue = (offset: number) => (seekOffsetValue = offset)

export const setSeekToInput = (offset: string) => {
  const offsetStrValue = parseInt(offset)
  seekOffsetInput = offsetStrValue.toString(getDataDisplaySettings().dataRadix)
}

export function ifSeekValid(callback: (seekToOffset: number) => any) {
  if (searchErr.hasErrored()) return
  callback(seekOffsetValue)
}

let searchOffsetInput = $state('')
let searchOffsetValue = $state(-1)
export const getSearchToInput = () => searchOffsetInput
export const getSearchToValue = () => searchOffsetValue
