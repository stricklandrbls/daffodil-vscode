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
}
class ServerHeartbeatMediator extends HeartbeatMediator {
  private hbInterval: NodeJS.Timeout | number | undefined = undefined
  private latestHeartbeat: IServerHeartbeat | undefined = undefined
  private IntervalTimeMs = HeartbeatTimeFactor
  protected receivers: IHeartbeatReceiver[] = []
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
export function registerRecevier(rcvr: IHeartbeatReceiver): () => any {
  DataEditorHeartbeatMediator.registerReceiver(rcvr)
  return DataEditorHeartbeatMediator.dispose
}
