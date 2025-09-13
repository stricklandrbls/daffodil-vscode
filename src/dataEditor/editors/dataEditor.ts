import { IConfig } from 'dataEditor/config'
import {
  getObtainedServerInfo,
  ServerConnection,
} from 'dataEditor/include/server'
import { DataEditorMessageChannel } from './messageChannel'
import * as vscode from 'vscode'
import path from 'path'
import {
  createSession,
  EditorClient,
  getClient,
  getViewportData,
  IHeartbeatReceiver,
  IServerHeartbeat,
  ViewportDataResponse,
  ViewportEvent,
} from '@omega-edit/client'
import { ServerInfo } from 'dataEditor/include/server/ServerInfo'
import {
  EditorMessage,
  MessageCommand,
} from '../../svelte/src/utilities/message'
import {
  getServerFileMetrics,
  ServerFileMetrics,
} from 'dataEditor/include/utils'
import {
  createEditorViewport,
  Viewport,
  ViewportSubscriber,
} from 'dataEditor/editorService'
export type DataEditorConfig = {
  extConfig: IConfig
  connection: ServerConnection
}
export interface DataEditorInitializer {
  configureConfig(): Promise<DataEditorConfig>
  createWebviewPanel(viewOpts: {
    title: string
    column: vscode.ViewColumn
  }): Promise<vscode.WebviewPanel>
  createHeartbeatReceiver(): IHeartbeatReceiver
}

export abstract class DataEditor
  implements vscode.Disposable, IHeartbeatReceiver
{
  protected abstract viewportSubscriptions: ViewportSubscriber[]
  protected disposables: vscode.Disposable[] = []
  protected constructor(
    protected panel: vscode.WebviewPanel,
    protected messageChannel: DataEditorMessageChannel
  ) {
    this.panel.webview.onDidReceiveMessage(
      this.messageChannel.webviewMsgRxHandler,
      this
    )
    this.panel.onDidDispose(async () => {
      this.dispose()
    })
  }
  abstract id: string
  abstract process(heartbeat: IServerHeartbeat)
  dispose() {
    this.disposables.forEach((d) => {
      d.dispose()
    })
  }
  // static async initialize(init: DataEditorInitializer): Promise<DataEditor> {
  //   const msgC = await init.createMessageChannel()
  //   init.createWebviewPanel(msgC)
  // }
}

/*
  private async setupDataEditor() {
    assert(
      checkpointPath && checkpointPath.length > 0,
      'checkpointPath is not set'
    )

    let data = {
      byteOrderMark: '',
      changeCount: 0,
      computedFileSize: 0,
      diskFileSize: 0,
      fileName: this.fileToEdit,
      language: '',
      type: '',
      undoCount: 0,
    }

    // create a session and capture the session id, content type, and file size
    try {
      const createSessionResponse = await createSession(
        this.fileToEdit,
        undefined,
        checkpointPath
      )
      this.omegaSessionId = createSessionResponse.getSessionId()
      assert(this.omegaSessionId.length > 0, 'omegaSessionId is not set')
      addActiveSession(this.omegaSessionId)

      data.diskFileSize = data.computedFileSize =
        createSessionResponse.hasFileSize()
          ? (createSessionResponse.getFileSize() as number)
          : 0

      const contentTypeResponse = await getContentType(
        this.omegaSessionId,
        0,
        Math.min(1024, data.computedFileSize)
      )
      data.type = contentTypeResponse.getContentType()
      assert(data.type.length > 0, 'contentType is not set')

      const byteOrderMarkResponse = await getByteOrderMark(
        this.omegaSessionId,
        0
      )
      data.byteOrderMark = byteOrderMarkResponse.getByteOrderMark()
      assert(data.byteOrderMark.length > 0, 'byteOrderMark is not set')

      const languageResponse = await getLanguage(
        this.omegaSessionId,
        0,
        Math.min(1024, data.computedFileSize),
        data.byteOrderMark
      )
      data.language = languageResponse.getLanguage()
      assert(data.language.length > 0, 'language is not set')

      data.diskFileSize = data.computedFileSize =
        createSessionResponse.hasFileSize()
          ? (createSessionResponse.getFileSize() as number)
          : 0
    } catch (err) {
      // Error message obtained from https://github.com/ctc-oss/omega-edit/commit/b85ecc4579a77469bf29181a2e6ab7f839ee8a52#diff-59917b7537d1a13d123e6c53315fd9f8eebb9a037c8e92142b8caefa64c5e1cbR84
      const isEmojiWindowsError =
        err ==
        'createSession error: 13 INTERNAL: Emojis in filenames is not supported on Windows'

      const msg = isEmojiWindowsError
        ? `Unable to open ${this.fileToEdit}! Data editor doesn't support Emojis in filename on Windows.`
        : `Failed to create session for ${this.fileToEdit}`

      getLogger().error({
        err: {
          msg: msg,
          stack: new Error().stack,
        },
      })
      vscode.window.showErrorMessage(msg)

      if (isEmojiWindowsError) {
        // fine to return early here and not remove session b/c addActiveSession doesn't get called for this error. createSession() errors out.
        return
      }
    }

    // create the viewport
    try {
      const viewportDataResponse = await createViewport(
        undefined,
        this.omegaSessionId,
        0,
        VIEWPORT_CAPACITY_MAX,
        false
      )
      this.currentViewportId = viewportDataResponse.getViewportId()
      assert(this.currentViewportId.length > 0, 'currentViewportId is not set')
      await viewportSubscribe(this.panel, this.currentViewportId)
      await sendViewportRefresh(this.panel, viewportDataResponse)
    } catch {
      const msg = `Failed to create viewport for ${this.fileToEdit}`
      getLogger().error({
        err: {
          msg: msg,
          stack: new Error().stack,
        },
      })
      vscode.window.showErrorMessage(msg)
    }

    // send the initial file info to the webview
    await this.panel.webview.postMessage({
      command: MessageCommand.fileInfo,
      data: data,
    })
  }
*/
