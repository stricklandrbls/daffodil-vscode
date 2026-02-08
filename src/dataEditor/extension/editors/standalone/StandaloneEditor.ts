import { WebviewBusHost } from 'dataEditor/core/message/messageBus'
import {
  ExtensionMsgCommands,
  ExtensionMsgResponses,
  RequestArgs,
} from 'dataEditor/core/message/messages'
import { DataEditorService } from 'dataEditor/core/service/editorService'
import { EditorUI } from 'dataEditor/core/ui/editorUI'
import { IDataEditor } from '../../../core/editor/AbstractEditor'
import { EditorType } from '../../../core/editor'
import { DataEditorArgMap } from '../../../core/editor/editorRegistry'
import * as vscode from 'vscode'
import { AbstractMediator } from 'dataEditor/core/message/messageMediator'
import { RequestHandler } from 'dataEditor/core/service/requestHandler'
import { dataToEncodedStr } from '../../../core/editor/DisplayState'
import {
  ExtensionLocalMsgHandler,
  HandlerMap,
  LocalHandableMsgKeys,
  LocalRequests,
  LocalResponses,
} from './messageHandler'

class StandaloneMsgMediator extends AbstractMediator<
  ExtensionMsgCommands,
  ExtensionMsgResponses
> {
  onProcessed<K extends keyof ExtensionMsgCommands>(
    type: K,
    data: ExtensionMsgResponses[K] extends any
      ? ExtensionMsgResponses[K]
      : never
  ) {
    throw new Error('Method not implemented.')
  }
  private serviceHandler: RequestHandler<any, any> | undefined = undefined
  private preInitMsgs: {}[] = []
  constructor(private baseHandler: ExtensionLocalMsgHandler) {
    super()
  }
  setServiceHandler(handler: RequestHandler<any, any>) {
    this.serviceHandler = handler
  }
  setBaseHandler(handler: typeof this.baseHandler) {
    this.baseHandler = handler
  }
  process<K extends keyof ExtensionMsgCommands>(
    ...args: RequestArgs<ExtensionMsgCommands, K>
  ): any {
    if (!this.serviceHandler || !this.baseHandler) {
      console.error(
        'Cannot receive data editor messages. Message routing has been been fully initialized yet.'
      )
      this.preInitMsgs.push(args)
      return
    }
    const [type, data] = args as [K, ExtensionMsgCommands[K]]
    if (this.baseHandler!.canHandle(type)) {
      this.baseHandler!.request(
        type as LocalHandableMsgKeys,
        data as LocalRequests[LocalHandableMsgKeys]
      ).then((data) => {
        this.onProcessed(type, data as any)
      })
      return
    }

    this.serviceHandler!.request(type, data).then((data) => {
      this.onProcessed(type, data)
    })
  }
  processPreInitMsgs() {
    this.preInitMsgs.forEach((args) => {
      this.process(...(args as [keyof ExtensionMsgCommands, any]))
    })
    this.preInitMsgs = []
  }
}

export class StandaloneDataEditor extends IDataEditor {
  protected msgMediator: StandaloneMsgMediator

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
    this.msgMediator.processPreInitMsgs()
    return true
  }
  constructor(
    config: DataEditorArgMap[EditorType.Standalone],
    service: DataEditorService,
    ui: EditorUI,
    bus: WebviewBusHost
  ) {
    super({
      config,
      service,
      ui,
      bus,
    })
    const baseHandler = new ExtensionLocalMsgHandler()
    baseHandler.set('editorOnChange', async (args) => {
      return new Promise((res, rej) => {
        const displayState = this.opts.ui.getDisplayState()
        displayState.editorEncoding = args.encoding as BufferEncoding
        const encodeDataAs =
          args.editMode === 'single' ? 'hex' : displayState.editorEncoding

        if (args.selectionData && args.selectionData.length > 0) {
          res({encodedStr: dataToEncodedStr(Buffer.from(args.selectionData), encodeDataAs)})
        }
      })
    })
    this.msgMediator = new StandaloneMsgMediator(baseHandler)
    this.msgMediator.onProcessed = (type, data) => {
      this.opts.ui.notify(type, data)
    }
    this.opts.bus.onMessageRx(this.msgMediator.process, this.msgMediator)
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
