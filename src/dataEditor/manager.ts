import * as vscode from 'vscode'
import { isDFDLDebugSessionActive } from './include/utils'
import {
  createSimpleFileLogger,
  getClient,
  getServerInfo,
  IHeartbeatReceiver,
  IServerHeartbeat,
  Logger,
  setLogger,
  stopProcessUsingPID,
} from '@omega-edit/client'
import {
  APP_DATA_PATH,
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
import { DataEditorConfig, DataEditorInitializer } from './editors/dataEditor'
import { DataEditor } from './editors'
import { HeartbeatInfo } from './include/server/heartbeat/HeartBeatInfo'
import {
  initializeHeartbeats,
  registerRecevier,
  removeReceiver,
} from './include/server/heartbeat'
import { DefaultHeartbeatRx, StandaloneDataEditor } from './standaloneEditor'

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
  private serverPid: number = -1

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
          registerRecevier(editor)
          editor.onDidDispose(() => {
            console.debug('Editor disposed, removing from receivers')
            removeReceiver(editor)
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
      if (!isServerListening)
        await serverInterface.start(connection, (pid) => {
          initializeHeartbeats(() => {
            stopProcessUsingPID(pid)
          })
        })

      const client = await getClient(connection.port, connection.host)
      res({
        extConfig: configVars,
        connection,
      } as DataEditorConfig)
    })
  }
  async createWebviewPanel(viewOpts: {
    title: string
    column: vscode.ViewColumn
  }): Promise<vscode.WebviewPanel> {
    return new Promise((res, rej) => {
      const panel = vscode.window.createWebviewPanel('', viewOpts.title, {
        viewColumn: viewOpts.column,
      })
      this.webviewInitializer.initialize('dataEditor', panel.webview)
      res(panel)
    })
  }
}
