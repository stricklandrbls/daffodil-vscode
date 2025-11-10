import { MessageBus } from 'dataEditor/message/messageBus'
import {
  ExtensionMsgCommands,
  ExtensionMsgResponses,
  ExtensionRequest,
  ExtensionResponse,
  RequestArgs,
} from 'dataEditor/message/messages'
import {
  DataEditorService,
  IDataEditorService,
} from 'dataEditor/service/editorService'
import { EditorUI } from 'dataEditor/ui/editorUI'
import { IDataEditor } from './AbstractEditor'
import { EditorType } from '.'
import { DataEditorArgMap } from './editorRegistry'
import * as vscode from 'vscode'
import {
  AbstractMediator,
  MessageHandler,
} from 'dataEditor/message/messageMediator'
import {
  IServiceRequestHandler,
  RequestHandler,
  RequestType,
} from 'dataEditor/service/requestHandler'
class StandaloneMsgMediator extends AbstractMediator<
  ExtensionMsgCommands,
  ExtensionMsgResponses
> {
  private serviceHandler: RequestHandler<any, any> | undefined = undefined
  private baseHandler: MessageHandler<ExtensionMsgCommands> | undefined =
    undefined
  setServiceHandler(handler: RequestHandler<any, any>) {
    this.serviceHandler = handler
  }
  handle<K extends keyof ExtensionMsgCommands>(
    ...args: RequestArgs<ExtensionMsgCommands, K>
  ): Promise<ExtensionMsgResponses[K]> {
    const [type, data] = args as [K, ExtensionMsgCommands[K]]
    return this.serviceHandler!.request(type, data)
    // return this.baseHandler?.canHandle(type)
    //   ? this.baseHandler.handle(type, data)
    //   : this.serviceHandler!.request(type, data)
  }
}
export class StandaloneDataEditor extends IDataEditor {
  protected msgMediator: StandaloneMsgMediator = new StandaloneMsgMediator()

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
    const serviceReqHandler = await this.opts.service.connect()
    this.msgMediator.setServiceHandler(serviceReqHandler)
    this.msgMediator.handle('fileInfo').then()
    return true
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
