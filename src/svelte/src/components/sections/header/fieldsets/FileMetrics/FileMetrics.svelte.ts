export type FileMetrics_t = {
  fileName: string
  type: string
  language: string
  diskFileSize: number
  computedSize: number
  changeCount: number
  undoCount: number
}
export const FileMetricsData = $state<FileMetrics_t>({
  fileName: '',
  type: '',
  language: '',
  diskFileSize: 0,
  computedSize: 0,
  changeCount: 0,
  undoCount: 0,
})
export enum BinaryBytePrefixes {
  'B',
  'KB',
  'MB',
  'GB',
  'TB',
}
export function humanReadableByteLength(byteLength: number): string {
  let ret = byteLength.toString()
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
