import { Viewport } from '.'
import { ViewportWindowSettings_t } from './ViewportDisplayer.svelte'

const MainViewport = new Viewport()
const MainViewportDisplaySettings = $state<ViewportWindowSettings_t>({
  bytesPerLine: 16,
  lineCount: 32,
  numLinesDisplayed: 16,
})

export const getMainViewport = () => MainViewport
export const getMainViewportSettings = () => MainViewportDisplaySettings
