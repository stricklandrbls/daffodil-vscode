import { RadixValues } from 'utilities'
import { Viewport, ViewportLineData } from '.'

export type ViewportDisplayType = 'physical' | 'logical'

export type ViewportDisplaySettings_t = {
  lineCount: number
  numLinesDisplayed: number
  bytesPerLine: number
}

export interface ViewportDisplayStrategy {
  generateByteDisplay(
    viewport: Viewport,
    settings: ViewportDisplaySettings_t
  ): Promise<ViewportLineData[]>
}
class RadixDisplayStrategy implements ViewportDisplayStrategy {
  private constructor(readonly radix: RadixValues) {}

  static HexDisplay = new RadixDisplayStrategy(16)
  static DecimalDisplay = new RadixDisplayStrategy(10)
  static OctalDisplay = new RadixDisplayStrategy(8)
  static BinaryDisplay = new RadixDisplayStrategy(2)

  generateByteDisplay(
    viewport: Viewport,
    settings: ViewportDisplaySettings_t
  ): Promise<ViewportLineData[]> {
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
}
export const RadixDisplays: {
  [radix in RadixValues]: ViewportDisplayStrategy
} = {
  16: RadixDisplayStrategy.HexDisplay,
  10: RadixDisplayStrategy.DecimalDisplay,
  8: RadixDisplayStrategy.OctalDisplay,
  2: RadixDisplayStrategy.BinaryDisplay,
}
export function totalBytesDisplayed(
  displaySettings: ViewportDisplaySettings_t
) {
  return displaySettings.lineCount * displaySettings.bytesPerLine
}
