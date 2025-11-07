// src/manager/DataEditorManager.ts
// import { DataEditor } from "../editor/DataEditor.js";
// import type { DataEditorFactory } from "../editor/DataEditorFactory.js";
// import type { EditorConfig } from "../core/config.js";
// import type { MessageBus } from "../core/messageBus.js";
// import type { UiToEditor, EditorToUi } from "../core/messages.js";
import * as vscode from 'vscode'
import { EditorType } from 'dataEditor/editor'
import {
  DataEditorConfig,
  DataEditorConfigProvider,
  DebugEditorConfig,
  ExtractableConfigOpts,
  StandaloneEditorConfig,
} from 'dataEditor/config'
import { DataEditorFactory } from 'dataEditor/editor/DataEditorFactory'
import { WebviewBusHost } from 'dataEditor/message/messageBus'
import { SvelteWebviewInitializer } from 'dataEditor/svelteWebviewInitializer'
import { DataEditorArgMap } from 'dataEditor/editor/editorRegistry'
import { IDataEditor } from 'dataEditor/editor/AbstractEditor'

export class DataEditorManager {
  private editors = new Map<string, IDataEditor>() // key = editorId

  constructor(private readonly factory: DataEditorFactory) {}

  has(editorId: string) {
    return this.editors.has(editorId)
  }
  get(editorId: string) {
    return this.editors.get(editorId)
  }

  registerCommands(ctx: vscode.ExtensionContext) {
    ctx.subscriptions.push(
      vscode.commands.registerCommand('extension.data.edit', async () => {
        const config = await StandaloneEditorConfig.build(
          new ConfigProvider(VSCodeFileSelector)
        )
        await this.open(EditorType.Standalone, config, ctx)
      })
    )
    ctx.subscriptions.push(
      vscode.commands.registerCommand(
        'data.editor.dfdl-debug',
        async (targetFile: string) => {
          const config = await StandaloneEditorConfig.build(
            new ConfigProvider(() => {
              return targetFile
            })
          )
          await this.open(EditorType.DFDLDebugLinked, config, ctx)
        }
      )
    )
  }
  async open<T extends EditorType>(
    type: T,
    config: DataEditorArgMap[T],
    ctx: vscode.ExtensionContext
  ) {
    const panel = vscode.window.createWebviewPanel(
      `dataEditor`,
      `Data Editor (${type})`,
      vscode.ViewColumn.Active,
      { enableScripts: true }
    )
    const sveltePanelInit = new SvelteWebviewInitializer(ctx)
    sveltePanelInit.initialize(`dataEditor`, panel.webview)

    const bus = new WebviewBusHost(panel)

    const editor = await this.factory.create(type, config, bus)
    this.editors.set(panel.title, editor)
    await editor.open()

    panel.onDidDispose(() => {
      editor.close()
      this.editors.delete(panel.title)
    })
  }

  async close(editorId: string) {
    const ed = this.editors.get(editorId)
    if (!ed) return
    await ed.close()
    this.editors.delete(editorId)
  }

  async closeAll() {
    await Promise.all([...this.editors.keys()].map((id) => this.close(id)))
  }
}
type TargetFileSelector = () => string | Promise<string>

const VSCodeFileSelector: TargetFileSelector = async (): Promise<string> => {
  const fileUri = await vscode.window.showOpenDialog({
    canSelectMany: false,
    openLabel: 'Open File to Edit',
  })
  if (!fileUri) return ''
  return fileUri![0].path
}

class ConfigProvider implements DataEditorConfigProvider {
  readonly config = vscode.workspace.getConfiguration('dataEditor')
  constructor(public targetFile: TargetFileSelector) {}

  get<T extends keyof ExtractableConfigOpts>(section: T, defaultValue: ExtractableConfigOpts[T]):ExtractableConfigOpts[T]{
    const ret = this.config.get(section)
    return ret ? ret as ExtractableConfigOpts[T] : defaultValue
  }
}
