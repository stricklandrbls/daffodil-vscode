import * as vscode from 'vscode'
import * as fs from 'fs'
import assert from 'assert'
import { DataEditor, DataEditorConfig } from './editor'
import { StandaloneEditor, StandaloneEditorCmdArgs } from './editor/standalone'
import XDGAppPaths from 'xdg-app-paths'
import { DFDLDebugEditor, DFDLDebugEditorCmdArgs } from './editor/dfdlDebug'
import { checkOmegaEditPort } from './include/server/ServerInfo'
import { APP_DATA_PATH, IConfig } from './config'
import { ServerConnection, ServerInterface } from './include/server'
import { EditorClient, getClient } from '@omega-edit/client'

export type DataEditorCommands = {
  standalone: {
    cmd: 'extension.data.edit.standalone'
    args: EditorCommands['standalone']
  }
  dfdl: { cmd: 'extension.data.edit.dfdl-editor'; args: EditorCommands['dfdl'] }
}
interface EditorCommands {
  standalone: StandaloneEditorCmdArgs
  dfdl: DFDLDebugEditorCmdArgs
}

const EditorInitializer = {
  standalone: {
    run: StandaloneEditor.Create,
    onComplete: (editor: DataEditor) => {},
  },
  dfdl: {
    run: DFDLDebugEditor.Create,
    onComplete: (editor: DataEditor) => {},
  },
}

export class DataEditorManager implements vscode.Disposable {
  private editors: DataEditor[] = []
  private disposables: vscode.Disposable[] = []

  constructor(
    readonly ctx: vscode.ExtensionContext,
    private server: ServerInterface,
    readonly config: IConfig
  ) {
    ctx.subscriptions.push(this)
  }

  dispose(): void {
    // this.editors = []
    this.disposables.forEach((item) => {
      item.dispose()
    })
  }

  async getInitializer<E extends keyof EditorCommands>(id: E) {
    let init = EditorInitializer[id]
    init.onComplete = (editor) => {
      this.editors.push(editor)
    }
    return init
  }

  async InitEditorClient(): Promise<DataEditorConfig> {
    return new Promise(async (res, rej) => {
      // make sure the app data path exists
      fs.mkdirSync(APP_DATA_PATH, { recursive: true })
      assert(fs.existsSync(APP_DATA_PATH), 'app data path does not exist')
      // // make sure the omega edit port is configured
      checkOmegaEditPort(this.config) // Need "thisarg" from Manager
      const connection: ServerConnection = {
        host: '127.0.0.1',
        port: this.config.port,
        checkpointDirectory: this.config.checkpointPath,
      }

      const isListening = await this.server.isListening(connection)
      if (!isListening) await this.server.start(connection)

      const client = await getClient(connection.port, connection.host)

      const stillListening = await this.server.isListening(connection)
      stillListening
        ? res({
            connection,
            editorClient: client,
            fileToEdit: '',
          })
        : rej(`Server stopped listening after startup`)
    })
    // async function setupLogging(configVars: IConfig): Promise<void> {
    //   const logFile = configVars.logFile
    //   const logLevel =
    //     process.env.OMEGA_EDIT_CLIENT_LOG_LEVEL ||
    //     process.env.OMEGA_EDIT_LOG_LEVEL ||
    //     configVars.logLevel
    //   rotateLogFiles(logFile)
    //   setLogger(createSimpleFileLogger(logFile, logLevel))
    //   vscode.window.showInformationMessage(`Logging (${logLevel}) to '${logFile}'`)
    // }
  }
}
