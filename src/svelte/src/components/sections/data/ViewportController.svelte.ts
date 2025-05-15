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
import { vscode } from 'utilities/vscode'
import { MessageCommand } from 'utilities/message'

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

  public static seekViewport = (viewport: Viewport, offset: number) => {
    if (viewport.isFetchableAt(offset))
      vscode.postMessage({
        command: MessageCommand.scrollViewport,
        data: {
          scrollOffset: offset,
          bytesPerRow: viewport.getSettings().bytesPerLine,
          numLinesDisplayed: viewport.getSettings().numLinesDisplayed,
        },
      })
    else console.log(`Offset ${offset} is NOT fetchable`)
  }
  public static incrementViewport = (viewport: Viewport) => {}
}

export function getLastViewportOffset() {
  return getFileMetrics().computedFileSize - ViewportData.Capacity
}
