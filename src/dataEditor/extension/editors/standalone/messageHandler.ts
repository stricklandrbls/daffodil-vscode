import { RequestArgs } from 'dataEditor/core/message/messages'
import { RequestHandler } from 'dataEditor/core/service/requestHandler'
import { ExtensionMsgCommands, ExtensionMsgResponses } from 'dataEditor/global'

type LocalHandableMsgKeys = 'editorOnChange' | 'setUITheme' | 'showMessage'
type LocalRequests = Pick<ExtensionMsgCommands, LocalHandableMsgKeys>
type LocalResponses = Pick<ExtensionMsgResponses, LocalHandableMsgKeys>
export class ExtensionLocalMsgHandler
  implements RequestHandler<LocalRequests, LocalResponses>
{
  handlerMap: {
    [fn in keyof LocalRequests]: <K extends keyof LocalRequests>(
      data: LocalRequests[K]
    ) => Promise<LocalResponses[K]>
  } = {
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
  set<K extends keyof LocalRequests>(
    handlerId: K,
    handler: (typeof this.handlerMap)[K]
  ) {
    this.handlerMap[handlerId] = handler
  }
  request<K extends LocalHandableMsgKeys>(
    ...args: RequestArgs<Pick<ExtensionMsgCommands, LocalHandableMsgKeys>, K>
  ): Promise<Pick<ExtensionMsgResponses, LocalHandableMsgKeys>[K]> {
    throw new Error('Method not implemented.')
  }
  canHandle(type: string): boolean {
    return (
      type === 'editorOnChange' ||
      type === 'setUITheme' ||
      type === 'showMessage'
    )
  }
}
