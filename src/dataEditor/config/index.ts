// src/core/config.ts
import { EditorType } from 'dataEditor/editor'
import XDGAppPaths from 'xdg-app-paths'
import fs from 'fs'
import assert from 'assert'

export const APP_DATA_PATH: string = XDGAppPaths({ name: 'omega_edit' }).data()

export function verifyAppDataDir() {
  fs.mkdirSync(APP_DATA_PATH, { recursive: true })
  assert(fs.existsSync(APP_DATA_PATH), 'app data path does not exist')
}

const DefaultHostname: string = '127.0.0.1'
const DefaultPort: number = 9000

interface ConfigFileVars {
  hostname: string
  port: number
  logLevel: 'info' | 'warn' | 'debug'
}

export type ExtractableConfigOpts = {
  [K in keyof ConfigFileVars]: ConfigFileVars[K]
}

export interface BaseEditorConfigOpts extends ConfigFileVars {
  heartbeatMs?: number
}
export interface StandaloneEditorConfigOpts extends BaseEditorConfigOpts {
  type: EditorType.Standalone
  targetFile?: string
}

export interface DebugEditorConfigOpts extends BaseEditorConfigOpts {
  type: EditorType.DFDLDebugLinked
  targetFile: string
}

export type DataEditorConfigOpts =
  | StandaloneEditorConfigOpts
  | DebugEditorConfigOpts

export abstract class DataEditorConfig {
  readonly type: EditorType
  readonly targetFile: string
  readonly hostname: string
  readonly port: number
  readonly heartbeatMs: number
  readonly logLevel: string

  protected constructor(p: DataEditorConfigOpts) {
    this.type = p.type
    this.targetFile = p.targetFile ?? ''
    this.hostname = p.hostname == '' ? DefaultHostname : p.hostname
    this.port = p.port ?? DefaultPort
    this.heartbeatMs = p.heartbeatMs ?? 1000
    this.logLevel = p.logLevel
  }
}

export interface DataEditorConfigProvider {
  get<T extends keyof ExtractableConfigOpts>(
    section: T,
    defaultValue: ExtractableConfigOpts[T]
  ): ExtractableConfigOpts[T]
  targetFile(): string | Promise<string>
}

export class StandaloneEditorConfig extends DataEditorConfig {
  constructor(opts: StandaloneEditorConfigOpts) {
    super(opts)
  }
  static async build(provider: DataEditorConfigProvider) {
    let config: StandaloneEditorConfigOpts = {
      hostname: provider.get('hostname', '127.0.0.1'),
      port: provider.get('port', 9000),
      logLevel: provider.get('logLevel', 'info'),
      targetFile: await provider.targetFile(),
      heartbeatMs: 1000,
      type: EditorType.Standalone,
    }

    if (!Number.isInteger(config.port) || config.port <= 0)
      throw new Error(`DataEditor config port: ${config.port} is invalid`)
    return new StandaloneEditorConfig(config)
  }
}
export class DebugEditorConfig extends DataEditorConfig {
  constructor(opts: DebugEditorConfigOpts) {
    super(opts)
  }
  static build(init: Omit<DebugEditorConfigOpts, 'type'>) {
    if (!init.targetFile) throw new Error('filepath required')
    if (!Number.isInteger(init.port) || init.port <= 0)
      throw new Error(`DataEditor config port: ${init.port} is invalid`)
    return new DebugEditorConfig({ ...init, type: EditorType.DFDLDebugLinked })
  }
}
