import { IServerHeartbeat } from '@omega-edit/client'
import { IServiceRequestHandler, RequestHandler } from './requestHandler'
import { RequestArgs } from 'dataEditor/message/messages'

// src/ports/binaryDataService.ts
export type HeartbeatFn = (ts: number) => void

export interface EditorServiceEvents {
  status: string
  connected: { hostname: string; port: number }
  error: string
  heartbeatUpdate: IServerHeartbeat & { port: number }
}
export type ServiceRequests = {
  type: 'sessionCreate'
  payload: { id?: string }
}

export interface DataEditorService {
  connect(): Promise<RequestHandler<any, any>>
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
