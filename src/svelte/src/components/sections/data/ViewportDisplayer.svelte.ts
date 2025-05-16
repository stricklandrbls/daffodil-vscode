import { RadixValues } from 'utilities'
import { Byte, ViewportData } from '.'

export type ViewportDisplayType = 'physical' | 'logical'
export interface DisplayByte extends Byte {
  str: string
  isSelected: boolean
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
export type DisplayGeneratorFn = (
  viewportData: ViewportData,
  settings: ViewportWindowSettings_t
) => Promise<ViewportLineData[]>
const DisplayGenerators: { [type in ViewportDisplayType]: DisplayGeneratorFn } =
  {
    physical: function (
      viewportData: ViewportData,
      settings: ViewportWindowSettings_t
    ): Promise<ViewportLineData[]> {
      throw new Error('Function not implemented.')
    },
    logical: function (
      viewportData: ViewportData,
      settings: ViewportWindowSettings_t
    ): Promise<ViewportLineData[]> {
      throw new Error('Function not implemented.')
    },
  }
function byteDisplayGenerator<T extends ViewportDisplayType>(
  type: T
): Promise<ViewportLineData[]> {
  return new Promise((res, rej) => {})
}
const RadixDisplayStrPads: {
  [radix in RadixValues]: { maxLength: number; fillString: string }
} = {
  16: {
    maxLength: 2,
    fillString: '0',
  },
  10: {
    maxLength: 3,
    fillString: ' ',
  },
  8: {
    maxLength: 3,
    fillString: '0',
  },
  2: {
    maxLength: 8,
    fillString: '0',
  },
}
class RadixDisplayStrategy implements ViewportDisplayStrategy {
  private constructor(
    readonly radix: RadixValues,
    readonly padding = RadixDisplayStrPads[radix]
  ) {}
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
      const displayToLineIndex =
        settings.numLinesDisplayed + settings.topLineIndex
      for (let l = settings.topLineIndex; l < displayToLineIndex; l++) {
        currentLineOffset = l * settings.bytesPerLine
        for (let b = 0; b < settings.bytesPerLine; b++) {
          currentByte = viewport.byteAt(currentLineOffset + b)
          currentLineData.push({
            ...currentByte,
            str: currentByte.value
              .toString(this.radix)
              .padStart(this.padding.maxLength, this.padding.fillString),
            isSelected: false,
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
export function latin1Undefined(charCode: number): boolean {
  return charCode < 32 || (charCode > 126 && charCode < 160)
}
class LogicalDisplayStrategy implements ViewportDisplayStrategy {
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
      const displayToLineIndex =
        settings.numLinesDisplayed + settings.topLineIndex
      for (let l = settings.topLineIndex; l < displayToLineIndex; l++) {
        currentLineOffset = l * settings.bytesPerLine
        for (let b = 0; b < settings.bytesPerLine; b++) {
          currentByte = viewport.byteAt(currentLineOffset + b)
          currentLineData.push({
            ...currentByte,
            str: latin1Undefined(currentByte.value)
              ? ''
              : String.fromCharCode(currentByte.value),
            isSelected: false,
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
export const LogicalDisplay = new LogicalDisplayStrategy()
export function totalBytesDisplayed(displaySettings: ViewportWindowSettings_t) {
  return displaySettings.lineCount * displaySettings.bytesPerLine
}
