const DefaultHostname: string = '127.0.0.1'
const DefaultPort: number = 9000

interface ConfigFileVars {
  hostname: string
  port: number
  logLevel: 'info' | 'warn' | 'debug'
  logFile: string
  checkpointPath: string
}

export type ExtractableConfigOpts = {
  [K in keyof ConfigFileVars]: ConfigFileVars[K]
}

export interface BaseEditorConfigOpts extends ConfigFileVars {
  heartbeatMs?: number
}

type ConfigBuilder<C extends ConfigFileVars> = {[T in keyof C]: ()=>ConfigBuilder<C> }
interface IConfigBuilder<C extends ConfigFileVars> extends ConfigBuilder<C>{}
export interface DataEditorConfigProvider<Vars extends ConfigFileVars> {
    
    get<T extends keyof Vars>(name: T, defaultValue?: Vars[T]): Vars[T]
}
export abstract class DataEditorConfig {
  readonly type: EditorType
  readonly targetFile: string
  readonly hostname: string
  readonly port: number
  readonly heartbeatMs: number
  readonly logLevel: 'info' | 'warn' | 'debug'
  readonly logFile: string
  readonly checkpointPath: string
  protected constructor(p: DataEditorConfigOpts) {
    this.type = p.type
    this.targetFile = p.targetFile ?? ''
    this.hostname = p.hostname == '' ? DefaultHostname : p.hostname
    this.port = p.port ?? DefaultPort
    this.heartbeatMs = p.heartbeatMs ?? 1000
    this.logLevel = p.logLevel
    this.logFile = p.logFile
    this.checkpointPath = p.checkpointPath
  }
}

