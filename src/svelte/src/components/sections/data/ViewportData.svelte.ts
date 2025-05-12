import { data } from 'xdg-app-paths'
import { getDataDisplaySettings } from 'utilities'

export interface Byte {
  offsets: Offset
  value: number
}
export type ViewportDisplayContent = {
  [line: number]: Byte[]
}
export type ViewportLineData = {
  srcOffset: number
  data: Byte[]
}
export type ViewportDisplayContentIterable = {}
export type ViewportMsg = {
  data: Uint8Array
  srcOffset: number
  srcBytesRemaining: number
}
export type Offset = {
  viewport: number
  src: number
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
  public getOffset() {
    return this._srcOffset
  }
}

export class Viewport {
  private _data = $state<ViewportData>(new ViewportData())
  private _display = $state<ViewportDisplayContent>()
  private _idisplay: ViewportLineData[] = []
  private _settings = $state<ViewportDisplaySettings_t>({
    lineCount: 32,
    numLinesDisplayed: 16,
    bytesPerLine: 16,
  })
  private _topLine = $state(0)

  public updateViewportFromMsg(msg: ViewportMsg) {
    this._data.update(msg)
  }
  public updateDisplayContent(
    content: ViewportDisplayContent,
    icontent: ViewportLineData[]
  ) {
    this._display = content
    this._idisplay = icontent
  }
  public getDisplayContent() {
    return this._display
  }
  public getIterableDisplayContent(): Promise<ViewportLineData[]> {
    return new Promise((res) => {
      let ret: ViewportLineData[] = []
      for (let l = this._topLine; l < this._settings.numLinesDisplayed; l++) {
        ret.push({
          srcOffset: this._display![l][0].offsets.src,
          data: this._display![l],
        })
      }
      res(ret)
    })
  }
  public getData() {
    return this._data
  }
  public getByteRange(start: number, end: number) {}
  public getByteAt(index: number) {
    return this._data.byteAt(index)
  }
  public getSettings() {
    return this._settings
  }
}
export type ViewportDisplaySettings_t = {
  lineCount: number
  numLinesDisplayed: number
  bytesPerLine: number
}

export class ViewportDisplayController {
  static NullByteStr = 'NULL'
  static DisplayConfig = getDataDisplaySettings()

  /**
   * Generates a `ViewportDisplayContent` object which contains `L` amount of lines that hold `B` amount of bytes.
   * Indexes within the object only represent their location within in object's data.
   *
   * These indexes will need to be converted to the their respective location within the Viewport's source.
   * @param viewport
   */
  public static generateByteDisplay(viewport: Viewport) {
    let ret: ViewportDisplayContent = {}
    let iret: ViewportLineData[] = []

    let currentLineIndex = 0
    let lineOffset = 0
    let currentLineBytes: Byte[] = []

    for (let l = currentLineIndex; l < viewport.getSettings().lineCount; l++) {
      lineOffset = l * viewport.getSettings().bytesPerLine

      for (let b = 0; b < viewport.getSettings().bytesPerLine; b++) {
        const byte = viewport.getByteAt(lineOffset + b)
        currentLineBytes.push(byte)
      }
      // l = [0:32]
      // Needs to be externally converted by viewport's offset to display location in source.
      //   ie. ret[l]; l = 0; vp source start = 234
      //       display[0].offset = 234
      ret[l] = currentLineBytes
      iret.push({
        srcOffset: currentLineBytes[0].offsets.src,
        data: currentLineBytes,
      })

      currentLineBytes = []
    }

    viewport.updateDisplayContent(ret, iret)
  }
}

export function ViewportLineData(
  viewport: Viewport,
  content: ViewportDisplayContent
) {}
