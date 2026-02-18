import { IServerHeartbeat } from '@omega-edit/client'
import { IServiceRequestHandler, RequestHandler } from './requestHandler'
import { ReadResponse, RequestArgs } from 'dataEditor/core/message/messages'

// src/ports/binaryDataService.ts
export type HeartbeatFn = (ts: number) => void
export type DataUpdatedResponse = {
  fileOffset: number
  length: number
  bytesLeft: number
  capacity: number
  data: Uint8Array
}
export interface EditorServiceEvents {
  status: string
  connected: any
  error: string
  heartbeatUpdate: IServerHeartbeat & { port: number }
  dataUpdate: ReadResponse
}
export type ServiceRequests = {
  type: 'sessionCreate'
  payload: { id?: string }
}

export interface DataEditorService {
  connect(args: any): Promise<any>
  disconnect(): Promise<void>
  isConnected(): boolean

  on<T extends keyof EditorServiceEvents>(
    event: T,
    listener: (content: EditorServiceEvents[T]) => any
  ): void
}

export interface IDataEditorService<
  Requests,
  Responses extends { [K in keyof Requests]: any },
> {
  connect(): Promise<any>
  disconnect(): Promise<void>
  isConnected(): boolean
  request<K extends keyof Requests>(
    ...args: RequestArgs<Requests, K>
  ): Promise<Responses[K]>
  on<T extends keyof EditorServiceEvents>(
    event: T,
    listener: (content: EditorServiceEvents[T]) => any
  ): void
}
