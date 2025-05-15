import { getDataDisplaySettings } from 'utilities'
import {
  Byte,
  getMainViewportSettings,
  Viewport,
  ViewportData,
  ViewportDisplayContent,
  ViewportLineData,
  totalBytesDisplayed,
  ViewportWindowSettings_t,
} from '.'
import { getFileMetrics } from 'editor_components/header/fieldsets/FileMetrics'

export type ViewportFetchBoundaries = {
  lower: number
  upper: number
}
export function getBoundaries(
  viewportLength: number,
  viewportSrcOffset: number,
  displaySettings: ViewportWindowSettings_t
) {
  const bytesDisplayCount = totalBytesDisplayed(displaySettings)
  const upper =
    viewportLength > bytesDisplayCount
      ? viewportSrcOffset + viewportLength - bytesDisplayCount
      : viewportLength
  return {
    lower: viewportSrcOffset,
    upper,
  }
}
export class ViewportController {
  static NullByteStr = 'NULL'
  static DisplayConfig = getDataDisplaySettings()
  static CurrentSrcOffset = 0

  public static getStartOffset = () => this.CurrentSrcOffset
  public static seekViewport = (viewport: Viewport, offset: number) => {}
  public static incrementViewport = (viewport: Viewport) => {}
}

export function getLastViewportOffset() {
  return getFileMetrics().computedFileSize - ViewportData.Capacity
}
