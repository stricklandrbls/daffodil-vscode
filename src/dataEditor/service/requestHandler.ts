import {
  modifyViewport,
  replaceOneSession,
  searchSession,
} from '@omega-edit/client'
import { ExtensionMsgCommands } from 'dataEditor/message/messages'
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
export interface IServiceRequestHandler {
  request<K extends keyof ServiceRequestTypes>(
    type: K,
    data: ServiceRequestTypes[K]
  ): Promise<ServiceResponseTypes[K]>
  canHandle(type: string): boolean
  getRequestType<K extends keyof ServiceRequestTypes>(
    type: K
  ): ServiceRequestTypes[K]
}
