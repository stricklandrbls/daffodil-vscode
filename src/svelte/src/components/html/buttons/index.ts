import type { Snippet } from 'svelte'

export interface ButtonProps {
  clickCallback: (event?: Event) => void
  disabled?: boolean
  width?: string
  fixedWidth?: string
  description?: string
  tooltipAlwaysEnabled?: boolean
  children?: {
    left?: Snippet
    right?: Snippet
  }
}
type Icon = 'start' | 'my_location'

const Icons: { [k in Icon]: k } = {
  start: 'start',
  my_location: 'my_location',
}

export type IconButtonProps = {
  icon: Icon
  text: string
}
