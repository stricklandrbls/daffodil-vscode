import { describe, it } from 'mocha'
import assert from 'assert'
import * as Att from '../../src/utilities/ByteCategories/BitAttribute.ts'
const ViewportAttributeData = new Uint8Array(256)

class ViewportAttributes {
  private data = new Uint8Array(256)
  maskRange(attribute: Att.BitAttribute, from: number, length: number) {
    this.data.subarray(from, from + length).forEach((byte, i) => {})
    attribute.apply(this.data.subarray(from, from + length))
  }
  maskAt(index: number, byte: Uint16Array, attribute: Att.BitAttribute) {}
  getData(): Uint8Array {
    return this.data
  }
}
interface BitAttributeGroup {}
class TestAttribute implements Att.BitAttribute<Uint8Array> {
  readonly bitLength: number
  readonly bitPos: number
  readonly value: number
  constructor(value: number, bitLength: number, bitPos: number) {
    this.value = value
    this.bitLength = bitLength
    this.bitPos = bitPos
  }

  attributeValue() {
    return this.value
  }
  apply(target: Uint8Array) {
    target.forEach((val, i, target) => {
      target[i] = target[i] | (this.attributeValue() << this.bitPos)
    })
  }
}
describe('Viewport Attributes', () => {
  const VPAttributes = new ViewportAttributes()
  it('Should only mask assigned bits', () => {
    const att1 = new TestAttribute(1, 0, 0)
    const att2 = new TestAttribute(1, 2, 2)
    VPAttributes.maskRange(att1, 0, 16)
    VPAttributes.maskRange(att2, 0, 16)
    VPAttributes.getData()
      .subarray(0, 16)
      .forEach((val, i) => {
        assert.equal(
          val,
          0b00000101,
          `Index ${i}\n\tExpected: ${(0b00000101).toString(2)}\n\tActual: ${val.toString(2)}`
        )
      })
  })
})
describe('Viewport Byte Attributes', () => {
  const VPAttributes = new ViewportAttributes()
  it('Should contain BitAttributes per index', () => {
    const testAttribute = new TestAttribute(2, 2, 0)

    VPAttributes.maskRange(testAttribute, 0, 16)

    VPAttributes.getData()
      .slice(0, 16)
      .forEach((val, i) => {
        assert.equal(
          val,
          val | testAttribute.attributeValue(),
          `Index ${i}\n\tExpected: ${val | testAttribute.attributeValue()}\n\tActual: ${val}`
        )
      })
  })
  it('Should appropriately mask multiple attributes', () => {
    // const zeroAtt = new TestAttribute(2,0)
    // const zeroAtt = new TestAttribute(2,0)
  })
})
