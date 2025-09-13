import {
  ALL_EVENTS,
  createViewport,
  EditorClient,
  EventSubscriptionRequest,
  getClient,
  ViewportDataResponse,
  ViewportEvent,
  ViewportEventKind,
} from '@omega-edit/client'

export type ViewportOffsets = {
  start: number
  end: number
}
export interface ViewportCreateOpts {
  readonly offset: number
  readonly capacity: number
  readonly isFloating?: boolean
  readonly desiredId?: string
}
export interface ViewportSubscriber {
  readonly sessionId: string
  readonly port: number
  readonly host: string
  onDataUpdate: (vpEvent: ViewportEvent) => any
}
export class Viewport {
  static Capacity: number = 1024

  private fileOffset: number = -1
  private length: number = -1
  private bytesLeft: number = -1
  private data: Uint8Array = new Uint8Array(Viewport.Capacity)
  private id: string = ''

  constructor(id?: string) {}
  update(viewportDataResponse: ViewportDataResponse) {
    this.fileOffset = viewportDataResponse.getOffset()
    this.length = viewportDataResponse.getLength()
    this.bytesLeft = viewportDataResponse.getFollowingByteCount()
    this.data = viewportDataResponse.getData_asU8()
  }
  static CreateFrom(viewportDataResponse: ViewportDataResponse) {
    const viewportId = viewportDataResponse.getViewportId()
    const fileOffset = viewportDataResponse.getOffset()
    const length = viewportDataResponse.getLength()
    const bytesLeft = viewportDataResponse.getFollowingByteCount()
    const data = viewportDataResponse.getData_asU8()
    const ret = new Viewport(viewportId)
    ret.fileOffset = fileOffset
    ret.length = length
    ret.bytesLeft = bytesLeft
    ret.data = data
    return ret
  }
}
export async function createEditorViewport(
  receiver: ViewportSubscriber,
  opts: ViewportCreateOpts
) {
  const client = await getClient(receiver.port, receiver.host)
  const vpResponse = await createViewport(
    opts.desiredId,
    receiver.sessionId,
    opts.offset,
    opts.capacity,
    opts.isFloating
  )
  client
    .subscribeToViewportEvents(
      new EventSubscriptionRequest()
        .setId(vpResponse.getViewportId())
        .setInterest(ALL_EVENTS & ~ViewportEventKind.VIEWPORT_EVT_MODIFY)
    )
    .on('data', receiver.onDataUpdate)
    .on('error', (err) => {
      throw 'could not subscribe to viewport'
    })
  return vpResponse
}
/**
 * Subscribe to all events for a given viewport so the editor gets refreshed when changes to the viewport occur
 * @param panel webview panel to send updates to
 * @param viewportId id of the viewport to subscribe to

async function viewportSubscribe(
  panel: vscode.WebviewPanel,
  viewportId: string
) {
  // subscribe to all viewport events
  client
    .subscribeToViewportEvents(
      new EventSubscriptionRequest()
        .setId(viewportId)
        .setInterest(ALL_EVENTS & ~ViewportEventKind.VIEWPORT_EVT_MODIFY)
    )
    .on('data', async (event: ViewportEvent) => {
      getLogger().debug({
        viewportId: event.getViewportId(),
        event: event.getViewportEventKind(),
      })
      await sendViewportRefresh(panel, await getViewportData(viewportId))
    })
    .on('error', (err) => {
      // Call cancelled thrown sometimes when server is shutdown
      if (
        !err.message.includes('Call cancelled') &&
        !err.message.includes('UNAVAILABLE')
      )
        throw err
    })
}
     */

/**

async function sendViewportRefresh(
  panel: vscode.WebviewPanel,
  viewportDataResponse: ViewportDataResponse
): Promise<void> {
  await panel.webview.postMessage({
    command: MessageCommand.viewportRefresh,
    data: {
      viewportId: viewportDataResponse.getViewportId(),
      fileOffset: viewportDataResponse.getOffset(),
      length: viewportDataResponse.getLength(),
      bytesLeft: viewportDataResponse.getFollowingByteCount(),
      data: viewportDataResponse.getData_asU8(),
      capacity: VIEWPORT_CAPACITY_MAX,
    },
  })
}
 */
