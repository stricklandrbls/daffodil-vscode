// src/adapters/omega/OmegaServiceAdapter.ts

import {
  getServerInfo,
  IServerHeartbeat,
  IServerInfo,
  startServer,
  stopProcessUsingPID,
} from '@omega-edit/client'
import { APP_DATA_PATH, DataEditorConfig } from 'dataEditor/config'
import { generateLogbackConfigFile } from 'dataEditor/logs'
import {
  DataEditorService,
  EditorServiceEvents,
} from 'dataEditor/core/service/editorService'
import EventEmitter from 'events'
import { Socket } from 'net'
import path from 'path'
import {
  OmegaEditSession,
  onAllSessionsDestroyed,
  sessionCreate,
  SessionCreateOpts,
  sessionDestroy,
} from './sessions'
import { RequestHandler } from 'dataEditor/core/service/requestHandler'
import * as fs from 'fs'
import * as child_process from 'child_process'
import { osCheck } from '../../../../utils'
import { ReadResponse, SaveAsStrategy } from 'dataEditor/core/message/messages'
export type OmegaEditConfigProvider = () => DataEditorConfig &
  OmegaEditServiceConfig

export type OmegaEditVendorOpts = {
  heartbeat?: (hb: IServerHeartbeat) => any
  data: (data: ReadResponse) => any
}
export interface OmegaEditServiceEvents extends EditorServiceEvents {
  connected: (
    subscribers: {
      data: (response: ReadResponse) => any
      heartbeat: (hb: IServerHeartbeat) => any
    },
    saveAsStrategy: SaveAsStrategy
  ) => Promise<OmegaEditSession>
}
export class OmegaEditorAdapter implements DataEditorService {
  private connected = false
  private eventEmitter: EventEmitter = new EventEmitter()
  private serverPid: number = -1

  constructor() {}

  getServiceHandler<OmegaEditSession>(subscriptions: {
    hb: (hb: IServerHeartbeat) => void
    data: (data: ReadResponse) => void
    saveAsStrategy: SaveAsStrategy
  }): Promise<OmegaEditSession> {
    throw new Error('Method not implemented.')
  }
  connect(cfg: DataEditorConfig): Promise<void> {
    return new Promise(async (res, rej) => {
      this.eventEmitter.emit(
        'status',
        `Conencting to Ωedit server on port ${cfg.port}`
      )

      if (!(await checkServerListening({ ...cfg }))) {
        this.serverPid = await startService({
          ...cfg,
        }).catch((err) => {
          this.eventEmitter.emit('error', err)
          return -1
        })
      } else {
        this.serverPid = getExistingPidFile(cfg.port)
      }

      const serverInfo = await testServiceConnection().catch((err) => {
        this.eventEmitter.emit('error', err)
        return undefined
      })

      this.connected = true
      this.eventEmitter.emit('connected', {
        startSession: async (
          subscribers: {
            data: (response: ReadResponse) => any
            heartbeat: (hb: IServerHeartbeat) => any
          },
          saveAsStrategy: SaveAsStrategy
        ) => {
          const sessionOpts: SessionCreateOpts = {
            ...cfg,
            dataSubscriber: subscribers.data,
            heartbeatReceiver: (hb) => {
              subscribers.heartbeat({ ...hb })
            },
            saveAsStrategy: saveAsStrategy,
          }

          const session = await sessionCreate(sessionOpts)

          this.disconnect = async () => {
            this.connected = false
            sessionDestroy(session.sessionId)
          }
          return session
        },
      })

      onAllSessionsDestroyed(() => {
        stopProcessUsingPID(this.serverPid)
      })

      res()
    })
  }

  public on<T extends keyof OmegaEditServiceEvents>(
    event: T,
    listener: (content: OmegaEditServiceEvents[T]) => any
  ) {
    this.eventEmitter.on(event, listener)
  }

  disconnect: () => Promise<void> = () => {
    throw 'No disconnection function set'
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
function getExistingPidFile(serverPort: number): number {
  const pidFile = getPidFile(serverPort)
  const pid = parseInt(fs.readFileSync(pidFile).toString())
  if (isNaN(pid)) throw 'Server is listening but pidfile is invalid'
  try {
    if (
      child_process
        .execSync(
          osCheck(
            `wmic process where processid=${pid} get CommandLine`,
            `ps -p ${pid} -o command=`
          )
        )
        .toString('ascii')
        .toLowerCase()
        .includes('omega-edit')
    ) {
      return pid
    } else {
      fs.unlinkSync(pidFile)
      throw 'Server pidfile has changed process executions'
    }
  } catch (error) {
    // if process doesn't exist, ps returns 1 resulting in command failed error
    fs.unlinkSync(pidFile)
  }
  return -1
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
    const serverPidFile = getPidFile(serviceConfig.port)

    const logConfigFile = generateLogbackConfigFile(
      path.join(APP_DATA_PATH, `serv-${serviceConfig.port}.log`),
      serviceConfig.logLevel,
      serviceConfig.port
    )

    const startupTimeout = setTimeout(() => {
      rej(`Server startup timed out after ${SERVER_START_TIMEOUT} seconds`)
    }, SERVER_START_TIMEOUT * 1000)
    const serverPid = await startServer(
      serviceConfig.port,
      serviceConfig.hostname,
      getPidFile(serviceConfig.port),
      logConfigFile
    )
    if (serverPid === undefined || serverPid <= 0) {
      rej('Server failed to start or PID is invalid')
    } else {
      clearTimeout(startupTimeout)
      res(serverPid)
    }
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

export async function serverStop(serviceConfig: DataEditorConfig) {
  const serverPidFile = getPidFile(serviceConfig.port)
  if (fs.existsSync(serverPidFile)) {
    const pid = parseInt(fs.readFileSync(serverPidFile).toString())
    if (await stopProcessUsingPID(pid)) {
      // vscode.window.setStatusBarMessage(
      //   `Ωedit server stopped on port ${serviceConfig.port} with PID ${pid}`,
      //   new Promise((resolve) => {
      //     setTimeout(() => {
      //       resolve(true)
      //     }, 4000)
      //   })
      // )
      removeDirectory(serviceConfig.checkpointPath)
    } else {
      // Check again if the process has stopped after a short delay
      await new Promise((resolve) => setTimeout(resolve, 500))
      if (!(await stopProcessUsingPID(pid))) {
        // vscode.window.showErrorMessage(
        //   `Ωedit server on port ${omegaEditPort} with PID ${pid} failed to stop`
        // )
      } else {
        // vscode.window.setStatusBarMessage(
        //   `Ωedit server stopped on port ${omegaEditPort} with PID ${pid}`,
        //   new Promise((resolve) => {
        //     setTimeout(() => {
        //       resolve(true)
        //     }, 4000)
        //   })
        // )
        removeDirectory(serviceConfig.checkpointPath)
      }
    }
  }
}

/**
 * Removes a directory and all of its contents
 * @param dirPath path to directory to remove
 */
function removeDirectory(dirPath: string): void {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const curPath = `${dirPath}/${file}`
      if (fs.lstatSync(curPath).isDirectory()) {
        // Recursively remove subdirectories
        removeDirectory(curPath)
      } else {
        // Delete file
        fs.unlinkSync(curPath)
      }
    })

    // Remove empty directory
    fs.rmdirSync(dirPath)
  }
}
