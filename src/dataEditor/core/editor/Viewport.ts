export class DataEditorViewport {
  static capacity: number = 1024
  private srcOffset: number = -1
  private length = -1
  private bytesRemaining = -1
  private data: Uint8Array | undefined = undefined

  constructor(readonly id: string) {}
  updateData(data: Uint8Array): void {
    this.data = data
  }
  setViewport(
    offset: number,
    length: number,
    bytesRemaining: number,
    data: Uint8Array
  ): void {
    this.srcOffset = offset
    this.length = length
    this.bytesRemaining = bytesRemaining
    this.data = data
  }
  isValid() {
    if (this.data === undefined) return false
  }
  requiresFetchAt(offset: number) {
    return offset > this.srcOffset + this.length || offset < this.srcOffset
  }
  toObject() {
    return {
      srcOffset: this.srcOffset,
      length: this.length,
      bytesRemaining: this.bytesRemaining,
      data: this.data!,
      capacity: DataEditorViewport.capacity,
    }
  }
}
