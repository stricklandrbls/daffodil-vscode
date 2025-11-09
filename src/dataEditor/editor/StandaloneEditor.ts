import { MessageBus } from 'dataEditor/message/messageBus'
import {
  ExtensionMsgCommands,
  ExtensionMsgResponses,
  ExtensionRequest,
  ExtensionResponse,
  RequestArgs,
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
import { dataToEncodedStr, encodedStrToData } from './DisplayState'
import { AbstractMediator } from 'dataEditor/message/messageMediator'
class StandaloneMsgMediator extends AbstractMediator<ExtensionRequest> {
  handle<K extends never>(
    ...args: RequestArgs<ExtensionRequest, K>
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
export class StandaloneDataEditor extends IDataEditor {
  protected msgMediator: AbstractMediator<ExtensionRequest>
  protected canHandleLocally<K extends keyof ExtensionRequest>(
    type: K,
    msg: ExtensionRequest[K]
  ): boolean {
    throw new Error('Method not implemented.')
  }
  protected async serviceConnect(): Promise<boolean> {
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
  constructor(
    config: DataEditorArgMap[EditorType.Standalone],
    service: DataEditorService,
    ui: EditorUI,
    bus: MessageBus<ExtensionRequest, ExtensionResponse>
  ) {
    super({
      config,
      service,
      ui,
      bus,
    })
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
