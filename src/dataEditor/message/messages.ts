// src/core/messages.ts
export enum Notification {
  ServiceConnected = 'ServiceConnected',
  ServiceDisconnected = 'ServiceDisconnected',
  Heartbeat = 'Heartbeat',
  DataUpdated = 'DataUpdated',
  Error = 'Error',
}

export type UiToEditor =
  | { type: 'OpenFile'; path: string }
  | { type: 'RequestBytes'; offset: number; length: number }
  | { type: 'WriteBytes'; offset: number; data: Uint8Array }
  | { type: 'Ping' }

export type EditorToUi =
  | { type: 'Notify'; kind: Notification; payload?: unknown }
  | { type: 'Bytes'; offset: number; data: Uint8Array }
  | { type: 'Ack'; id?: string }
  | { type: 'Error'; message: string; details?: unknown }

// Narrow helper
export type MessageDirection = UiToEditor | EditorToUi
