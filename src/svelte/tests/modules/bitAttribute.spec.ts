import * as Attributes from '../../src/utilities/ByteCategories/BitAttribute.ts'
import { describe, it } from 'mocha'
import assert from 'assert'

const IsSelected: Attributes.Attribute<number> = {
  attributeValue: (): number => {
    return 0b01
  },
}
const SearchResultAttribute: Attributes.Attribute<number> = {
  attributeValue: (): number => {
    return 0b10
  },
}

class BitApplicator implements Attributes.AttributeApplicator<Uint8Array> {
  bitPos: number
  bitLength: number

  constructor(bitPos: number, bitLength: number) {}
  apply<T>(
    attribute: Attributes.Attribute<T extends number ? T : never>,
    to: Uint8Array<ArrayBufferLike>
  ): void {
    to.forEach((val, i) => {
      to[i] = (val | attribute.attributeValue()) << this.bitPos
    })
  }
  clear<T>(
    attribute: Attributes.Attribute<T extends number ? T : never>,
    to: Uint8Array
  ) {
    to.forEach((val, i) => {
      to[i] = (val & ~attribute.attributeValue()) << this.bitPos
    })
  }
}
type AttributeRange = { from: number; to: number }
class ViewportBitAttributes {
  group1 = new BitApplicator(0, 2)
  data = new Uint8Array(32)
  setAttribute(attribute: Attributes.Attribute<number>, range: AttributeRange) {
    this.group1.apply(attribute, this.data.subarray(range.from, range.to + 1))
  }
  removeAttribute(
    attribute: Attributes.Attribute<number>,
    range?: AttributeRange
  ) {
    range
      ? this.group1.clear(
          attribute,
          this.data.subarray(range.from, range.to + 1)
        )
      : this.group1.clear(attribute, this.data.subarray(0))
  }
  removeAll(attribute: Attributes.Attribute<number>) {}
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
