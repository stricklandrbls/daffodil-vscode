import {
  createSession,
  EditorClient,
  getClient,
  getViewportData,
  IHeartbeatReceiver,
  IServerHeartbeat,
  ViewportEvent,
} from '@omega-edit/client'
import { DataEditor, DataEditorMessageChannel } from './editors'
import {
  createEditorViewport,
  Viewport,
  ViewportSubscriber,
} from './editorService'
import { getServerFileMetrics, ServerFileMetrics } from './include/utils'
import { DataEditorConfig, DataEditorInitializer } from './editors/dataEditor'
import * as vscode from 'vscode'
import { EditorMessage, MessageCommand } from '../svelte/src/utilities/message'
import { getObtainedServerInfo } from './include/server'
import path from 'path'
import { ServerInfo } from './include/server/ServerInfo'
/*
      Steps for creating a Data Editor
        1. Obtain required Configuration arguments
          ├─ Server { host, port, checkpoint } 
          ├─ Target File
        2. Configure Server Connection - Async
          ├─ Verify APP_DATA_PATH
          ├─ COnfigure OE Port
          ├─ Check Server Availability
          ├─ Setup Logging
          ├─ Start Server
          ├─ Get EditorClient
        -. Configure Target File ( prompt if not provided )
          ├─ Affects: DataEditor init, UI position, 
        3. new DataEditor Object (ctx, config, targetFile?)
          ├─ Configure Extension <-> UI Message Handler
          ├─ Configure UI disposal
          ├─ Configure dispose()
          ├─ Create DisplayState(panel)
        4. DataEditor Initialize
          ├─ Verify TargetFile
          ├─ Begin Heartbeat
        5. DataEditor UI Display
    */
export class StandaloneDataEditor extends DataEditor {
  private sessionId: string = 'NOSESSION'
  private fileMetrics: ServerFileMetrics = ServerFileMetrics

  protected viewportSubscriptions: ViewportSubscriber[] = []
  protected client: EditorClient | undefined = undefined
  protected constructor(
    public readonly id: string,
    readonly config: DataEditorConfig,
    uiPanel: vscode.WebviewPanel,
    protected targetFile?: string
  ) {
    super(uiPanel, new StandaloneMessageChannel(uiPanel.webview))
    getClient(this.config.connection.port, this.config.connection.host)
      .then((client) => {
        this.client = client
      })
      .catch((err) => {
        throw err
      })
    createSession(this.targetFile, undefined, config.extConfig.checkpointPath)
      .then((sessionResponse) => {
        this.sessionId = sessionResponse.getSessionId()
        getServerFileMetrics(sessionResponse, this.sessionId).then((sfm) => {
          this.messageChannel.webviewMsgTxHandler({
            command: MessageCommand.fileInfo,
            data: { ...sfm },
          })
        })
      })
      .then(() => {
        const vpRecv: ViewportSubscriber = new StandaloneViewportSubscriber(
          this.sessionId,
          this.config.connection.port,
          this.config.connection.host,
          (data) => {
            this.messageChannel.webviewMsgTxHandler({
              command: MessageCommand.viewportRefresh,
              data: { ...data },
            })
          }
        )
      })
  }
  process(heartbeatInfo: IServerHeartbeat) {
    const serverInfo = getObtainedServerInfo()
    this.messageChannel.webviewMsgTxHandler({
      command: MessageCommand.heartbeat,
      data: {
        latency: heartbeatInfo.latency,
        omegaEditPort: this.config.connection.port,
        serverCpuLoadAverage: heartbeatInfo.serverCpuLoadAverage,
        serverUptime: heartbeatInfo.serverUptime,
        serverUsedMemory: heartbeatInfo.serverUsedMemory,
        sessionCount: heartbeatInfo.sessionCount,
        serverInfo: {
          omegaEditPort: this.config.connection.port,
          serverVersion: serverInfo.serverVersion,
          serverHostname: serverInfo.serverHostname,
          serverProcessId: serverInfo.serverProcessId,
          jvmVersion: serverInfo.jvmVersion,
          jvmVendor: serverInfo.jvmVendor,
          jvmPath: serverInfo.jvmPath,
          availableProcessors: serverInfo.availableProcessors,
        },
      },
    })
  }
  getSessionId() {
    return this.sessionId
  }

  static async create(
    initializer: DataEditorInitializer,
    id: string,
    targetFile?: string
  ) {
    const conf = await initializer.configureConfig()

    const column =
      targetFile !== undefined
        ? vscode.ViewColumn.Two
        : vscode.ViewColumn.Active
    const panel = await initializer.createWebviewPanel({
      column,
      title: 'Data Editor: Standalone',
    })
    if (targetFile === undefined) {
      const fileUri = await vscode.window.showOpenDialog({
        canSelectMany: false,
        openLabel: 'Select',
        canSelectFiles: true,
        canSelectFolders: false,
      })
      if (fileUri && fileUri[0]) {
        targetFile = fileUri[0].fsPath
        panel.title = path.basename(targetFile)
      }
    }
    return new StandaloneDataEditor(id, conf, panel, targetFile)
  }
}
export interface DefaultHeartbeatRx extends IHeartbeatReceiver {
  serverInfo(): ServerInfo
}

class StandaloneMessageChannel implements DataEditorMessageChannel {
  constructor(readonly webview: vscode.Webview) {}
  async webviewMsgTxHandler<MessageType extends EditorMessage>(
    msg: MessageType
  ): Promise<void> {
    switch (msg.command) {
      default:
        this.webview.postMessage({ ...msg })
    }
  }
  async webviewMsgRxHandler<MessageType extends EditorMessage>(
    msg: MessageType
  ): Promise<void> {
    switch (msg.command) {
      default:
        throw ''
    }
  }
}
class StandaloneViewportSubscriber implements ViewportSubscriber {
  private currentViewport: Viewport = new Viewport()

  constructor(
    readonly sessionId: string,
    readonly port: number,
    readonly host: string,
    public dataUpdateCallback?: (viewport: Viewport) => any
  ) {
    createEditorViewport(this, { offset: 0, capacity: Viewport.Capacity }).then(
      (vpResp) => {
        this.currentViewport = Viewport.CreateFrom(vpResp)
        if (dataUpdateCallback) this.dataUpdateCallback!(this.currentViewport)
      }
    )
  }
  async onDataUpdate(vpEvent: ViewportEvent) {
    const data = await getViewportData(vpEvent.getViewportId())
    this.currentViewport?.update(data)

    if (this.dataUpdateCallback) this.dataUpdateCallback(this.currentViewport)
  }
}
