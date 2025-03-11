export type Offset = {
  viewport: number
  src: number
}
export interface Byte {
  offsets: Offset
  value: number
}
export type LineData = {
  offset: string
  fileLine: number
  bytes: Array<Byte>
}
export type ViewportMsg = {
  data: Uint8Array
  srcOffset: number
  srcBytesRemaining: number
}
export interface Viewport {
  readonly data: Uint8Array
  readonly length: number
  readonly srcOffset: number
  readonly srcBytesRemaining: number
}
export function getViewportFromMsg(msg: ViewportMsg): Viewport {
  return {
    data: msg.data,
    srcBytesRemaining: msg.srcBytesRemaining,
    length: msg.data.length,
    srcOffset: msg.srcOffset,
  }
}
export class ViewportData {
  static Capacity = 128

  private _data = new Uint8Array(ViewportData.Capacity)
  private _srcOffset = -1
  private _srcBytesRemaining = -1
  public update(viewport: ViewportMsg) {
    this._data = viewport.data
    this._srcOffset = viewport.srcOffset
    this._srcBytesRemaining = viewport.srcBytesRemaining
  }
  public at(index: number): number {
    return this._data[index]
  }
  public byteAt(index: number): Byte {
    const localOffset = index
    const srcOffset = this._srcOffset + localOffset
    const offsets: Offset = { viewport: localOffset, src: srcOffset }
    const value =
      localOffset > this._srcBytesRemaining - this._srcOffset
        ? -1
        : this._data[localOffset]
    return {
      offsets,
      value,
    }
  }
  public hasData() {
    return this._srcOffset > -1
  }
  public isValidByte(byte: Byte) {
    if (byte.offsets.src > this._srcBytesRemaining - this._srcOffset)
      return false
    return true
  }
}

// export function getLineFrom(viewport: ViewportData, start: number): LineData {
//   const offset = '0x' + viewport.fileOffset.toString(16)
//   const fileLine = (viewport.bytesLeft - viewport.fileOffset) % 16
//   const bytes = getLineBytes(viewport.data.subarray(start, start + 16), start)
//   return { offset, fileLine, bytes }
// }
// function getLineBytes(data: Uint8Array, offset: number): Array<Byte> {
//   let ret = Array<Byte>(16)
//   data.forEach((byte, index) => {
//     ret[index] = { offsets: offset + index, value: byte }
//   })
//   return ret
// }
