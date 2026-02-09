import { SaveAsStrategy } from 'dataEditor/core/message/messages'
import path from 'path'
import * as vscode from 'vscode'

export class VSCodeSaveAsStrategy extends SaveAsStrategy {
  notifyFailure(msg?: string): void {
    let errMsg = `Failed to save: ${this.filepath}`
    if (msg) errMsg += msg
    vscode.window.showErrorMessage(errMsg)
  }
  notifySuccess(): void {
    vscode.window.showInformationMessage(`Saved: ${this.filepath}`)
  }
  confirm(): Promise<boolean> {
    return new Promise(async (res, rej) => {
      const userConfirm = await vscode.window.showInformationMessage(
        'File has been modified since being opened overwrite the file anyway?',
        { modal: true },
        'Yes',
        'No'
      )
      res(userConfirm === 'Yes' ? true : false)
    })
  }
  constructor(private activeEditorFiles: () => string[]) {
    super()
  }
  private filepath: string = ''

  getFile(): Promise<string> {
    return new Promise(async (res, rej) => {
      const fileUri = await vscode.window.showOpenDialog({
        canSelectMany: false,
        openLabel: 'Save As',
        canSelectFiles: true,
        canSelectFolders: false,
        title: 'Select File to Save As',
      })
      if (fileUri && fileUri[0]) {
        const targetSaveFile = path
          .resolve(fileUri[0].fsPath)
          .toLocaleLowerCase()

        if (!this.validate()) rej()

        res(targetSaveFile)
      }
      rej('No file selected')
    })
  }

  protected validate(): boolean {
    for (const editorFile in this.activeEditorFiles) {
      if (this.filepath.includes(editorFile))
        vscode.window.showErrorMessage(
          `Data editor already open for: ${editorFile}`
        )
      return false
    }
    return true
  }
}
