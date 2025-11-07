import { MessageBus } from 'dataEditor/message/messageBus'
import {
  UiToEditor,
  EditorToUi,
  UiToEditorMsg,
  UiToEditorMsgs,
  UiToEditorMsgId,
  ExtensionMsgCommands,
  ExtensionMsgResponses,
} from 'dataEditor/message/messages'
import { DataEditorService } from 'dataEditor/service/editorService'
import { EditorUI } from 'dataEditor/ui/editorUI'
import { IDataEditor } from './AbstractEditor'
import { EditorType } from '.'
import { DataEditorArgMap } from './editorRegistry'
import * as vscode from 'vscode'
import {
  IServiceRequestHandler,
  ServiceRequestTypes,
} from 'dataEditor/service/requestHandler'
import { dataToEncodedStr } from './DisplayState'

export class StandaloneDataEditor extends IDataEditor {
  protected async serviceConnect(): Promise<IServiceRequestHandler> {
    let statusBarIntervalId: NodeJS.Timeout | undefined = undefined
    const statusBarItem = vscode.window.createStatusBarItem(
      vscode.StatusBarAlignment.Left
    )
    this.opts.service.on('status', (msg) => {
      clearInterval(statusBarIntervalId)

      statusBarIntervalId = showServiceStatus(msg, statusBarItem)
    })
    this.opts.service.on('connected', (info) => {
      clearInterval(statusBarIntervalId)
    })
    this.opts.service.on('error', (err) => {
      clearInterval(statusBarIntervalId)
    })
    return new Promise(async (res, rej) => {
      res(await this.opts.service.connect())
    })
  }
  protected messageHandler<K extends keyof ExtensionMsgCommands>(
    type: K,
    msg: ExtensionMsgCommands[K],
    isServiceRequestable: boolean
  ): Promise<any> {
    return new Promise((res, rej) => {
      switch (type) {
        case 'editorOnChange':
          const { editMode, encoding, selectionData } =
            msg as ExtensionMsgCommands['editorOnChange']
          const displayState = this.opts.ui.getDisplayState()

          displayState.editorEncoding = Buffer.isEncoding(encoding)
            ? encoding
            : 'hex'

          const encodeResponseAs =
            editMode === 'single' ? 'hex' : displayState.editorEncoding
          if (selectionData && selectionData.length > 0) {
            res({
              encodedStr: dataToEncodedStr(
                Buffer.from(selectionData),
                encodeResponseAs
              ),
            })
          }
          break
        case 'scrollViewport':
          const { scrollOffset, bytesPerRow } =
            msg as ExtensionMsgCommands['scrollViewport']
          const startOffset = Math.max(
            0,
            scrollOffset - (scrollOffset % bytesPerRow)
          )
          res(
            this.serviceRequestHandler!.request('scrollViewport', {
              scrollOffset,
              bytesPerRow,
            })
          )
      }
    })
  }

  constructor(
    config: DataEditorArgMap[EditorType.Standalone],
    service: DataEditorService,
    ui: EditorUI,
    bus: MessageBus<ExtensionMsgCommands, ExtensionMsgResponses>
  ) {
    super({
      config,
      service,
      ui,
      bus,
    })
    // this.handlers = new StandaloneMessageHandlers(this)
  }
}

function showServiceStatus(
  msg: string,
  statusBarItem: vscode.StatusBarItem
): NodeJS.Timeout {
  statusBarItem.text = msg
  statusBarItem.show()
  let animationFrame = 0
  const animationInterval = 400 // ms per frame
  const animationFrames = ['', '.', '..', '...']
  const animationIntervalId = setInterval(() => {
    statusBarItem.text = `${msg} ${
      animationFrames[++animationFrame % animationFrames.length]
    }`
  }, animationInterval)
  return animationIntervalId
}
