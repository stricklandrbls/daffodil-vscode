import { getDataDisplaySettings } from 'utilities'
import {
  Byte,
  Viewport,
  ViewportData,
  ViewportDisplayContent,
  ViewportLineData,
} from '.'
import { getFileMetrics } from 'editor_components/header/fieldsets/FileMetrics'

export type ViewportFetchBoundaries = {
  lower: number
  upper: number
  fetchUpperBoundary: number
}

export class ViewportController {
  private static _currentViewport = $state<Viewport>(new Viewport())
  public static CurrentViewport = () => this._currentViewport
  static NullByteStr = 'NULL'
  static DisplayConfig = getDataDisplaySettings()
  static CurrentSrcOffset = 0

  public static getStartOffset = () => this.CurrentSrcOffset
  public static seekTo = (offset: number) => {
    if (offset < this.getBoundaries().fetchUpperBoundary)
      ViewportController.CurrentSrcOffset = Math.floor(
        offset / ViewportController._currentViewport.getSettings().bytesPerLine
      )
  }
  public static getBoundaries(): ViewportFetchBoundaries {
    const bytesDisplayCount =
      ViewportController._currentViewport.getSettings().lineCount *
      ViewportController._currentViewport.getSettings().bytesPerLine
    const upper =
      ViewportController._currentViewport.getData().getSize() >
      bytesDisplayCount
        ? ViewportController._currentViewport.getData().getOffset() +
          ViewportController._currentViewport.getData().getSize() -
          bytesDisplayCount
        : ViewportController._currentViewport.getData().getSize()

    return {
      lower: ViewportController._currentViewport.getData().getOffset(),
      upper: upper,
      fetchUpperBoundary: upper - ViewportData.Capacity,
    }
  }
  public static incrementViewport = (viewport: Viewport) => {}
  /**
   * Generates a `ViewportDisplayContent` object which contains `L` amount of lines that hold `B` amount of bytes.
   * Indexes within the object only represent their location within in object's data.
   *
   * These indexes will need to be converted to the their respective location within the Viewport's source.
   * @param viewport
   */
  public static generateByteDisplay() {
    let ret: ViewportDisplayContent = {}
    let iret: ViewportLineData[] = []

    let currentLineIndex = 0
    let lineOffset = 0
    let currentLineBytes: Byte[] = []

    for (
      let l = currentLineIndex;
      l < ViewportController._currentViewport.getSettings().lineCount;
      l++
    ) {
      lineOffset =
        l * ViewportController._currentViewport.getSettings().bytesPerLine

      for (
        let b = 0;
        b < ViewportController._currentViewport.getSettings().bytesPerLine;
        b++
      ) {
        const byte = ViewportController._currentViewport.getByteAt(
          lineOffset + b
        )
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

    ViewportController._currentViewport.updateDisplayContent(ret)
  }
}

export function getLastViewportOffset() {
  return getFileMetrics().computedFileSize - ViewportData.Capacity
}
