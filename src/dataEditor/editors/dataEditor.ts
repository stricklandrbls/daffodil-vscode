import { IConfig } from 'dataEditor/config'
import {
  getObtainedServerInfo,
  ServerConnection,
} from 'dataEditor/include/server'
import { DataEditorMessageChannel } from './messageChannel'
import * as vscode from 'vscode'
import path from 'path'
import { IHeartbeatReceiver, IServerHeartbeat } from '@omega-edit/client'
import { ServerInfo } from 'dataEditor/include/server/ServerInfo'
import {
  EditorMessage,
  MessageCommand,
} from '../../svelte/src/utilities/message'
export type DataEditorConfig = {
  extConfig: IConfig
  connection: ServerConnection
}
export interface DataEditorInitializer {
  configureConfig(): Promise<DataEditorConfig>
  createWebviewPanel(
    viewOpts: { title: string; column: vscode.ViewColumn },
    messageHandlers: DataEditorMessageChannel
  ): Promise<vscode.WebviewPanel>
  createHeartbeatReceiver(): IHeartbeatReceiver
}

export abstract class DataEditor
  implements vscode.Disposable, IHeartbeatReceiver
{
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
  static MessageChannel: DataEditorMessageChannel = {
    webviewMsgRxHandler: function <MessageType extends EditorMessage>(
      msg: MessageType
    ): Promise<void> {
      throw ''
    },
  }

  protected constructor(
    public readonly id: string,
    readonly config: DataEditorConfig,
    uiPanel: vscode.WebviewPanel,
    targetFile?: string
  ) {
    super(uiPanel, StandaloneDataEditor.MessageChannel)
  }
  static async create(
    initializer: DataEditorInitializer,
    id: string,
    targetFile?: string
  ) {
    const conf = await initializer.configureConfig()

    const column =
      targetFile !== '' ? vscode.ViewColumn.Two : vscode.ViewColumn.Active
    const panel = await initializer.createWebviewPanel(
      { column, title: 'Data Editor: Standalone' },
      StandaloneDataEditor.MessageChannel
    )
    if (targetFile !== '') {
      const fileUri = await vscode.window.showOpenDialog({
        canSelectMany: false,
        openLabel: 'Select',
        canSelectFiles: true,
        canSelectFolders: false,
      })
      if (fileUri && fileUri[0]) {
        targetFile = fileUri[0].fsPath
        panel.title = path.basename(targetFile)
        // await this.setupDataEditor()
      }
    }
    return new StandaloneDataEditor(id, conf, panel, targetFile)
  }
  process(heartbeatInfo: IServerHeartbeat) {
    const serverInfo = getObtainedServerInfo()
    this.panel.webview.postMessage({
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
}
export interface DefaultHeartbeatRx extends IHeartbeatReceiver {
  serverInfo(): ServerInfo
}
// export namespace DataEditorCommands {
//   export interface EditorCommand {
//     standlone: DataEditorActivationCommand<StandaloneEditorArgs>
//   }
//   export function execute<E extends keyof EditorCommand>(
//     type: E,
//     args: EditorCommand[E] extends DataEditorActivationCommand<infer Args>
//       ? Args
//       : never
//   ) {}
// }
