import { DataEditorMsg, MessageCommand } from '../global/message'

export interface ComponentMessenger {
  addListener(
    type: MessageCommand,
    callback: (msg: DataEditorMsg) => void
  ): void
}

export class WindowListener implements ComponentMessenger {
  constructor(readonly window: Window) {}
  addListener(type: MessageCommand, callback: (msg: any) => void): void {
    this.window.addEventListener('message', callback)
  }
}
export class BrowserListener implements ComponentMessenger {
  private _listeners: { [K in MessageCommand]: (msg: DataEditorMsg) => void } =
    {
      [MessageCommand.clearChanges]: function (msg: DataEditorMsg): void {
        throw new Error('Function not implemented.')
      },
      [MessageCommand.applyChanges]: function (msg: DataEditorMsg): void {
        throw new Error('Function not implemented.')
      },
      [MessageCommand.editorOnChange]: function (msg: DataEditorMsg): void {
        throw new Error('Function not implemented.')
      },
      [MessageCommand.fileInfo]: function (msg: DataEditorMsg): void {
        throw new Error('Function not implemented.')
      },
      [MessageCommand.heartbeat]: function (msg: DataEditorMsg): void {
        throw new Error('Function not implemented.')
      },
      [MessageCommand.profile]: function (msg: DataEditorMsg): void {
        throw new Error('Function not implemented.')
      },
      [MessageCommand.redoChange]: function (msg: DataEditorMsg): void {
        throw new Error('Function not implemented.')
      },
      [MessageCommand.replaceResults]: function (msg: DataEditorMsg): void {
        throw new Error('Function not implemented.')
      },
      [MessageCommand.requestEditedData]: function (msg: DataEditorMsg): void {
        throw new Error('Function not implemented.')
      },
      [MessageCommand.save]: function (msg: DataEditorMsg): void {
        throw new Error('Function not implemented.')
      },
      [MessageCommand.saveAs]: function (msg: DataEditorMsg): void {
        throw new Error('Function not implemented.')
      },
      [MessageCommand.saveSegment]: function (msg: DataEditorMsg): void {
        throw new Error('Function not implemented.')
      },
      [MessageCommand.scrollViewport]: function (msg: DataEditorMsg): void {
        throw new Error('Function not implemented.')
      },
      [MessageCommand.search]: function (msg: DataEditorMsg): void {
        throw new Error('Function not implemented.')
      },
      [MessageCommand.replace]: function (msg: DataEditorMsg): void {
        throw new Error('Function not implemented.')
      },
      [MessageCommand.searchResults]: function (msg: DataEditorMsg): void {
        throw new Error('Function not implemented.')
      },
      [MessageCommand.setUITheme]: function (msg: DataEditorMsg): void {
        throw new Error('Function not implemented.')
      },
      [MessageCommand.showMessage]: function (msg: DataEditorMsg): void {
        throw new Error('Function not implemented.')
      },
      [MessageCommand.undoChange]: function (msg: DataEditorMsg): void {
        throw new Error('Function not implemented.')
      },
      [MessageCommand.updateLogicalDisplay]: function (
        msg: DataEditorMsg
      ): void {
        throw new Error('Function not implemented.')
      },
      [MessageCommand.viewportRefresh]: function (msg: DataEditorMsg): void {
        throw new Error('Function not implemented.')
      },
    }
  addListener(
    type: MessageCommand,
    callback: (msg: DataEditorMsg) => void
  ): void {
    this._listeners[type] = callback
  }
}
export let Messenger: ComponentMessenger | undefined = undefined

export function createMessenger<T extends ComponentMessenger>(messenger: T) {
  Messenger = messenger
}
export function addMessageListener(
  type: MessageCommand,
  callback: (msg: any) => void
) {
  Messenger?.addListener(type, callback)
}
