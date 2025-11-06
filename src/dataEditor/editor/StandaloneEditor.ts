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
interface SInMsgs extends UiToEditorMsgs {
  standaloneOnly: { type: 'standalone' }
}
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
    return new Promise((res, rej) => {})
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
  }
}

class StandaloneMessageHandlers {
  cmdFnMap: { [K: string]: (msg: UiToEditorMsg) => Promise<any> } = {}
  handle<K extends UiToEditorMsg>(msg: K) {
    const {} = msg
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
