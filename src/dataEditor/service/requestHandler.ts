import {
  modifyViewport,
  replaceOneSession,
  searchSession,
} from '@omega-edit/client'
export type LookupOptions = {
  caseInsensitive: boolean
  reverse: boolean
  searchOffset: number
  searchLength: number
  limit?: number
}
export type SearchOptions = LookupOptions & {
  data: Buffer<ArrayBufferLike>
  encoding: BufferEncoding
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
export enum ServiceRequests {
  'Read',
  'Save',
  'Write',
  'Undo',
  'Redo',
  'Search',
  'Replace',
  'FillData',
}
export type ServiceRequestKeys =
  | 'Read'
  | 'Save'
  | 'Write'
  | 'Undo'
  | 'Redo'
  | 'Search'
  | 'Replace'
  | 'FillData'

// export type RequestMap<Keys extends ServiceRequestKeys> = {
//   [K in Keys]: ServiceRequestTypes[K]
// }
export interface ServiceRequestTypes {
  Read: ReadRequest
  Save: { method: 'as' | undefined }
  Write: never
  Undo: { method: 'all' | 'last' }
  Redo: never
  Search: SearchOptions
  Replace: ReplaceOptions
  FillData: FillDataOptions
}
export type BaseRequestMap = {
  [K in ServiceRequestKeys]: ServiceRequestTypes[K]
}
export type BaseResponseMap = {
  [K in ServiceRequestKeys]: ServiceResponseTypes[K]
}
export type MappedType = { [K: string]: any }
export type ResponseMap<M extends MappedType> = BaseResponseMap & M
export type RequestMap<M extends MappedType> = BaseRequestMap & M
// const fn = <K extends keyof RequestMap<TestMap>>(t: K, req: RequestMap<TestMap>[K]): Promise<ResponseMap<TestMap>[K]>=>{throw ''}

export interface ServiceResponseTypes {
  Read: ReadResponse
  Save: boolean
  Write: never
  Undo: boolean
  Redo: never
  Search: number[]
  Replace: number
  FillData: { bytes: Uint8Array; byteStr: string }
}

export abstract class ServiceRequestHandler<
  ReqMap extends { [K: string]: any },
  ResMap extends { [K: string]: any },
> {
  abstract request<K extends keyof RequestMap<ReqMap>>(
    type: K,
    request: RequestMap<ReqMap>[K]
  ): K extends keyof ResponseMap<ResMap>
    ? Promise<ResponseMap<ResMap>[K]>
    : never
}
export class BaseRequestHandler extends ServiceRequestHandler<
  MappedType,
  MappedType
> {
  request<K extends string | number>(
    type: K,
    request: RequestMap<MappedType>[K]
  ): K extends string | number ? Promise<ResponseMap<MappedType>[K]> : never {
    throw new Error('Method not implemented.')
  }
}
// export interface ServiceRequestTypes {
//   Read: { request: ReadRequest; response: ReadResponse }
//   Save: { request: { method: 'as' | undefined }; response: boolean }
//   Write: { request: never; response: never }
//   Undo: { request: { method: 'all' | 'last' }; response: boolean }
//   Redo: { request: never; response: boolean }
//   Search: { request: SearchOptions; response: number[] }
//   Replace: { request: ReplaceOptions; response: number }
//   FillData: {
//     request: FillDataOptions
//     response: { bytes: Uint8Array; byteStr: string }
//   }
// }

// export type ServiceRequests =
//   | 'Read'
//   | 'Save'
//   | 'Write'
//   | 'Undo'
//   | 'Redo'
//   | 'Search'
//   | 'Replace'
//   | 'FillData'
// export type ServiceRequestMap = {[K in keyof ServiceRequests]: ServiceResponseKeys[K]['payload']}
// export type ServiceRequestKeys =
//   | {type: ServiceRequests., payload: ReadRequest}
//   | {type: 'Save', payload:  { method: 'as' | undefined}}
//   | {type: 'Write', payload: never}
//   | {type: 'Undo', payload: { method: 'all' | 'last' }}
//   | {type: 'Redo', payload: never}
//   | {type: 'Search', payload: SearchOptions}
//   | {type: 'Replace', payload: ReplaceOptions}
//   | {type: 'FillData', payload: FillDataOptions}
// export type ServiceResponseKeys =
//   | {type: 'Read', payload: ReadResponse}
//   | {type: 'Save', payload:  boolean}
//   | {type: 'Write', payload: never}
//   | {type: 'Undo', payload: boolean}
//   | {type: 'Redo', payload: never}
//   | {type: 'Search', payload: number[]}
//   | {type: 'Replace', payload: number}
//   | {type: 'FillData', payload: { bytes: Uint8Array; byteStr: string }}
