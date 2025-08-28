import { DataEditorActivationCommand } from '.'
import { DataEditor } from './dataEditor'
export type DFDLEditorArgs = {
  ctx: any
  args: number
}
export namespace DataEditorCommands {
  export interface EditorCommand {
    dfdl: DataEditorActivationCommand<DFDLEditorArgs>
  }
  export function execute<E extends keyof EditorCommand>(
    type: E,
    args: EditorCommand[E] extends DataEditorActivationCommand<infer Args>
      ? Args
      : never
  ) {}
}
export class DFDLEditor extends DataEditor {}
