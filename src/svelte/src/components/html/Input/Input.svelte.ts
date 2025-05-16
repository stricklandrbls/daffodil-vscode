export function handleFocus(event: FocusEvent) {}
export type InputTypes = 'search' | 'text' | 'checkbox'
export type OnEnterEvent = {
  id: string
  valueStr: string
  valueInt: number
}
export type InputProps = {
  type: InputTypes
  onInputEnter: (event: OnEnterEvent) => void
  id: string
  placeholder: string
  width?: string
  valueBind: any
}
