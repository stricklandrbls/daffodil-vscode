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

export class ViewportData {
  static Capacity = 128

  private _data = new Uint8Array(ViewportData.Capacity)
  private _srcStartOffset = -1
  private _srcBytesRemaining = -1

  public getSize() {
    return this._data.length
  }
  public getOffset() {
    return this._srcStartOffset
  }

  public getBytesRemaining() {
    return this._srcBytesRemaining
  }

  public update(viewport: ViewportMsg) {
    this._data = viewport.data
    this._srcStartOffset = viewport.srcOffset
    this._srcBytesRemaining = viewport.srcBytesRemaining
  }

  public getEndOffset() {
    return this._srcBytesRemaining > ViewportData.Capacity
      ? this._srcStartOffset + ViewportData.Capacity
      : this._srcBytesRemaining
  }

  public at(index: number): number {
    return this._data[index]
  }

  public byteAt(index: number): Byte {
    const localOffset = index
    const srcOffset = this._srcStartOffset + localOffset
    const offsets: Offset = { viewport: localOffset, src: srcOffset }
    const value =
      localOffset > this._srcBytesRemaining - this._srcStartOffset
        ? -1
        : this._data[localOffset]
    return {
      offsets,
      value,
    }
  }

  public hasData() {
    return this._srcStartOffset > -1
  }

  public isValidByte(byte: Byte) {
    if (byte.offsets.src > this._srcBytesRemaining - this._srcStartOffset)
      return false
    return true
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

  public isFetchable() {}
}

export function determineEndOffset(data: ViewportData) {}
