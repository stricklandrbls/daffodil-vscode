import * as vscode from 'vscode'
import { isDFDLDebugSessionActive } from './include/utils'
import {
  getClient,
  getServerInfo,
  HeartbeatRegistry,
  IHeartbeatReceiver,
  IServerHeartbeat,
} from '@omega-edit/client'
import {
  extractConfigurationVariables,
  IConfig,
  verifyAppDataDir,
} from './config'
import { getServerInterface, ServerConnection } from './include/server'
import {
  configureOmegaEditConfig,
  ServerInfo,
} from './include/server/ServerInfo'
import { SvelteWebviewInitializer } from './svelteWebviewInitializer'
import {
  DataEditorConfig,
  DataEditorInitializer,
  DefaultHeartbeatRx,
  StandaloneDataEditor,
} from './editors/dataEditor'
import { DataEditorMessageChannel } from './editors/messageChannel'
import { DataEditor } from './editors'
import { HeartbeatInfo } from './include/server/heartbeat/HeartBeatInfo'
import { registerReceiver } from './include/server/heartbeat'

export namespace DataEditorCtx {
  let ManagerInstance: DataEditorManager | undefined = undefined
  export function Manager(ctx: vscode.ExtensionContext) {
    if (!ManagerInstance) ManagerInstance = new DataEditorManager(ctx)
    return ManagerInstance
  }
}

class DataEditorManager implements DataEditorInitializer {
  private webviewInitializer: SvelteWebviewInitializer
  private activeEditors: DataEditor[] = []
  private serverHeartbeat: DataEditorHeartbeatRx = new DataEditorHeartbeatRx(
    'dataEditorExt'
  )
  constructor(ctx: vscode.ExtensionContext) {
    this.webviewInitializer = new SvelteWebviewInitializer(ctx)
    ctx.subscriptions.push(
      vscode.commands.registerCommand(
        // 'extension.data.edit.standalone',
        'extension.data.edit',
        async (targetFile?: string) => {
          const editorId = this.activeEditors.length.toString()
          const editor = await StandaloneDataEditor.create(
            this,
            editorId,
            targetFile
          )
          registerReceiver({
            id: editorId,
            process: (hbInfo) => {
              editor.process(hbInfo)
            },
          })
          this.activeEditors.push(editor)
        }
      ),
      vscode.commands.registerCommand(
        'extension.data.edit.dfdl',
        async (targetFile: string) => {
          // this.ConfigureDataEditor()
        }
      )
    )
  }
  createHeartbeatReceiver(): IHeartbeatReceiver {
    return new DataEditorHeartbeatRx(this.activeEditors.length.toString())
  }
  async configureConfig(): Promise<DataEditorConfig> {
    return new Promise(async (res, rej) => {
      let configVars = configureOmegaEditConfig(extractConfigurationVariables())
      verifyAppDataDir()
      const serverInterface = getServerInterface()

      const connection: ServerConnection = {
        checkpointDirectory: configVars.checkpointPath,
        host: '127.0.0.1',
        port: configVars.port,
      }

      const isServerListening = await serverInterface.isListening(connection)
      if (!isServerListening) await serverInterface.start(connection)

      const client = await getClient(connection.port, connection.host)
      res({
        extConfig: configVars,
        connection,
      } as DataEditorConfig)
    })
  }
  async createWebviewPanel(
    viewOpts: { title: string; column: vscode.ViewColumn },
    messageHandlers: DataEditorMessageChannel
  ): Promise<vscode.WebviewPanel> {
    return new Promise((res, rej) => {
      const panel = vscode.window.createWebviewPanel('', viewOpts.title, {
        viewColumn: viewOpts.column,
      })
      this.webviewInitializer.initialize('dataEditor', panel.webview)
      res(panel)
    })
  }
}

class DataEditorHeartbeatRx implements DefaultHeartbeatRx {
  protected heartbeatInterval: NodeJS.Timeout | number | undefined = undefined
  public readonly heartbeatInfo: IServerHeartbeat = new HeartbeatInfo()
  static ServerInfo: ServerInfo | undefined

  constructor(public readonly id: string) {}
  serverInfo(): ServerInfo {
    if (!DataEditorHeartbeatRx.ServerInfo) {
      getServerInfo().then((info) => {
        return info
      })
    }
    return DataEditorHeartbeatRx.ServerInfo!
  }
  process(heartbeat: IServerHeartbeat) {}
}
