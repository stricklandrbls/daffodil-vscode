export type FileMetricsData = {
  fileName: string
  type: string
  language: string
  diskFileSize: number
  computedSize: number
  changeCount: number
  undoCount: number
}

export enum BinaryBytePrefixes {
  'B',
  'KB',
  'MB',
  'GB',
  'TB',
}
export function humanReadableByteLength(byteLength: number): string {
  let ret = byteLength.toLocaleString('en')
  let byteStrLen = ret.length
  if (byteStrLen <= 3) ret += BinaryBytePrefixes[0]
  else {
    const octets = ret.split(',')

    ret =
      octets[0] +
      '.' +
      octets[1].substring(0, 1) +
      BinaryBytePrefixes[octets.length - 1]
  }

  return ret
}
