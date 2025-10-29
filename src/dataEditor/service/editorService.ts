import { IServerHeartbeat } from '@omega-edit/client'
import {
  MappedType,
  RequestMap,
  ResponseMap,
  ServiceRequestHandler,
} from './requestHandler'

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
  connect(): Promise<any>
  disconnect(): Promise<void>
  isConnected(): boolean
  getServiceHandler<
    ReqMap extends MappedType,
    ResMap extends MappedType,
  >(): Promise<ServiceRequestHandler<ReqMap, ResMap>>
  // request(): any
  // getRequestHandler(): ServiceRequestHandler

  read(offset: number, length: number): Promise<Uint8Array>
  write(offset: number, data: Uint8Array): Promise<void>

  on<T extends keyof EditorServiceEvents>(
    event: T,
    listener: (content: EditorServiceEvents[T]) => any
  ): void
}
