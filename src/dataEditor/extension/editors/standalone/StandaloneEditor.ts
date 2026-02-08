import { MessageBus, WebviewBusHost } from 'dataEditor/core/message/messageBus'
import {
  ExtensionMsgCommands,
  ExtensionMsgResponses,
  ExtensionRequest,
  ExtensionResponse,
  RequestArgs,
} from 'dataEditor/core/message/messages'
import {
  DataEditorService,
  IDataEditorService,
} from 'dataEditor/core/service/editorService'
import { EditorUI } from 'dataEditor/core/ui/editorUI'
import { IDataEditor } from '../../../core/editor/AbstractEditor'
import { EditorType } from '../../../core/editor'
import { DataEditorArgMap } from '../../../core/editor/editorRegistry'
import * as vscode from 'vscode'
import {
  AbstractMediator,
  MessageHandler,
} from 'dataEditor/core/message/messageMediator'
import {
  IServiceRequestHandler,
  RequestHandler,
  RequestType,
} from 'dataEditor/core/service/requestHandler'
import { OmegaEditSession } from 'dataEditor/extension/adapters/omegaEditAdapter/sessions'
import {
  dataToEncodedStr,
  DisplayState,
} from '../../../core/editor/DisplayState'
class ExtensionLocalMsgHandler
  implements
    RequestHandler<
      Pick<ExtensionMsgCommands, 'editorOnChange'>,
      Pick<ExtensionMsgResponses, 'editorOnChange'>
    >
{
  request<K extends 'editorOnChange'>(
    ...args: RequestArgs<Pick<ExtensionMsgCommands, 'editorOnChange'>, K>
  ): Promise<Pick<ExtensionMsgResponses, 'editorOnChange'>[K]> {
    throw new Error('Method not implemented.')
  }
  canHandle(type: string): boolean {
    return type === 'editorOnChange'
  }
  editorOnChange: (
    args: ExtensionMsgCommands['editorOnChange']
  ) => Promise<ExtensionMsgResponses['editorOnChange']> = (args) => {
    throw ''
  }
}
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
  constructor(private baseHandler: RequestHandler<any, any>) {
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
    const [type, data] = args as [K, ExtensionMsgCommands[K]]
    if (this.baseHandler!.canHandle(type)) {
      this.baseHandler!.request(type, data).then((data) => {
        this.onProcessed(type, data)
      })
    }

    this.serviceHandler!.request(type, data).then((data) => {
      this.onProcessed(type, data)
    })
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
    baseHandler['editorOnChange'] = async (args) => {
      return new Promise((res, rej) => {
        const displayState = this.opts.ui.getDisplayState()
        displayState.editorEncoding = args.encoding as BufferEncoding
        const encodeDataAs =
          args.editMode === 'single' ? 'hex' : displayState.editorEncoding

        if (args.selectionData && args.selectionData.length > 0) {
          res({
            encodedStr: dataToEncodedStr(
              Buffer.from(args.selectionData),
              encodeDataAs
            ),
          })
        }
      })
    }
    this.msgMediator = new StandaloneMsgMediator(
      baseHandler as RequestHandler<any, any>
    )
    this.msgMediator.onProcessed = (type, data) => {
      if (data) this.opts.ui.notify(type, data)
    }
    this.opts.bus.onMessageRx(this.msgMediator.process)
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
