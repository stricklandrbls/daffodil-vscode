import { getDataDisplaySettings } from 'utilities'
import {
  Byte,
  getMainViewportSettings,
  Viewport,
  ViewportData,
  ViewportDisplayContent,
  ViewportLineData,
  totalBytesDisplayed,
  ViewportDisplaySettings_t,
} from '.'
import { getFileMetrics } from 'editor_components/header/fieldsets/FileMetrics'

export type ViewportFetchBoundaries = {
  lower: number
  upper: number
}
export function getBoundaries(
  viewportLength: number,
  viewportSrcOffset: number,
  displaySettings: ViewportDisplaySettings_t
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
  /**
   * Generates a `ViewportDisplayContent` object which contains `L` amount of lines that hold `B` amount of bytes.
   * Indexes within the object only represent their location within in object's data.
   *
   * These indexes will need to be converted to the their respective location within the Viewport's source.
   * @param viewport
   */
  public static generateByteDisplay(viewport: Viewport) {
    let ret: ViewportDisplayContent = {}
    let iret: ViewportLineData[] = []

    let currentLineIndex = 0
    let lineOffset = 0
    let currentLineBytes: Byte[] = []

    for (let l = currentLineIndex; l < viewport.getSettings().lineCount; l++) {
      lineOffset = l * viewport.getSettings().bytesPerLine

      for (let b = 0; b < viewport.getSettings().bytesPerLine; b++) {
        const byte = viewport.getByteAt(lineOffset + b)
        currentLineBytes.push(byte)
      }
      // l = [0:32]
      // Needs to be externally converted by viewport's offset to display location in source.
      //   ie. ret[l]; l = 0; vp source start = 234
      //       display[0].offset = 234
      ret[l] = currentLineBytes
      iret.push({
        srcOffset: currentLineBytes[0].offsets.src,
        data: currentLineBytes,
      })

      currentLineBytes = []
    }

    viewport.updateDisplayContent(ret)
  }
}

export function getLastViewportOffset() {
  return getFileMetrics().computedFileSize - ViewportData.Capacity
}
