import type { Snippet } from 'svelte'

export interface ButtonProps {
  clickCallback: (event?: Event) => void
  disabled?: boolean
  width?: string
  fixedWidth?: string
  description?: string
  tooltipAlwaysEnabled?: boolean
  children: any
}
type Icon = 'start' | 'my_location'

const Icons: { [k in Icon]: k } = {
  start: 'start',
  my_location: 'my_location',
}

export type IconButtonProps = {
  clickCallback: (event?: Event) => void
  icon: Icon
  text: string
}
