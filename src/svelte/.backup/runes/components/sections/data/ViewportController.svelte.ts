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
  lineIndexOfOffset,
} from '.'
import { getFileMetrics } from 'editor_components/header/fieldsets/FileMetrics'
import { vscode } from 'utilities/vscode'
import { MessageCommand } from 'utilities/message'

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
    if (viewport.shouldFetchContent(offset))
      vscode.postMessage({
        command: MessageCommand.scrollViewport,
        data: {
          scrollOffset: offset,
          bytesPerRow: viewport.getSettings().bytesPerLine,
          numLinesDisplayed: viewport.getSettings().numLinesDisplayed,
        },
      })
    else {
      viewport.getSettings().topLineIndex = lineIndexOfOffset(
        viewport.getBoundaries().lower,
        offset,
        viewport.getSettings().bytesPerLine
      )
    }
  }
  public static incrementViewport = (viewport: Viewport) => {}
}

export function getLastViewportOffset() {
  return getFileMetrics().computedFileSize - ViewportData.Capacity
}
