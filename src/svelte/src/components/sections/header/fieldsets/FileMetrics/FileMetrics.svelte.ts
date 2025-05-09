import { ByteOrderMark } from 'utilities/data.svelte'

export type FileMetrics_t = {
  fileName: string
  type: string
  language: string
  diskFileSize: number
  computedFileSize: number
  changeCount: number
  undoCount: number
  byteOrderMark: ByteOrderMark
}
export const InitialMetrics: FileMetrics_t = {
  fileName: '',
  type: '',
  language: '',
  diskFileSize: 0,
  computedFileSize: 0,
  changeCount: 0,
  undoCount: 0,
  byteOrderMark: 'none',
}

/**
 * @brief Rune: File Metrics Data
 */
let FileMetricsState = $state(InitialMetrics)

export const setFileMetrics = (metrics: FileMetrics_t) =>
  (FileMetricsState = metrics)

export const getFileMetrics = () => FileMetricsState

export enum BinaryBytePrefixes {
  'B',
  'KB',
  'MB',
  'GB',
  'TB',
}
