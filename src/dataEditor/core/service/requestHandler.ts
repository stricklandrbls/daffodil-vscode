import {
  ExtensionMsgCommands,
  ExtensionMsgResponses,
  ExtensionReqSubMap,
  ExtensionResSubMap,
  RequestArgs,
} from 'dataEditor/core/message/messages'
export type LookupOptions = {
  caseInsensitive: boolean
  reverse: boolean
  searchOffset: number
  searchLength: number
  limit?: number
}
export type SearchOptions = LookupOptions & {
  encoding: BufferEncoding
  searchStr: string | Uint8Array
  is_case_insensitive?: boolean
  is_reverse?: boolean
  offset?: number
  length?: number
  limit?: number
}
export type ReplaceOptions = LookupOptions & {
  pattern: Uint8Array | string
  replaceWith: Uint8Array | string
  overwriteOnly: boolean
}
export type CurrentEditMode = 'single' | 'multibyte'
export type FillDataOptions = {
  selectionStr: string
  encoding: BufferEncoding
}
type ReadRequest = {
  offset: number
  capacity: number
  isFloating?: boolean
}
type ReadResponse = {
  srcOffset: number
  length: number
  bytesRemaining: number
  data: Uint8Array
  capacity: number
}
export interface ServiceRequestTypes {
  read: ReadRequest
  applyChanges: never
  undo: { method: 'all' | 'last' }
  redo: never
  search: SearchOptions
  replace: ReplaceOptions
  fillData: FillDataOptions
  clearChanges: never
}
export type MappedType = { [K: string]: any }
// const fn = <K extends keyof RequestMap<TestMap>>(t: K, req: RequestMap<TestMap>[K]): Promise<ResponseMap<TestMap>[K]>=>{throw ''}

export interface ServiceResponseTypes {
  read: ReadResponse
  applyChanges: never
  undo: boolean
  redo: never
  search: number[]
  replace: number
  fillData: { bytes: Uint8Array; byteStr: string }
  clearChanges: never
}
export type RequestType<K extends keyof ExtensionMsgCommands> = [
  ExtensionMsgCommands[K],
] extends [never]
  ? [type: K]
  : ExtensionMsgCommands[K] extends object
    ? [type: K, data: ExtensionMsgCommands[K]]
    : [type: K]

export interface IServiceRequestHandler {
  request<K extends keyof ExtensionMsgCommands>(
    ...args: RequestType<K>
  ): Promise<ExtensionMsgResponses[K]>
  canHandle(type: string): boolean
}

export interface RequestHandler<
  Req extends Partial<ExtensionMsgCommands>,
  Res extends { [K in keyof Req]: any },
> {
  request<K extends keyof Req>(...args: RequestArgs<Req, K>): Promise<Res[K]>
  canHandle(type: string): boolean
}
interface RequestTypeMap {
  [key: string]: object | never
}
export interface BaseRequests extends RequestTypeMap {
  editorOnChange: { data: Uint8Array }
  setTheme: { type: 'light' | 'dark' }
  showMessage: { type: 'info' | 'warn'; msg: string }
  test: never
}

export type RequestTypes<
  R extends { [key: string]: object | never },
  K extends keyof R,
> = [R[K]] extends [never]
  ? [type: K]
  : R[K] extends object
    ? [type: K, data: R[K]]
    : [type: K]

export interface IRequestHandler<Requests extends RequestTypeMap> {
  request<K extends keyof Requests>(
    ...args: RequestTypes<Requests, K>
  ): Promise<any>
  canHandle(type: string): boolean
}
export interface ExtendedRequests extends RequestTypeMap {
  search: { offset: number }
  save: never
  read: { offset: number; length: number }
}

export class ExtendedHandler implements IRequestHandler<ExtendedRequests> {
  request<K extends keyof ExtendedRequests>(
    ...args: RequestTypes<ExtendedRequests, K>
  ): Promise<any> {
    throw new Error('Method not implemented.')
  }
  canHandle(type: string): boolean {
    throw new Error('Method not implemented.')
  }
}
const eh = new ExtendedHandler()
eh.request('save')

abstract class Usage {
  abstract handle<K extends keyof BaseRequests>(
    ...args: RequestTypes<BaseRequests, K>
  ): void
}
class User extends Usage {
  handle<K extends keyof BaseRequests>(
    ...args: RequestTypes<BaseRequests, K>
  ): void {
    const [type, someData] = args as [K, BaseRequests[K]]
    if (this.locallyHandlable(type)) {
      console.log('handling')
    } else {
      this.handler.request(type, ...some)
    }
  }
  handler: IRequestHandler<BaseRequests> = {
    request: function <K extends keyof BaseRequests>(
      ...args: RequestTypes<BaseRequests, K>
    ): Promise<any> {
      throw new Error('Function not implemented.')
    },
    canHandle: function (type: string): boolean {
      throw new Error('Function not implemented.')
    },
  }
  locallyHandlable<K extends keyof ExtendedRequests>(type: K) {
    if (type === 'editorOnChange') return true
  }
}
