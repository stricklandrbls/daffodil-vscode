import { APP_DATA_PATH } from 'dataEditor/config'
import net from 'net'
import path from 'path'
import * as fs from 'fs'
import * as vscode from 'vscode'
import * as os from 'os'
import {
  getClientVersion,
  getServerInfo,
  startServer,
  stopProcessUsingPID,
} from '@omega-edit/client'
import { generateLogbackConfigFile } from '../logs'
import { ServerInfo } from './ServerInfo'

export const SERVER_START_TIMEOUT: number = 15 // in seconds

let serverInfo: ServerInfo = new ServerInfo()

export interface ServerConnection {
  host: string
  port: number
  checkpointDirectory: string
}
export interface ServerInterface {
  isListening: (conn: ServerConnection) => Promise<boolean>
  start: (conn: ServerConnection) => Promise<void>
  stop: (conn: ServerConnection) => Promise<void>
}

export function getServerInterface(): ServerInterface {
  return {
    isListening: checkServerListening,
    start: serverStart,
    stop: serverStop,
  } as ServerInterface
}
function getPidFile(serverPort: number): string {
  return path.join(APP_DATA_PATH, `serv-${serverPort}.pid`)
}
function checkServerListening(conn: ServerConnection): Promise<boolean> {
  return new Promise((resolve) => {
    const socket: net.Socket = new net.Socket()
    socket.setTimeout(2000) // set a 2-second timeout for the connection attempt
    socket.on('connect', () => {
      socket.destroy() // close the connection once connected
      resolve(true) // server is listening
    })
    socket.on('timeout', () => {
      socket.destroy() // close the connection on timeout
      resolve(false) // server is not listening
    })
    socket.on('error', () => {
      resolve(false) // server is not listening or an error occurred
    })
    socket.connect(conn.port, conn.host)
  })
}
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
export async function serverStop(conn: ServerConnection): Promise<void> {
  return new Promise(async (res, rej) => {
    const serverPidFile = getPidFile(conn.port)
    if (fs.existsSync(serverPidFile)) {
      const pid = parseInt(fs.readFileSync(serverPidFile).toString())
      if (await stopProcessUsingPID(pid)) {
        // if dead .pid file exists then extension essentially haults here
        vscode.window.setStatusBarMessage(
          `Ωedit server stopped on port ${conn.port} with PID ${pid}`,
          new Promise((resolve) => {
            setTimeout(() => {
              resolve(true)
            }, 4000)
          })
        )
        removeDirectory(conn.checkpointDirectory)
      } else {
        // Check again if the process has stopped after a short delay
        await new Promise((resolve) => setTimeout(resolve, 500))
        if (!(await stopProcessUsingPID(pid))) {
          vscode.window.showErrorMessage(
            `Ωedit server on port ${conn.port} with PID ${pid} failed to stop`
          )
          rej(
            `Ωedit server on port ${conn.port} with PID ${pid} failed to stop`
          )
        } else {
          vscode.window.setStatusBarMessage(
            `Ωedit server stopped on port ${conn.port} with PID ${pid}`,
            new Promise((resolve) => {
              setTimeout(() => {
                resolve(true)
              }, 4000)
            })
          )
          removeDirectory(conn.checkpointDirectory)
        }
      }
    }
    res()
  })
}
export async function serverStart(conn: ServerConnection): Promise<void> {
  return new Promise(async (res, rej) => {
    await serverStop(conn)
    const serverStartingText = `Ωedit server starting on port ${conn.port}`
    const statusBarItem = vscode.window.createStatusBarItem(
      vscode.StatusBarAlignment.Left
    )
    statusBarItem.text = serverStartingText
    statusBarItem.show()

    let animationFrame = 0
    const animationInterval = 400 // ms per frame
    const animationFrames = ['', '.', '..', '...']
    const animationIntervalId = setInterval(() => {
      statusBarItem.text = `${serverStartingText} ${
        animationFrames[++animationFrame % animationFrames.length]
      }`
    }, animationInterval)
    const config = vscode.workspace.getConfiguration('dataEditor')
    const logLevel =
      process.env.OMEGA_EDIT_SERVER_LOG_LEVEL ||
      process.env.OMEGA_EDIT_LOG_LEVEL ||
      config.get<string>('logLevel', 'info')
    const logConfigFile = generateLogbackConfigFile(
      path.join(APP_DATA_PATH, `serv-${conn.port}.log`),
      logLevel,
      conn.port
    )
    if (!fs.existsSync(logConfigFile)) {
      clearInterval(animationIntervalId)
      statusBarItem.dispose()
      rej(`Log config file '${logConfigFile}' not found`)
      // throw new Error()
    }

    // Start the server and wait up to 10 seconds for it to start
    const serverPid = (await Promise.race([
      startServer(conn.port, conn.host, getPidFile(conn.port), logConfigFile),
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
    clearInterval(animationIntervalId)
    if (serverPid === undefined || serverPid <= 0) {
      statusBarItem.dispose()
      throw new Error('Server failed to start or PID is invalid')
    }
    // this makes sure the server if fully online and ready to take requests
    statusBarItem.text = `Initializing Ωedit server on port ${conn.port}`
    for (let i = 1; i <= 60; ++i) {
      try {
        serverInfo = await getServerInfo()
        break
      } catch (err) {
        statusBarItem.text = `Initializing Ωedit server on port ${conn.port} (${i}/60)`
      }
      // wait 1 second before trying again
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true)
        }, 1000)
      })
    }
    try {
      serverInfo = await getServerInfo()
    } catch (err) {
      statusBarItem.dispose()
      await serverStop(conn)
      throw new Error('Server failed to initialize')
    }
    statusBarItem.text = `Ωedit server on port ${conn.port} initialized`
    const serverVersion = serverInfo.serverVersion
    // if the OS is not Windows, check that the server PID matches the one started
    // NOTE: serverPid is the PID of the server wrapper script on Windows
    if (
      !os.platform().toLowerCase().startsWith('win') &&
      serverInfo.serverProcessId !== serverPid
    ) {
      statusBarItem.dispose()
      throw new Error(
        `server PID mismatch ${serverInfo.serverProcessId} != ${serverPid}`
      )
    }
    const clientVersion = getClientVersion()
    if (serverVersion !== clientVersion) {
      statusBarItem.dispose()
      throw new Error(
        `Server version ${serverVersion} and client version ${clientVersion} must match`
      )
    }

    statusBarItem.text = `Ωedit server v${serverVersion} ready on port ${conn.port} with PID ${serverInfo.serverProcessId}`
    setTimeout(() => {
      statusBarItem.dispose()
    }, 5000)
    res()
  })
}
export function getObtainedServerInfo() {
  return serverInfo
}
