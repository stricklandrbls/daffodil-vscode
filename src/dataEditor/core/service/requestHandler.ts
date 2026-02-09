import {
  ExtensionMsgCommands,
  ExtensionMsgResponses,
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
// const fn = <K extends keyof RequestMap<TestMap>>(t: K, req: RequestMap<TestMap>[K]): Promise<ResponseMap<TestMap>[K]>=>{throw ''}

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

export interface RequestHandler<Req, Res extends { [K in keyof Req]: any }> {
  request<K extends keyof Req>(
    ...args: RequestArgs<Req, K> & any
  ): Promise<Res[K] extends any ? Res[K] : void>
  canHandle(type: string): boolean
}
export type RequestTypes<
  R extends { [key: string]: object | never },
  K extends keyof R,
> = [R[K]] extends [never]
  ? [type: K]
  : R[K] extends object
    ? [type: K, data: R[K]]
    : [type: K]
