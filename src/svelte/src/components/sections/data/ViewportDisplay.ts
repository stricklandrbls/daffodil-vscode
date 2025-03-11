import { Byte, ViewportData } from './DataDisplay'

export type ByteRadix = 2 | 8 | 10 | 16
export const ByteRadixPrefix: { [K in ByteRadix]: string } = {
  2: '0b',
  8: '0o',
  10: '0d',
  16: '0x',
}
export const ByteRadixStr: { [K in ByteRadix]: string } = {
  2: 'bin',
  8: 'oct',
  10: 'dec',
  16: 'hex',
}
export const ByteRadixLen: { [K in ByteRadix]: number } = {
  2: 8,
  8: 2,
  10: 3,
  16: 2,
}
export type ByteRadixDisplay = (...bytes: number[]) => string[]
export const ByteRadixDisplays: { [K in ByteRadix]: ByteRadixDisplay } = {
  2: function (...bytes: number[]): string[] {
    return displayBytes(2, ...bytes)
  },
  8: function (...bytes: number[]): string[] {
    return displayBytes(8, ...bytes)
  },
  10: function (...bytes: number[]): string[] {
    return displayBytes(10, ...bytes)
  },
  16: function (...bytes: number[]): string[] {
    return displayBytes(16, ...bytes)
  },
}

export interface ViewportDisplayConfig {
  byteDisplay: ByteRadixDisplay
  readonly bytesPerLine: number
  readonly lineCount: number
}
/**
 * ## `createViewportConfig`
 * Creates a viewport config object from input parameters or a default config for no parameters
 * @todo Implement bounds checking on numerical config items
 * @param items Config items to set
 * @returns
 */
export function createViewportConfig(items?: {
  [k in keyof ViewportDisplayConfig]?: ViewportDisplayConfig[k]
}): ViewportDisplayConfig {
  if (items) {
    return {
      byteDisplay: items.byteDisplay
        ? items.byteDisplay
        : ByteRadixDisplays['16'],
      bytesPerLine: items.bytesPerLine ? items.bytesPerLine : 16,
      lineCount: items.lineCount ? items.lineCount : 16,
    }
  }
  return {
    byteDisplay: ByteRadixDisplays['16'],
    bytesPerLine: 16,
    lineCount: 16,
  }
}
export function prependRadixStr(
  radix: ByteRadix,
  value: string | number
): string {
  const ret = typeof value === 'string' ? value : value.toString(radix)
  let prefix = ByteRadixPrefix[radix]
  if (ret.length < ByteRadixLen[radix]) {
    Array.from(Array(ByteRadixLen[radix])).forEach((_, n) => {
      if (n < ByteRadixLen[radix] - ret.length) prefix += '0'
    })
  }
  return prefix + ret
}

export interface Radix {
  toString: (byte: number) => string
}
export function displayBytes(radix: ByteRadix, ...bytes: number[]): string[] {
  let ret: string[] = []
  bytes.forEach((b) => {
    ret.push(prependRadixStr(radix, b.toString(radix)))
  })
  return ret
}
export interface ByteDisplay extends Byte {
  str: string
}
export type ViewportDisplayContent = { [line: number]: Byte[] }
export class ViewportDisplay {
  static NullByte = 'NULL'
  readonly content: ViewportDisplayContent = {}
  constructor(
    readonly viewportRef: ViewportData,
    readonly config: ViewportDisplayConfig
  ) {}
  public get() {
    // Create Line
    let lineBytes: Byte[] = []
    let lineIndex = 0
    // Create total content as lines of byte data
    for (let l = lineIndex; l < this.config.lineCount; l++) {
      let lineOffset = l * this.config.bytesPerLine
      for (let i = 0; i < this.config.bytesPerLine; i++) {
        const byte = this.viewportRef.byteAt(lineOffset + i)
        const str = this.config.byteDisplay(byte.value)[0]
        lineBytes.push({
          ...this.viewportRef.byteAt(lineOffset + i),
        })
      }
      this.content[l] = lineBytes

      lineBytes = []
    }
    return this.content
  }

  //   private __initializeContent(){
  //     for(let l = 0; l < this.config.lineCount; l++)
  //         this.content[]
  //   }
}
