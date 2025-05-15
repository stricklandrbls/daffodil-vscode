import { RadixValues } from 'utilities'
import { Byte, ViewportData } from '.'

export type ViewportDisplayType = 'physical' | 'logical'
export interface DisplayByte extends Byte {
  str: string
}
export type ViewportLineData = {
  srcOffset: number
  data: DisplayByte[]
}
export interface ViewportDisplayStrategy {
  generateByteDisplay(
    viewport: ViewportData,
    settings: ViewportWindowSettings_t
  ): Promise<ViewportLineData[]>
}

export type ViewportWindowSettings_t = {
  lineCount: number
  topLineIndex: number
  numLinesDisplayed: number
  bytesPerLine: number
}

class RadixDisplayStrategy implements ViewportDisplayStrategy {
  private constructor(readonly radix: RadixValues) {}

  static HexDisplay = new RadixDisplayStrategy(16)
  static DecimalDisplay = new RadixDisplayStrategy(10)
  static OctalDisplay = new RadixDisplayStrategy(8)
  static BinaryDisplay = new RadixDisplayStrategy(2)

  generateByteDisplay(
    viewport: ViewportData,
    settings: ViewportWindowSettings_t
  ): Promise<ViewportLineData[]> {
    return new Promise((res, rej) => {
      if (!viewport.isValid()) rej()
      let ret: ViewportLineData[] = []
      let currentLineOffset = 0
      let currentLineData: DisplayByte[] = []
      let currentByte: Byte = {
        offsets: {
          viewport: 0,
          src: 0,
        },
        value: 0,
      }

      for (let l = settings.topLineIndex; l < settings.numLinesDisplayed; l++) {
        currentLineOffset = l * settings.bytesPerLine
        for (let b = 0; b < settings.bytesPerLine; b++) {
          currentByte = viewport.byteAt(currentLineOffset + b)
          currentLineData.push({
            ...currentByte,
            str: currentByte.value.toString(this.radix),
          })
        }
        ret.push({
          srcOffset: currentLineData[0].offsets.src,
          data: currentLineData,
        })
        currentLineData = []
      }
      res(ret)
    })
  }
}

export const RadixDisplays: {
  [radix in RadixValues]: RadixDisplayStrategy
} = {
  16: RadixDisplayStrategy.HexDisplay,
  10: RadixDisplayStrategy.DecimalDisplay,
  8: RadixDisplayStrategy.OctalDisplay,
  2: RadixDisplayStrategy.BinaryDisplay,
}

export function totalBytesDisplayed(displaySettings: ViewportWindowSettings_t) {
  return displaySettings.lineCount * displaySettings.bytesPerLine
}
