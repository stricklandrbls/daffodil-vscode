export type Radixes = 'Hexadecimal' | 'Decimal' | 'Octal' | 'Binary'

export type RadixValues = 16 | 10 | 8 | 2

export type BytesPerRow = 16 | 8 | 24

export enum EditByteModes {
  Single = 'single',
  Multiple = 'multiple',
}

export function encodedStrToData(
  selectionEdits: string,
  selectionEncoding?: BufferEncoding
): Buffer {
  let selectionByteData: Buffer
  switch (selectionEncoding) {
    case 'hex':
      selectionByteData = Buffer.alloc(selectionEdits.length / 2)
      for (let i = 0; i < selectionEdits.length; i += 2) {
        selectionByteData[i / 2] = parseInt(selectionEdits.slice(i, i + 2), 16)
      }
      return selectionByteData
    case 'binary':
      selectionByteData = Buffer.alloc(selectionEdits.length / 8)
      for (let i = 0; i < selectionEdits.length; i += 8) {
        selectionByteData[i / 8] = parseInt(selectionEdits.slice(i, i + 8), 2)
      }
      return selectionByteData
    default:
      return Buffer.from(selectionEdits, selectionEncoding)
  }
}

export function dataToEncodedStr(
  buffer: Buffer,
  encoding: BufferEncoding
): string {
  return encoding === 'binary'
    ? dataToRadixStr(buffer, 2)
    : buffer.toString(encoding)
}
export function dataToRadixStr(buffer: Buffer, radix: number): string {
  const padLen = radixBytePad(radix)
  let ret = ''
  for (let i = 0; i < buffer.byteLength; i++) {
    ret += buffer[i].toString(radix).padStart(padLen, '0')
  }
  return ret
}

export function radixBytePad(radix: number): number {
  switch (radix) {
    case 2:
      return 8
    case 8:
      return 3
    case 10:
      return 3
    case 16:
      return 2
  }
  return 0
}
