import {
  EditedDataRequest,
  EditedDataResponse,
  ExtensionMsgCommands,
  ExtensionMsgResponses,
  RequestArgs,
} from 'dataEditor/core/message/messages'
import { RequestHandler } from 'dataEditor/core/service/requestHandler'
import {
  encodedStrToData,
  dataToEncodedStr,
  dataToRadixStr,
  EditByteModes,
} from '../utils/dataFormatting'
export const LOCAL_HANDLABLE_MSG_KEYS = [
  'editorOnChange',
  'setUITheme',
  'showMessage',
  'requestEditedData',
] as const

export type LocalHandableMsgKeys = (typeof LOCAL_HANDLABLE_MSG_KEYS)[number]

export type LocalRequests = Pick<ExtensionMsgCommands, LocalHandableMsgKeys>
export type LocalResponses = Pick<ExtensionMsgResponses, LocalHandableMsgKeys>
export type HandlerMap = {
  [K in keyof LocalRequests]: (
    data: LocalRequests[K]
  ) => LocalResponses[K] | Promise<LocalResponses[K]>
}

export class ExtensionLocalMsgHandler
  implements RequestHandler<LocalRequests, LocalResponses>
{
  handlerMap: HandlerMap = {
    editorOnChange: function (data: {
      editMode: 'single' | 'multi'
      encoding: BufferEncoding | string
      selectionData: Uint8Array
    }): { encodedStr: string } | Promise<{ encodedStr: string }> {
      throw new Error('Function not implemented.')
    },
    setUITheme: function (data: never): Promise<never> {
      throw new Error('Function not implemented.')
    },
    showMessage: function (data: never): Promise<never> {
      throw new Error('Function not implemented.')
    },
    requestEditedData: function (data: EditedDataRequest): EditedDataResponse {
      const [bufferData, encodedStr] = fillRequestData(data)
      return { data: bufferData, dataDisplay: encodedStr }
    },
  }
  set<K extends keyof LocalRequests>(
    fnId: K,
    handler: HandlerMap[K]
    // handler: <K extends LocalHandableMsgKeys>(
    //   args: LocalRequests[K] extends any ? LocalRequests[K] : never
    // ) => LocalResponses[K] extends object
    //   ? LocalResponses[K] | Promise<LocalResponses[K]>
    //   : void
  ) {
    // if (typeof fns === typeof this.handlerMap) {
    //   this.handlerMap = fns as typeof this.handlerMap
    // } else {
    //   const fnId = fns as keyof LocalRequests
    this.handlerMap[fnId] = handler
    // }
  }
  request<K extends LocalHandableMsgKeys>(
    ...args: RequestArgs<Pick<ExtensionMsgCommands, LocalHandableMsgKeys>, K>
  ): Promise<LocalResponses[K]> {
    return new Promise((res, rej) => {
      const [type, data] = args as [K, LocalRequests[K]]
      const handler = this.handlerMap[type]
      if (!handler) {
        rej(new Error(`No handler found for ${args[0]}`))
      }
      res(handler(data))
    })
  }
  canHandle(type: string): type is LocalHandableMsgKeys {
    return (LOCAL_HANDLABLE_MSG_KEYS as readonly string[]).includes(type)
  }
}

function fillRequestData(message: EditedDataRequest): [Buffer, string] {
  let selectionByteData: Buffer
  let selectionByteDisplay: string
  if (message.editMode === EditByteModes.Multiple) {
    selectionByteData = encodedStrToData(
      message.editedContent,
      message.encoding
    )
    selectionByteDisplay = dataToEncodedStr(selectionByteData, message.encoding)
  } else {
    selectionByteData =
      message.viewport === 'logical'
        ? encodedStrToData(message.editedContent, 'latin1')
        : Buffer.from([parseInt(message.editedContent, message.radix)])

    selectionByteDisplay =
      message.viewport === 'logical'
        ? message.editedContent
        : dataToRadixStr(selectionByteData, message.radix)
  }

  return [selectionByteData, selectionByteDisplay]
}
