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
  IHeartbeatReceiver,
  IServerHeartbeat,
} from '@omega-edit/client'

const HeartbeatTimeFactor = 1000

export class HeartbeatConsoleLogger implements IHeartbeatReceiver {
  readonly id = 'hb-console'
  process(heartbeat: IServerHeartbeat) {}
}

abstract class HeartbeatMediator {
  protected abstract receivers: IHeartbeatReceiver[]
  abstract registerReceiver(recvr: IHeartbeatReceiver): void
  abstract onReceiverRemoved(recvr: IHeartbeatReceiver): void
}
class ServerHeartbeatMediator extends HeartbeatMediator {
  private hbInterval: NodeJS.Timeout | number | undefined = undefined
  private latestHeartbeat: IServerHeartbeat | undefined = undefined
  private IntervalTimeMs = HeartbeatTimeFactor
  protected receivers: IHeartbeatReceiver[] = []
  onReceiverRemoved(recvr: IHeartbeatReceiver) {}
  registerReceiver(recvr: IHeartbeatReceiver): void {
    this.receivers.push(recvr)
    this.updateInterval()
  }
  dispose() {
    clearInterval(this.hbInterval)
    this.receivers = []
  }
  private updateInterval() {
    if (this.hbInterval) clearInterval(this.hbInterval)
    this.IntervalTimeMs =
      this.receivers.length > 0
        ? HeartbeatTimeFactor * this.receivers.length
        : HeartbeatTimeFactor

    this.hbInterval = setInterval(async () => {
      this.latestHeartbeat = await getServerHeartbeatFor(
        this.IntervalTimeMs * 1.2,
        ...this.receivers
      )
      console.log('Got latest heartbeat')
      this.receivers.forEach((rcvr) => {
        rcvr.process(this.latestHeartbeat!)
      })
    }, this.IntervalTimeMs)
  }
}
const DataEditorHeartbeatMediator: ServerHeartbeatMediator =
  new ServerHeartbeatMediator()
export function registerRecevier(rcvr: IHeartbeatReceiver) {
  DataEditorHeartbeatMediator.registerReceiver(rcvr)
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
