import { RequestArgs } from 'dataEditor/core/message/messages'
import { RequestHandler } from 'dataEditor/core/service/requestHandler'
import { ExtensionMsgCommands, ExtensionMsgResponses } from 'dataEditor/global'

export type LocalHandableMsgKeys =
  | 'editorOnChange'
  | 'setUITheme'
  | 'showMessage'
export type LocalRequests = Pick<ExtensionMsgCommands, LocalHandableMsgKeys>
export type LocalResponses = Pick<ExtensionMsgResponses, LocalHandableMsgKeys>
export type HandlerMap = {
  [fn in keyof LocalRequests]: <K extends keyof LocalRequests>(
    data: LocalRequests[K]
  ) => Promise<LocalResponses[K]>
}

export class ExtensionLocalMsgHandler
  implements RequestHandler<LocalRequests, LocalResponses>
{
  handlerMap: HandlerMap = {
    editorOnChange: function <K extends keyof LocalRequests>(
      data: LocalRequests[K]
    ): Promise<LocalResponses[K]> {
      throw new Error('Function not implemented.')
    },
    setUITheme: function <K extends keyof LocalRequests>(
      data: LocalRequests[K]
    ): Promise<LocalResponses[K]> {
      throw new Error('Function not implemented.')
    },
    showMessage: function <K extends keyof LocalRequests>(
      data: LocalRequests[K]
    ): Promise<LocalResponses[K]> {
      throw new Error('Function not implemented.')
    },
  }
  set<K extends keyof LocalRequests | typeof this.handlerMap>(
    fns: K,
    handler: K extends keyof LocalRequests ? (typeof this.handlerMap)[K] : never
  ) {
    if (typeof fns === typeof this.handlerMap) {
      this.handlerMap = fns as typeof this.handlerMap
    } else {
      const fnId = fns as keyof LocalRequests
      this.handlerMap[fnId] = handler
    }
  }
  request<K extends LocalHandableMsgKeys>(
    ...args: RequestArgs<Pick<ExtensionMsgCommands, LocalHandableMsgKeys>, K>
  ): Promise<LocalResponses[K]> {
    const [type, data] = args as [K, LocalRequests[K]]
    const handler = this.handlerMap[type]
    if (!handler) {
      return Promise.reject(new Error(`No handler found for ${args[0]}`))
    }
    return handler(data)
  }
  canHandle(type: string): boolean {
    return (
      type === 'editorOnChange' ||
      type === 'setUITheme' ||
      type === 'showMessage'
    )
  }
}
