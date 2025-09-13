/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  getServerHeartbeatFor,
  HeartbeatRegistry,
  IHeartbeatReceiver,
  IServerHeartbeat,
  stopServerGraceful,
} from '@omega-edit/client'

const HeartbeatTimeFactor = 1000

// export class HeartbeatConsoleLogger implements IHeartbeatReceiver {
//   readonly id = 'hb-console'
//   process(heartbeat: IServerHeartbeat) {}
// }

abstract class HeartbeatMediator {
  protected abstract receivers: IHeartbeatReceiver[]
  abstract registerReceiver(recvr: IHeartbeatReceiver): void
  abstract removeReceiver(recvr: IHeartbeatReceiver): void
}
class ServerHeartbeatMediator extends HeartbeatMediator {
  private hbInterval: NodeJS.Timeout | number | undefined = undefined
  private latestHeartbeat: IServerHeartbeat | undefined = undefined
  private IntervalTimeMs = HeartbeatTimeFactor
  protected receivers: IHeartbeatReceiver[] = []
  constructor(public onDisposal: () => any) {
    super()
    HeartbeatRegistry.OnAllReceiversRemoved(onDisposal)
  }
  removeReceiver(recvr: IHeartbeatReceiver) {
    let filteredRcvrs = this.receivers.filter((rcvr) => {
      if (rcvr.id !== recvr.id) return rcvr
      HeartbeatRegistry.remove(recvr)
    })
    this.receivers = filteredRcvrs
    console.debug('Heartbeat Mediator Removed Receiver')
    console.debug(this.receivers)
    this.updateInterval()
  }
  registerReceiver(recvr: IHeartbeatReceiver): void {
    this.receivers.push(recvr)
    this.updateInterval()
  }
  dispose() {
    if (this.hbInterval) clearInterval(this.hbInterval)
    this.receivers = []
  }
  isActive() {
    return this.hbInterval !== undefined && this.receivers.length > 0
  }
  pause() {
    // HeartbeatRegistry.
  }
  private updateInterval() {
    if (this.receivers.length === 0) {
      this.dispose()
      return
    }

    clearInterval(this.hbInterval)

    this.IntervalTimeMs =
      this.receivers.length > 0
        ? HeartbeatTimeFactor * this.receivers.length
        : HeartbeatTimeFactor
    console.debug(`IntervalTimeMs updated to: ${this.IntervalTimeMs}`)
    console.debug(`\twill timeout in: ${this.IntervalTimeMs * 1.5}ms`)
    this.hbInterval = setInterval(async () => {
      if (this.receivers.length === 0) {
        this.dispose()
        return
      }

      this.latestHeartbeat = await getServerHeartbeatFor(
        this.IntervalTimeMs * 1.5,
        ...this.receivers
      )
      this.receivers.forEach((rcvr) => {
        rcvr.process(this.latestHeartbeat!)
      })
    }, this.IntervalTimeMs)
  }
}
let DataEditorHeartbeatMediator: ServerHeartbeatMediator | undefined = undefined
export function initializeHeartbeats(disposalFn: () => any) {
  DataEditorHeartbeatMediator = new ServerHeartbeatMediator(disposalFn)
}
export function registerRecevier(rcvr: IHeartbeatReceiver) {
  if (!DataEditorHeartbeatMediator)
    throw 'Heartbeat mediator has not been initialized'
  DataEditorHeartbeatMediator.registerReceiver(rcvr)
}
export function removeReceiver(rcvr: IHeartbeatReceiver) {
  if (!DataEditorHeartbeatMediator)
    throw 'Heartbeat mediator has not been initialized'
  DataEditorHeartbeatMediator.removeReceiver(rcvr)
}
export function areHeartbeatsActive() {
  if (!DataEditorHeartbeatMediator) return false
  return DataEditorHeartbeatMediator.isActive()
}
// import {
//   getServerHeartbeat,
//   getServerHeartbeatFor,
//   IHeartbeatReceiver,
//   IServerHeartbeat,
// } from '@omega-edit/client'
// import { HeartbeatInfo } from './HeartBeatInfo'

// const HEARTBEAT_INTERVAL_MS: number = 1000 // 1 second (1000 ms)
// let heartbeatInfo: IServerHeartbeat = new HeartbeatInfo()
// let getHeartbeatIntervalId: NodeJS.Timeout | number | undefined = undefined

// const Receivers: IHeartbeatReceiver[] = []

// export function registerReceiver(recv: IHeartbeatReceiver) {
//   if (getHeartbeatIntervalId) {
//     clearInterval(getHeartbeatIntervalId)
//   }
//   getHeartbeatIntervalId = setInterval(async () => {
//     const intervalTimeMs =
//       Receivers.length > 0
//         ? HEARTBEAT_INTERVAL_MS * Receivers.length
//         : HEARTBEAT_INTERVAL_MS

//     heartbeatInfo = await getServerHeartbeatFor(recv, intervalTimeMs)
//     Receivers.forEach((hbRxer) => {
//       hbRxer.process(heartbeatInfo)
//     })
//   })
//   Receivers.push(recv)
// }
// export function updateHeartbeatInterval(activeSessions: string[]) {
//   if (getHeartbeatIntervalId) {
//     clearInterval(getHeartbeatIntervalId)
//   }
//   getHeartbeatIntervalId =
//     activeSessions.length > 0
//       ? setInterval(async () => {
//           heartbeatInfo = await getServerHeartbeat(
//             activeSessions,
//             HEARTBEAT_INTERVAL_MS * activeSessions.length
//           )
//         })
//       : undefined
// }

// export function getCurrentHeartbeatInfo() {
//   return heartbeatInfo
// }
