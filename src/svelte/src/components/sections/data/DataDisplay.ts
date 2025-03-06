export type Byte = {
  offset: number
  value: number
}
export type LineData = {
  offset: string
  fileLine: number
  bytes: Array<Byte>
}
export class ViewportData {
  data = new Uint8Array(16)
  fileOffset = -1
  length = -1
  bytesLeft = -1
  capacity = this.data.length
  public update(newVP: ViewportData) {
    this.data = newVP.data.subarray()
    this.fileOffset = newVP.fileOffset
    this.length = newVP.length
    this.bytesLeft = newVP.bytesLeft
    this.capacity = newVP.capacity
  }
}

export function getLineFrom(viewport: ViewportData, start: number): LineData {
  const offset = '0x' + viewport.fileOffset.toString(16)
  const fileLine = (viewport.bytesLeft - viewport.fileOffset) % 16
  const bytes = getLineBytes(viewport.data.subarray(start, start + 16), start)
  return { offset, fileLine, bytes }
}
function getLineBytes(data: Uint8Array, offset: number): Array<Byte> {
  let ret = Array<Byte>(16)
  data.forEach((byte, index) => {
    ret[index] = { offset: offset + index, value: byte }
  })
  return ret
}
