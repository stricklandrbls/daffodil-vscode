import { DataEditor, DataEditorConfig } from '.'
import * as vscode from 'vscode'

export interface StandaloneEditorCmdArgs {
  targetFile?: string
}

export class StandaloneEditor extends DataEditor {
  private constructor(config: DataEditorConfig) {
    super(config)
  }
  static async Create(
    getConfig: () => Promise<DataEditorConfig>,
    args: StandaloneEditorCmdArgs
  ): Promise<StandaloneEditor> {
    return new Promise(async (res, rej) => {
      let config = await getConfig()
      let fileToEdit =
        args === undefined || args.targetFile === undefined
          ? await promptForFile()
          : args.targetFile
      if (fileToEdit === '')
        rej('Standalone Data Editors must be provided a file path!')
      config.fileToEdit = fileToEdit!
      res(new StandaloneEditor(config))
    })
  }
}

async function promptForFile() {
  const fileUri = await vscode.window.showOpenDialog({
    canSelectMany: false,
    openLabel: 'Select',
    canSelectFiles: true,
    canSelectFolders: false,
  })
  if (fileUri && fileUri[0]) {
    return fileUri[0].fsPath
  }
}
