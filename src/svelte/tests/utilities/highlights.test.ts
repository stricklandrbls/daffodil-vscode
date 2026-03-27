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

function* range(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    yield i
  }
}


class ViewportDataHighlights {
  protected highlightMarker: Uint8Array
  protected categories: Map<number, HighlightCategory> = new Map()
  protected _partitions: Set<Partitions> = new Set()
  protected lastMarkerUpdates: Partitions[] = []

  constructor(
    readonly bitLength: number,
    protected initialValue: number = 0
  ) {
    if (bitLength > 8) throw `Bit Length ${bitLength} exceeds max value of 8`
    this.highlightMarker = new Uint8Array(VIEWPORT_CAPACITY_MAX).fill(
      initialValue
    )
  }

  public reset() {
    this.highlightMarker = new Uint8Array(VIEWPORT_CAPACITY_MAX).fill(this.initialValue)
  }
  public addCategory(...category: HighlightCategory[]) {
    for(const cat of category){

    if (this.categories.get(cat.bitPos))
      throw `A category at bit ${cat.bitPos} already exists: ${this.categories.get(cat.bitPos)!.name}`
    this.categories.set(cat.bitPos, cat)
    }
  }
  public removeCategoryAt(bitPos: number) {
    this.categories.delete(bitPos)
  }
  public set(highlight: HighlightUpdate) {}
  public getAt(offset: number) {
    return this.highlightMarker[offset]
  }
  public getRange(start: number, length: number){
    return Array.from(this.highlightMarker.subarray(start, start + length))
  }
  public getCategories(): HighlightCategory[]{
    const pairs = this.categories.entries()
    let ret = []
    for(const [_, category] of pairs){
        ret.push(category)
    }
    return ret
  }
  public getAll(): readonly number[] {
    return Array.from(this.highlightMarker)
  }
  public update(...update: HighlightUpdate[]) {
    const partitions = this.partitionRanges(update)
    this._partitions
    console.log(partitions)
    for(const part of partitions){
        this.highlightMarker.subarray(part.start, part.end+1).forEach((byte, i) => {
            this.highlightMarker[part.start + i] = part.bitwiseOp(byte)
        })
    }

  }
  public clearRange(catPart: Partitions){
    this.highlightMarker.subarray(catPart.start, catPart.end + 1).forEach((value, i) =>{
        this.highlightMarker[catPart.start + i] &= ~value
    })
    // data[i] &= this.categoryMask(category) ^ 0xff
  }
public partitionRanges(ranges: HighlightUpdate[]): Partitions[] {
  if (ranges.length === 0) return []

  // [16, 32, 50, 64]
  const boundaries = [...new Set(
    ranges.flatMap(r => [r.start, r.end])
  )].sort((a, b) => a - b)
  
  const partitions: Partitions[] = []
  ranges.sort((a, b) => a.start - b.start)

  for (const range of ranges) {
    // console.log(range)
    // const lastUpdate = this._categories.get(range.markerId.bitPos)?.prevPart
    let clearStart = 0
    let clearEnd = 0

    // if(lastUpdate){
    //         clearStart = lastUpdate.start < range.start ? lastUpdate.start : -1
    //         clearEnd = lastUpdate.end > range.end ? lastUpdate.end : -1
        
    //     this.clearRange({start: clearStart, end: clearEnd, types: [range.markerId]})
    // }
    for (let i = 0; i < boundaries.length - 1; i++) {
      const start = boundaries[i]
      const end = boundaries[i + 1]
      if (range.start <= start && range.end >= end) {
        let partIdx = partitions[i]
        if(partIdx){
            partIdx.types.push(range.markerId)
        }
        else{
        partitions.push({
            start,
            end,
            types: [range.markerId],
            bitwiseOp: (byte) => { return -1 }
        })

        }
      }
    }
    
  }
  partitions.forEach(part => {
    let partsStr = ""
    let catsPos:number[] = []

    part.types.forEach(cat => {
        partsStr += cat.name
        catsPos.push(cat.bitPos)
    })
    part.bitwiseOp = (byte) => {
        catsPos.forEach(pos=>{
            byte |= (1 << pos)
        })
        return byte
    }
  })
  this.lastMarkerUpdates = partitions
  return partitions
}
}
describe('[UI] Byte Highlighting', () => {
  it('Should error if bit length exceeds 32 bit', () => {
    assert.throws(() => {
      const highlights = new ViewportDataHighlights(33)
    })
  })
  it("Should be able to add multiple or single categories at once", ()=>{
        const highlights = new ViewportDataHighlights(8)
    const categoryA: HighlightCategory = {
      name: 'A',
      bitPos: 0,
    }
    const categoryB: HighlightCategory = {
      name: 'b',
      bitPos: 1,
    }
    highlights.addCategory(categoryA, categoryB)
    highlights.getAll().forEach
  })
  it("should provide registered categories", () => {
        const highlights = new ViewportDataHighlights(8)
    const categoryA: HighlightCategory = {
      name: 'A',
      bitPos: 0,
    }
    const categoryB: HighlightCategory = {
      name: 'b',
      bitPos: 1,
    }
    highlights.addCategory(categoryA, categoryB)
    const categories = highlights.getCategories()
    assert(categories.includes(categoryA))
    assert(categories.includes(categoryB
    ))
  })
  it('Should error when categories overlap', () => {
    const highlights = new ViewportDataHighlights(8)
    const categoryA: HighlightCategory = {
      name: 'A',
      bitPos: 0,
    }
    const categoryB: HighlightCategory = {
      name: 'b',
      bitPos: 0,
    }

    highlights.addCategory(categoryA)
    assert.throws(() => {
      highlights.addCategory(categoryB)
    })
  })
  it('should correctly set highlight markers upon construction', () => {
    const highlights = new ViewportDataHighlights(8, 2)
    highlights.getAll().forEach((byteValue, index) => {
      assert.equal(byteValue, 2)
    })
  })

  describe('Byte Marker Updating', () => {
    const highlights = new ViewportDataHighlights(8, 0)
    const categoryA: HighlightCategory = {
      bitPos: 0,
      name: 'A',
    }
    const categoryB: HighlightCategory = {
      bitPos: 2,
      name: 'B',
    }

    it('Should correctly bitwise operate when updating', () => {
      const updateA: HighlightUpdate = {
        start: 32,
        end: 64,
        markerId: categoryA,
      }
      const updateB: HighlightUpdate = {
        start: 16,
        end: 50,
        markerId: categoryB,
      }
      highlights.update(updateA, updateB)
      const markers = highlights.getRange(0, 128)
      console.log(markers)
      assert.equal(markers[0], 0, `markers[0] != 0`)
      assert.equal(markers[updateA.start], 5,`markers[${updateA.start}] != 5`)
      assert.equal(markers[updateA.end], 1,`markers[${updateA.end}] != 1`)
      assert.equal(markers[updateB.start], 4,`markers[${updateB.start}] != 4`)
    })
    it("Should clear and set categories upon length changes", () => {
        highlights.reset()

        const category: HighlightCategory = {
            bitPos: 2,
            name: 'A'
        }

        highlights.addCategory(category)

        const updateA: HighlightUpdate = {
            end: 10,
            markerId: category,
            start: 0
        }

        highlights.update(updateA)
        updateA.start = 3
        updateA.end = 6

        highlights.update(updateA)
        const markers = highlights.getRange(0,16)
        console.log(markers)
    })
//   it("should properly clear a category range", () => {
//     highlights.reset()
//           const updateA: HighlightUpdate = {
//         start: 32,
//         end: 64,
//         markerId: categoryA,
//       }
//       const updateB: HighlightUpdate = {
//         start: 16,
//         end: 50,
//         markerId: categoryB,
//       }
//       highlights.update(updateA, updateB)
//       updateA.start = 40
//     //   highlights.update(updateA)
//     //   assert.equal(highlights.getAll()[updateA.start], 4)
//     highlights.clearRange({})
//     console.log(partitions)
//   })
  })
})
