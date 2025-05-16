import { Byte, Offset } from './ViewportData.svelte'
export type SelectionOffsets = {
  start: Offset
  end: {
    unedited: Offset
    edited: Offset
  }
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

export class ByteSelectionData_t {
  private _offsets = $state<SelectionOffsets>({
    start: {
      viewport: 0,
      src: 0,
    },
    end: {
      unedited: {
        viewport: 0,
        src: 0,
      },
      edited: {
        viewport: 0,
        src: 0,
      },
    },
  })
  private _active = $state(false)

  public getOffsets = () => this._offsets
  public isActive = () => this._active

  public setSelected = (
    vpStartIndex: number,
    vpEndIndex: number = vpStartIndex
  ) => {
    this._offsets.start.viewport = vpStartIndex
    this._offsets.end.unedited.viewport = vpEndIndex
  }
}

let CurrentSelectedByte = new ByteSelectionData_t()
export const getCurrentByteSelection = () => CurrentSelectedByte
