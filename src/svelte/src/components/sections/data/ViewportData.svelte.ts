import { RadixDisplays, totalBytesDisplayed, ViewportWindowSettings_t } from '.'
import {
  getBoundaries,
  ViewportController,
  ViewportFetchBoundaries,
} from './ViewportController.svelte'

export type Offset = {
  viewport: number
  src: number
}
export type ViewportOffsets = {
  start: Offset
  end: Offset
}

export interface Byte {
  offsets: Offset
  value: number
}

export type ViewportMsg = {
  data: Uint8Array
  srcOffset: number
  srcBytesRemaining: number
}

export type ViewportDisplayContent = { [line: number]: Byte[] }

export interface ViewportDataState {
  readonly State: string
  getData(): Uint8Array | undefined
  update(msg: ViewportMsg): ViewportDataState
  at(index: number): number
  byteAt(index: number): Byte
  getOffsets(): { start: number; end: number }
  getBytesRemaining(): number
}
const InitialViewportState: ViewportDataState = {
  State: 'INIT',
  update: function (msg: ViewportMsg): ViewportDataState {
    return new ValidViewportState(
      msg.data,
      msg.srcOffset,
      msg.srcBytesRemaining
    )
  },
  at: function (index: number): number {
    throw new Error('Function not implemented.')
  },
  byteAt: function (index: number): Byte {
    throw new Error('Function not implemented.')
  },
  getData: function (): Uint8Array | undefined {
    throw new Error('Function not implemented.')
  },
  getOffsets: function (): { start: number; end: number } {
    throw new Error('Function not implemented.')
  },
  getBytesRemaining: function (): number {
    throw new Error('Function not implemented.')
  },
}
class ValidViewportState implements ViewportDataState {
  private _data = $state<Uint8Array>()
  constructor(
    data: Uint8Array,
    private _srcOffset: number,
    private _srcBytesRemaining: number
  ) {
    this._data = Uint8Array.from(data)
  }
  getBytesRemaining(): number {
    return this._srcBytesRemaining
  }
  State = 'VALID'
  update(msg: ViewportMsg): ViewportDataState {
    this._data = msg.data
    return this
  }
  getOffsets(): { start: number; end: number } {
    return {
      start: this._srcOffset,
      end:
        this._srcBytesRemaining > ViewportData.Capacity
          ? this._srcOffset + ViewportData.Capacity
          : this._srcBytesRemaining,
    }
  }
  getData(): Uint8Array {
    return this._data!
  }
  at(index: number): number {
    return this._data![index]
  }
  byteAt(index: number): Byte {
    const localOffset = index
    const srcOffset = this._srcOffset + localOffset
    const offsets: Offset = { viewport: localOffset, src: srcOffset }
    const value =
      localOffset > this._srcBytesRemaining - this._srcOffset
        ? -1
        : this._data![localOffset]
    return {
      offsets,
      value,
    }
  }
}
export class ViewportData {
  static Capacity = 128

  private _state = $state<ViewportDataState>(InitialViewportState)

  public getSize() {
    return this._state.getData()?.length
  }
  public getOffsets() {
    return this._state.getOffsets()
  }

  public getBytesRemaining() {
    return this._state.getBytesRemaining()
  }

  public update(viewport: ViewportMsg) {
    this._state = this._state.update(viewport)
  }

  public at(index: number): number {
    return this._state.at(index)
  }

  public byteAt(index: number): Byte {
    return this._state.byteAt(index)
  }

  public isValid() {
    return this._state.State === 'VALID'
  }
}

export class Viewport {
  protected static activeViewportCount = 0
  public readonly id: string = ''

  constructor(id?: string) {
    this.id = id ? id : 'vp' + Viewport.activeViewportCount.toString()
    Viewport.activeViewportCount++
  }

  private _data = $state<ViewportData>(new ViewportData())

  private _displaySettings = $state<ViewportWindowSettings_t>({
    lineCount: 32,
    topLineIndex: 0,
    numLinesDisplayed: 16,
    bytesPerLine: 16,
  })

  private _boundaries = $state<ViewportFetchBoundaries>({
    lower: -1,
    upper: -1,
  })

  public getBoundaries = () => this._boundaries

  public updateViewportFromMsg(msg: ViewportMsg) {
    this._data.update(msg)
    const dataOffsets = this._data.getOffsets()
    const dataSize = this._data.getSize()!

    this._boundaries.lower = dataOffsets.start

    const byteDisplayCount =
      this._displaySettings.numLinesDisplayed *
      this._displaySettings.bytesPerLine
    const upper =
      dataSize > byteDisplayCount
        ? dataOffsets.start + dataSize - byteDisplayCount
        : dataSize

    this._boundaries.upper = upper!
  }

  public getData() {
    return this._data
  }

  public getByteAt(index: number) {
    return this._data.byteAt(index)
  }

  public getSettings() {
    return this._displaySettings
  }

  public isFetchableAt(offset: number) {
    return offset > this._boundaries.lower
      ? this._data.getBytesRemaining() > 0
      : this._boundaries.lower > 0
  }
}

export function determineEndOffset(data: ViewportData) {}
