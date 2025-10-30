import { IServerHeartbeat } from '@omega-edit/client'
import {
  IServiceRequestHandler,
  MappedType,
  RequestMap,
  ResponseMap,
  ServiceRequestHandler,
  ServiceRequestTypes,
  ServiceResponseTypes,
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
  connect(): Promise<
    IServiceRequestHandler<ServiceRequestTypes, ServiceResponseTypes>
  >
  disconnect(): Promise<void>
  isConnected(): boolean
  // request(): any
  // getRequestHandler(): ServiceRequestHandler

  read(offset: number, length: number): Promise<Uint8Array>
  write(offset: number, data: Uint8Array): Promise<void>

  on<T extends keyof EditorServiceEvents>(
    event: T,
    listener: (content: EditorServiceEvents[T]) => any
  ): void
}
