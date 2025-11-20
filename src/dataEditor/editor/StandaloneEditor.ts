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
import { OmegaEditSession } from 'dataEditor/adapters/omegaEditAdapter/sessions'
import { dataToEncodedStr, DisplayState } from './DisplayState'
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
  constructor(
    private serviceHandler: RequestHandler<any, any>,
    private baseHandler: RequestHandler<any, any>
  ) {
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
  ): Promise<ExtensionMsgResponses[K]> {
    const [type, data] = args as [K, ExtensionMsgCommands[K]]
    if (this.baseHandler!.canHandle(type)) {
      return this.baseHandler!.request(type, data)
    }
    return this.serviceHandler!.request(type, data)
  }
}
export class StandaloneDataEditor extends IDataEditor {
  protected msgMediator: StandaloneMsgMediator | undefined = undefined

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
      serviceReqHandler,
      baseHandler as RequestHandler<any, any>
    )
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
