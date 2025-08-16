import * as assert from 'assert'
import { DataEditor } from 'dataEditor/editor'
import { DFDLDebugEditor } from 'dataEditor/editor/dfdlDebug'
import { StandaloneEditor } from 'dataEditor/editor/standalone'
import * as dataEditor from '../'
import { suite } from 'mocha'
import * as vscode from 'vscode'

type DataEditorRegistration = {
  cmd: string
  initializer: (
    ctx: vscode.ExtensionContext,
    ...args: any[]
  ) => Promise<DataEditor>
}
class Manager {
  static readonly DataEditorCommands: {
    [k in 'standalone' | 'dfdl']: DataEditorRegistration
  } = {
    standalone: {
      cmd: 'extension.data.edit.standalone',
      initializer: StandaloneEditor.Create,
    },
    dfdl: {
      cmd: 'extension.data.edit.dfdl',
      initializer: DFDLDebugEditor.Create,
    },
  }
  private editors: DataEditor[] = []
  private disposables: vscode.Disposable[] = []
}

suite('Data Editor Manager Test Suite', () => {
  test('Provides Data Editor extension commands', () => {})
  test('Manager initializes editor client service', () => {
    /*
        1. init EditorClient
        2. Configure specific Editor class
        3. Call Editor.Create
        4. Update member fields for Editor mgmt
        5. Return instance of Editor
    */
    dataEditor.executeEditorCommand('standalone', {})
  })
})
