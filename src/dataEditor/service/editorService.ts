// src/ports/binaryDataService.ts
export type HeartbeatFn = (ts: number) => void

export interface EditorServiceEvents {
  status: string
  connected: { hostname: string; port: number }
  error: string
}

export interface DataEditorService {
  connect(): Promise<any>
  disconnect(): Promise<void>
  isConnected(): boolean

  read(offset: number, length: number): Promise<Uint8Array>
  write(offset: number, data: Uint8Array): Promise<void>

  onHeartbeat(cb: HeartbeatFn): void
  on<T extends keyof EditorServiceEvents>(
    event: T,
    listener: (content: EditorServiceEvents[T]) => any
  ): void
}
