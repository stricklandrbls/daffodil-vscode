import { commands, ExtensionContext } from 'vscode'
import {
  DataEditorActivationCommand,
  StandaloneEditorActivation,
  StandaloneEditorArgs,
} from './dataEditor'
import { DFDLEditor, DFDLEditorArgs } from './dfdlEditor'

export class DataEditor {}
const standalonecallback = (args: StandaloneEditorArgs) => {}
export namespace DataEditor {
  interface StandaloneCmd {
    command: string
    execute: (args: StandaloneEditorArgs) => void
  }
  interface Commands {
    standalone: StandaloneCmd
  }

  let CTX: ExtensionContext

  const EditorCommands: { [K in keyof Commands]: Commands[K] } = {
    standalone: {
      command: 'standalone.editor',
      execute: (args) => {
        StandaloneEditorActivation.callback(CTX, args)
      },
    },
  }
  export function setExtensionCtx(ctx: ExtensionContext) {
    CTX = ctx
    Object.keys(EditorCommands).forEach((cmd) => {
      CTX.subscriptions.push(commands.registerCommand(EditorCommands[cmd]))
    })
  }
  export function executeEditorCommand(cmd: string) {}
  export function registerEditorCommands()
}
