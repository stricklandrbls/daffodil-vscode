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
  getServerHeartbeat,
  IServerHeartbeat,
  IServerInfo,
} from '@omega-edit/client'

export type HeartbeatReceiver = (hb: IServerHeartbeat) => any
const HEARTBEAT_INTERVAL_MS: number = 1000 // 1 second (1000 ms)

let getHeartbeatIntervalId: NodeJS.Timeout | number | undefined = undefined
let currentHeartbeat: IServerHeartbeat | undefined = undefined
let receviers: Map<string, HeartbeatReceiver> = new Map()

export function updateHeartbeatInterval() {
  if (getHeartbeatIntervalId) {
    clearInterval(getHeartbeatIntervalId)
    if (receviers.size === 0) return
  }
  getHeartbeatIntervalId = setInterval(async () => {
    currentHeartbeat = await getServerHeartbeat(
      Array.from(receviers.keys()),
      HEARTBEAT_INTERVAL_MS * receviers.size
    )
    receviers.forEach((rx) => {
      rx(currentHeartbeat!)
    })
  }, HEARTBEAT_INTERVAL_MS * receviers.size)
}
export function unregisterHeartbeatReceiver(id: string) {
  receviers.delete(id)
  updateHeartbeatInterval()
}
export function unregisterAllHeartbeatReceivers() {
  receviers.clear()
  clearInterval(getHeartbeatIntervalId)
  getHeartbeatIntervalId = undefined
}
export function registerHeartbeatReceiver(
  id: string,
  receiver?: HeartbeatReceiver
) {
  if (getHeartbeatIntervalId) {
    clearInterval(getHeartbeatIntervalId)
  }
  receviers.set(id, receiver ? receiver : () => {})

  updateHeartbeatInterval()
}
export function getCurrentHeartbeatInfo() {
  return currentHeartbeat
}
