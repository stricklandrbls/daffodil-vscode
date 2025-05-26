import { Byte, Offset } from './ViewportData.svelte'
export type SelectionOffsets = {
  start: Offset
  end: {
    unedited: Offset
    edited: Offset
  }
}
const InitialSelectionOffsets: SelectionOffsets = {
  start: {
    viewport: -1,
    src: -1,
  },
  end: {
    unedited: {
      viewport: -1,
      src: -1,
    },
    edited: {
      viewport: -1,
      src: -1,
    },
  },
}

export type Actions = 'input' | 'insert-before' | 'insert-after' | 'delete'
export type ActionElementPosition = {
  viewportLine: number
  viewportByteIndex: number
}
export type ActionElement = {
  id: string
  position: ActionElementPosition
  HTMLRef?: HTMLDivElement | HTMLInputElement
  render: boolean
}
export type ActionElements = {
  [k in Actions]: ActionElement
}
export function selectionOffsetsToStr(offsets: SelectionOffsets) {
  const { start, end } = offsets
  let ret = {
    start: '',
    end: {
      unedited: '',
      edited: '',
    },
  }
  ret.start = `src: ${start.src}; vpi: ${start.viewport}`
  ret.end.edited = `src: ${end.edited.src}; vpi: ${end.edited.viewport}`
  ret.end.unedited = `src: ${end.unedited.src}; vpi: ${end.unedited.viewport}`

  return ret
}
export function areValid(offsets: SelectionOffsets): boolean {
  return (
    offsets.start.src >= 0 &&
    offsets.end.unedited.src > offsets.start.src &&
    offsets.end.edited.src >= 0 &&
    offsets.end.unedited.src >= 0
  )
}

export type EndOffsetType = keyof SelectionOffsets['end']

export function selectionLength<E extends EndOffsetType>(
  endType: E,
  offsets: SelectionOffsets
) {
  return offsets.end[endType].src - offsets.start.src
}

export function selectionLengthDelta(offsets: SelectionOffsets) {
  return offsets.end.edited.src - offsets.end.unedited.src
}

export function selectionRange(offsets: SelectionOffsets) {}
export class ByteSelectionData_t {
  private _offsets = $state<SelectionOffsets>(InitialSelectionOffsets)
  private _active = $state(false)
  private _selectionRange = $state<number[]>([])
  private _selectionType = $state<'single' | 'multi' | 'none'>('none')
  private _selectionInProgress = $state(false)

  public getOffsets = () => this._offsets
  public isActive = () => this._active
  public getSelectionType = () => this._selectionType
  public isSelectionInProgress = () => this._selectionInProgress

  public setSelected = (type: 'start' | 'end' | 'add', vpIndex: number) => {
    switch (type) {
      case 'start':
        this.clear()
        this._offsets.start.src = vpIndex
        this._selectionInProgress = true
        break
      case 'end':
        this._selectionInProgress = false
        this._active = true
      case 'add':
        this._offsets.end.unedited.src = vpIndex

        break
    }
    this._selectionRange = Array.from(
      {
        length: this._offsets.end.unedited.src - this._offsets.start.src + 1,
      },
      (_, i) => this._offsets.start.src + i
    )
    this._selectionType =
      this._offsets.start.src === this._offsets.end.unedited.src
        ? 'single'
        : 'multi'
  }
  public getSelectionRange = () => {
    return typeof this._selectionRange == 'object'
      ? Object.values(this._selectionRange)
      : this._selectionRange
  }
  public isIndexSelected = (vpi: number) => {
    if (!this._selectionRange) return false
    return this._selectionRange.includes(vpi)
  }
  public clear() {
    this._active = false
    this._selectionRange = []
    this._offsets = InitialSelectionOffsets
    this._selectionType = 'none'
  }
}

let CurrentSelectedByte = new ByteSelectionData_t()
export const getCurrentByteSelection = () => CurrentSelectedByte
