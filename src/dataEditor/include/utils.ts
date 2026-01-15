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
  getComputedFileSize,
  getSegment,
  getViewportData,
} from '@omega-edit/client'
import { createHash } from 'crypto'
import { VIEWPORT_CAPACITY_MAX } from 'svelte/src/stores/configuration'
import { debug } from 'vscode'

export function isDFDLDebugSessionActive(): boolean {
  return (
    debug.activeDebugSession !== undefined &&
    debug.activeDebugSession.type === 'dfdl'
  )
}
export type HashSource = 'local' | 'disk'
export type HashArgs = { [K in HashSource]: HashParams[K] }

export interface HashParams {
  local: {
    viewport: {
      bytesRx: Uint8Array
    }
  }
  disk: {
    viewport: {
      sessionId: string
      offset: number
      length: number
    }
  }
}
export interface HashTarget {
  viewportId: string
  bytes?: Uint8Array
}
export interface HashParam extends HashArgs {
  local: {
    viewport: {
      bytesRx: Uint8Array
    }
  }
  disk: {
    viewport: {
      sessionId: string
      offset: number
      length: number
    }
  }
  // wholeFile: {
  //   filePath: string
  // }
  // selection: {
  //   viewportId: string
  //   startOffset: number
  //   length: number
  // }
  // viewport: {
  //   id: string
  //   offset: number
  //   length: number
  // }
}
export type HashResponse = {
  [K in HashSource]: { [T in keyof HashParam[K]]: string }
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

const WHOLE_FILE_READ_SIZE = 65535

export function getWholeFileHash(sessionId: string): Promise<string> {
  return new Promise(async (res, rej) => {
    const sessionFileSize = await getComputedFileSize(sessionId)
    const readIterCount = sessionFileSize / WHOLE_FILE_READ_SIZE

    let hashObj = createHash('sha256')
    let dataSegment = new Uint8Array(WHOLE_FILE_READ_SIZE)

    for (let i = 0; i < readIterCount; i++) {
      console.debug(
        `Reading session file segment:\n\tid: ${sessionId}\n\tOffset: ${i * WHOLE_FILE_READ_SIZE}\n\tLength: ${WHOLE_FILE_READ_SIZE}`
      )
      dataSegment = Uint8Array.from(
        await getSegment(
          sessionId,
          i * WHOLE_FILE_READ_SIZE,
          WHOLE_FILE_READ_SIZE
        )
      )
      hashObj.update(dataSegment)
    }

    res(hashObj.digest().toString('hex'))
  })
}
export function getHashFor<S extends HashSource, T extends keyof HashParam[S]>(
  source: S,
  target: T,
  opts: HashParam[S][T]
): Promise<string> {
  return new Promise(async (res, rej) => {
    if (source == 'disk') {
      if (target == 'viewport') {
        const { sessionId, length, offset } =
          opts as HashArgs['disk']['viewport']
        const data = await getSegment(sessionId, offset, length)
        let hashObj = createHash('sha256')
        hashObj.update(data)
        res(hashObj.digest().toString('hex'))
      }
    } else {
      if (target == 'viewport') {
        const { bytesRx } = opts as HashArgs['local']['viewport']
        let hashObj = createHash('sha256')
        hashObj.update(bytesRx)
        res(hashObj.digest().toString('hex'))
      }
    }
  })
}
/**
 * ### Data Hashes
 * Obtain data hashes for both **local** and **on-disk** data for the following requests:
 *  - Whole file
 *  - Data selection
 *  - Viewport
 */
// function testusage() {
//   /* In-memory hashes */
//   const t = getHashFor('local', 'viewport', {})
//     // viewport: getHashFor('local', 'viewport', { id: 'abcd' }),

// }
