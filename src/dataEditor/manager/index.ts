// src/manager/DataEditorManager.ts
// import { DataEditor } from "../editor/DataEditor.js";
// import type { DataEditorFactory } from "../editor/DataEditorFactory.js";
// import type { EditorConfig } from "../core/config.js";
// import type { MessageBus } from "../core/messageBus.js";
// import type { UiToEditor, EditorToUi } from "../core/messages.js";
import * as vscode from 'vscode'
import { EditorType } from 'dataEditor/core/editor'
import {
  DataEditorConfig,
  DataEditorConfigProvider,
  DebugEditorConfig,
  ExtractableConfigOpts,
  StandaloneEditorConfig,
} from 'dataEditor/config'
import { DataEditorFactory } from 'dataEditor/core/editor/DataEditorFactory'
import { WebviewBusHost } from 'dataEditor/core/message/messageBus'
import { SvelteWebviewInitializer } from 'dataEditor/svelteWebviewInitializer'
import { DataEditorArgMap } from 'dataEditor/core/editor/editorRegistry'
import { IDataEditor } from 'dataEditor/core/editor/AbstractEditor'

/**
 * @brief Data Editor Manager Class
 * Responsible for creating, storing, and disposing of Data Editor instances from the command
 * registered to VSCode's commands.
 */
export class DataEditorManager {
  private editors = new Map<string, IDataEditor>() // key = editorId

  constructor(private readonly factory: DataEditorFactory) {}

  has(editorId: string) {
    return this.editors.has(editorId)
  }
  get(editorId: string) {
    return this.editors.get(editorId)
  }

  /**
   * @brief Attaches functions to the extension context for creating Data Editors.
   * @param ctx Current VSCode extension context
   */
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

  /**
   * @brief Creates the webview panel to pass to the Data Editor created by the `DataEditorFactory` class
   * @param {T} Type of Data Editor
   * @param {DataEditorArgMap[T]} config
   * @param ctx
   */
  async open<T extends EditorType>(
    type: T,
    config: DataEditorArgMap[T],
    ctx: vscode.ExtensionContext
  ) {
    const titleFileStr = config.targetFile.substring(
      config.targetFile.lastIndexOf('/')
    )
    /* Must retain title value for `onPanelDidDispose()` because it is invoked AFTER the panel, and panel.title, have been disposed i.e, the panel.title is non-existent */
    const title = `Data Editor - ${titleFileStr} (${type})`
    const panel = vscode.window.createWebviewPanel(
      `dataEditor`,
      title,
      vscode.ViewColumn.Active,
      { enableScripts: true, retainContextWhenHidden: true }
    )
    const sveltePanelInit = new SvelteWebviewInitializer(ctx)
    sveltePanelInit.initialize(`dataEditor`, panel.webview)

    const bus = new WebviewBusHost(panel)

    const editor = await this.factory.create(type, config, bus)
    this.editors.set(panel.title, editor)
    await editor.open()
    panel.onDidDispose(() => {
      editor.close()
      this.editors.delete(title)
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

/**
 * @typedef {()=>string|Promise<string>} TargetFileSelector
 */
type TargetFileSelector = () => string | Promise<string>

/**
 * 
 * @returns 
 */
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

  get<T extends keyof ExtractableConfigOpts>(
    section: T,
    defaultValue: ExtractableConfigOpts[T]
  ): ExtractableConfigOpts[T] {
    const ret = this.config.get(section)
    return ret ? (ret as ExtractableConfigOpts[T]) : defaultValue
  }
}
