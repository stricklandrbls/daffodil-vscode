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

import { describe, it } from 'mocha'
import assert from 'assert'
import { VIEWPORT_CAPACITY_MAX } from '../../src/stores/configuration'
import { BitPartitionMaskBuffer, HighlightUpdate } from './highlight'

describe('Highlight Indicators', () => {
    const buffer = new BitPartitionMaskBuffer(11)
    it('should error when registering an existing category', () => {

    })
})
const CatA = { bitPosition: 0, categoryName: 'A' }
const CatB = { bitPosition: 2, categoryName: 'B' }


buffer.registerCategories([CatA, CatB])

buffer.upsertUpdate({
  startOffset: 0,
  endOffset: 10,
  category: CatA,
})

buffer.upsertUpdate({
  startOffset: 4,
  endOffset: 8,
  category: CatB,
})

console.log([...buffer.bytes])
// [1, 1, 1, 1, 5, 5, 5, 5, 5, 1, 1]

buffer.upsertUpdate({
  startOffset: 1,
  endOffset: 9,
  category: 'A',
})

console.log([...buffer.bytes])
// [0, 1, 1, 1, 5, 5, 5, 5, 5, 1, 0]
