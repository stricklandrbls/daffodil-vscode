// src/adapters/omega/OmegaServiceAdapter.ts

import { getServerInfo, IServerInfo, startServer } from '@omega-edit/client'
import { APP_DATA_PATH, DataEditorConfig } from 'dataEditor/config'
import { generateLogbackConfigFile } from 'dataEditor/logs'
import {
  DataEditorService,
  EditorServiceEvents,
} from 'dataEditor/service/editorService'
import EventEmitter from 'events'
import { Socket } from 'net'
import path from 'path'
import { OmegaEditSession, sessionCreate } from './sessions'

export type OmegaEditConfigProvider = () => DataEditorConfig &
  OmegaEditServiceConfig

export class OmegaEditorAdapter implements DataEditorService {
  private connected = false
  private eventEmitter: EventEmitter = new EventEmitter()
  private serverPid: number = -1

  constructor(
    private readonly cfg: DataEditorConfig,
    private readonly vendor: any /* real sdk type */
  ) {}
  
  getServiceHandler<OmegaEditSession>(): Promise<OmegaEditSession> {
    throw new Error('Method not implemented.')
  }
  
  connect(): Promise<OmegaEditSession> {
    return new Promise(async (res) => {
      this.eventEmitter.emit(
        'status',
        `Conencting to Ωedit server on port ${this.cfg.port}`
      )

      this.serverPid = await startService({
        ...this.cfg,
      }).catch((err) => {
        this.eventEmitter.emit('error', err)
        return -1
      })

      const serverInfo = await testServiceConnection().catch((err) => {
        this.eventEmitter.emit('error', err)
        return undefined
      })
      const session = await sessionCreate({ ...this.cfg })
      this.connected = true
      this.eventEmitter.emit('connected', {
        hostname: this.cfg.hostname,
        port: this.cfg.port,
      })

      res(session)
    })
  }

  public on<T extends keyof EditorServiceEvents>(
    event: T,
    listener: (content: EditorServiceEvents[T]) => any
  ) {
    this.eventEmitter.on(event, listener)
  }

  async disconnect(): Promise<void> {
    // await this.vendor.close();
    this.connected = false
  }

  isConnected(): boolean {
    return this.connected
  }

  async read(offset: number, length: number): Promise<Uint8Array> {
    // return await this.vendor.read(offset, length);
    return new Uint8Array(length) // placeholder
  }

  async write(offset: number, data: Uint8Array): Promise<void> {
    // await this.vendor.write(offset, data);
  }
}

function checkServerListening(info: {
  hostname: string
  port: number
}): Promise<boolean> {
  return new Promise((res, rej) => {
    const socket: Socket = new Socket()
    socket.setTimeout(2000)

    socket.on('connect', () => {
      socket.destroy()
      res(true)
    })

    socket.on('timeout', () => {
      socket.destroy()
      res(false)
    })

    socket.on('error', () => {
      res(false)
    })

    socket.connect(info.port, info.hostname)
  })
}

function getPidFile(serverPort: number): string {
  return path.join(APP_DATA_PATH, `serv-${serverPort}.pid`)
}

export type OmegaEditServiceConfig = {
  hostname: string
  port: number
  logLevel: 'info' | 'debug'
}

const SERVER_START_TIMEOUT: number = 15 // in seconds
async function startService(serviceConfig: DataEditorConfig): Promise<number> {
  return new Promise(async (res, rej) => {
    // await stopServer(info)

    const logConfigFile = generateLogbackConfigFile(
      path.join(APP_DATA_PATH, `serv-${serviceConfig.port}.log`),
      serviceConfig.logLevel,
      serviceConfig.port
    )

    // Start the server and wait up to 10 seconds for it to start
    const serverPid = (await Promise.race([
      startServer(
        serviceConfig.port,
        serviceConfig.hostname,
        getPidFile(serviceConfig.port),
        logConfigFile
      ),

      new Promise((_resolve, reject) => {
        setTimeout(() => {
          reject((): Error => {
            return new Error(
              `Server startup timed out after ${SERVER_START_TIMEOUT} seconds`
            )
          })
        }, SERVER_START_TIMEOUT * 1000)
      }),
    ])) as number | undefined
    if (serverPid === undefined || serverPid <= 0) {
      rej('Server failed to start or PID is invalid')
    } else res(serverPid)
  })
}
const MaxInitializationAttempts: number = 60
async function testServiceConnection(): Promise<IServerInfo> {
  return new Promise(async (res, rej) => {
    let serverInfo: IServerInfo | undefined = undefined
    let initAttempts: number = 0
    for (let i = 1; i <= MaxInitializationAttempts; ++i) {
      try {
        serverInfo = await getServerInfo()
        if (serverInfo) break
        else {
          // wait 1 second before trying again
          await new Promise((resolve) => {
            setTimeout(() => {
              resolve(true)
            }, 1000)
          })
        }
      } catch (err) {
        if (initAttempts > MaxInitializationAttempts)
          rej(`Ωedit server failed to initialize`)
        initAttempts++
      }
    }
    res(serverInfo!)
  })
}
