import { ExtensionContext } from 'vscode'
import { DataEditor, DataEditorConfig } from '.'
import { EditorClient } from '@omega-edit/client'

export class DFDLDebugEditor extends DataEditor {
  private constructor(client: EditorClient, fileToEdit: string) {
    super(client, fileToEdit)
  }
  static async Create(
    getClient: () => Promise<EditorClient>,
    args: DFDLDebugEditorCmdArgs
  ): Promise<DFDLDebugEditor> {
    return new Promise((res, rej) => {})
  }
}
export interface DFDLDebugEditorCmdArgs {
  fileToEdit: string
}
