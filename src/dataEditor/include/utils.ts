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
import { getViewportData } from '@omega-edit/client'
import { createHash } from 'crypto'
import { debug } from 'vscode'

export function isDFDLDebugSessionActive(): boolean {
  return (
    debug.activeDebugSession !== undefined &&
    debug.activeDebugSession.type === 'dfdl'
  )
}
export type HashSource = 'local' | 'disk'

export interface HashTarget {
  viewportId: string
  bytes?: Uint8Array
}

export function getHash(
  source: HashSource,
  target: HashTarget
): Promise<string> {
  return new Promise(async (res, rej) => {
    console.debug('Calculating hash...')
    let hashObj = createHash('sha256')

    if (target && target.bytes) {
      const hashStr = hashObj.update(target.bytes).digest().toString()
      res(hashStr)
    } else {
      const vpDataResponse = await getViewportData(target.viewportId)
      const hashStr = hashObj
        .update(vpDataResponse.getData_asU8())
        .digest()
        .toString('hex')
      res(hashStr)
    }
  })
}
