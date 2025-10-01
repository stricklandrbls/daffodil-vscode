// import * as Attributes from '../../src/utilities/ByteCategories/index.ts'
import { describe, it } from 'mocha'
import assert from 'assert'
import {
  type Attribute,
  ViewportBitAttributes,
} from '../../src/utilities/ByteCategories/index.ts'

const IsSelected: Attribute<number> = {
  attributeValue: (): number => {
    return 0b01
  },
}
const SelectedCSS: Attribute<string> = {
  attributeValue: function (): string {
    return 'selected'
  }
}

const SearchResultAttribute: Attribute<number> = {
  attributeValue: (): number => {
    return 0b10
  },
}

const mockSelection = (from: number, to: number) => {
  return { from, to }
}
describe('Viewport Bit Attributes', () => {
  const VPAttributes = new ViewportBitAttributes()

  it('Should be applied through an applicator', () => {
    const selectedIndices = mockSelection(0, 16)
    VPAttributes.setAttribute(IsSelected, { ...selectedIndices })
    VPAttributes.data.subarray(0, 16).forEach((val) => {
      assert.equal(val, 0b1)
    })
  })

  it('Should be able to applied multiple attributes', () => {
    const searchIndicies = { from: 2, to: 8 }
    VPAttributes.setAttribute(SearchResultAttribute, {
      ...searchIndicies,
    })
    VPAttributes.data.subarray(0, 16).forEach((val, i) => {
      if (i >= searchIndicies.from && i <= searchIndicies.to)
        assert.equal(
          val,
          0b0011,
          `Index (${i})\n\tExpected 0b0011\n\tActual ${val.toString(2)}`
        )
      else
        assert.equal(
          val,
          0b01,
          `Index (${i})\n\tExpected 0b0001\n\tActual ${val.toString(2)}`
        )
    })
  })

  it('Should clear a specific attribute while retaining others', () => {
    const clearIndicies = { from: 0, to: 32 }
    VPAttributes.removeAttribute(IsSelected)
    VPAttributes.data.forEach((val, i) => {
      assert.equal(val, val & ~0b1, i.toString())
    })
  })

  it('Should be able to clear an attribute with a range', () => {
    const clear = { from: 2, to: 4 }
    VPAttributes.removeAttribute(SearchResultAttribute, clear)
    VPAttributes.data.subarray(clear.from, clear.to).forEach((val, i) => {
      assert.equal(val, val & ~SearchResultAttribute.attributeValue())
    })
  })
  it('Should define a value characteristic for a given type', () => {})
})

interface AttributeProcessor<T, R>{
  
}
interface AttributeFilter<T>{
  matches(val: T, value: Attribute<T>): boolean
}
const SelectedFilter: AttributeFilter<number> = {
  matches: function (val: number, value: Attribute<number>): boolean {
    return val == value.attributeValue()
  }
}
describe("Attribute Processor", ()=>{
  const VPAttributes = new ViewportBitAttributes()
  it("Should read bit attributes and output css attributes", ()=>{
    VPAttributes.setAttribute(IsSelected, {from: 0, to: 8})
    VPAttributes.data.subarray(0, 16).forEach((val, i) =>{

    })
  })
})
