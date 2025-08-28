import { getClient } from '@omega-edit/client'
import {
  extractConfigurationVariables,
  verifyAppDataDir,
} from 'dataEditor/config'
import { getServerInterface, ServerConnection } from 'dataEditor/include/server'
import { configureOmegaEditConfig } from 'dataEditor/include/server/ServerInfo'
import { DataEditorMessageChannel } from './messageChannel'
import { EditorMessage } from 'svelte/src/utilities/message'
import * as vscode from 'vscode'
import { SvelteWebviewInitializer } from 'dataEditor/svelteWebviewInitializer'
export interface DataEditorInitializer {
  createMessageChannel(): Promise<DataEditorMessageChannel>
  createWebviewPanel(
    messageHandlers: DataEditorMessageChannel
  ): Promise<vscode.WebviewPanel>
}
export abstract class DataEditor implements vscode.Disposable {
  protected disposables: vscode.Disposable[] = []

  protected constructor(
    ctx: vscode.ExtensionContext,
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

    const svelteWebviewInit = new SvelteWebviewInitializer(ctx)
    svelteWebviewInit.initialize('', this.panel.webview)
  }
  dispose() {
    this.disposables.forEach((d) => {
      d.dispose()
    })
  }

  static async initialize(init: DataEditorInitializer): Promise<DataEditor> {
    const msgC = await init.createMessageChannel()
    init.createWebviewPanel(msgC)
  }
}
export interface DataEditorCommand {
  standalone: DataEditorActivationCommand
}
export type StandaloneEditorArgs = {
  targetFile: string
}
export interface DataEditorActivationCommand<Args> {
  readonly command: string
  callback: (ctx: vscode.ExtensionContext, args: Args) => Promise<DataEditor>
}
export const StandaloneEditorActivation: DataEditorActivationCommand<StandaloneEditorArgs> =
  {
    command: '',
    callback: ActivateStandaloneEditor,
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
async function ActivateStandaloneEditor(
  ctx: vscode.ExtensionContext,
  args: StandaloneEditorArgs
): Promise<StandaloneDataEditor> {
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

  throw ''
}
export class StandaloneDataEditor extends DataEditor {
  static MessageChannel: DataEditorMessageChannel = {
    webviewMsgRxHandler: function <MessageType extends EditorMessage>(
      msg: MessageType
    ): Promise<void> {
      throw ''
    },
  }
  protected constructor(args: StandaloneEditorArgs) {
    super(
      vscode.window.createWebviewPanel('', '', {
        viewColumn: vscode.ViewColumn.Active,
      }),
      StandaloneDataEditor.MessageChannel
    )
  }
  initialize(): Promise<any> {
    throw new Error('Method not implemented.')
  }
}

export namespace DataEditorCommands {
  export interface EditorCommand {
    standlone: DataEditorActivationCommand<StandaloneEditorArgs>
  }
  export function execute<E extends keyof EditorCommand>(
    type: E,
    args: EditorCommand[E] extends DataEditorActivationCommand<infer Args>
      ? Args
      : never
  ) {}
}
