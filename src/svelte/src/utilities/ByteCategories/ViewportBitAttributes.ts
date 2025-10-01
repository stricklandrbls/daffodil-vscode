import type { Attribute, AttributeApplicator } from './BitAttribute.ts'

export type AttributeRange = { from: number; to: number }

export class BitApplicator implements AttributeApplicator<Uint8Array> {
  bitPos: number
  bitLength: number

  constructor(bitPos: number, bitLength: number) {
    this.bitLength = bitLength
    this.bitPos = bitPos
  }
  apply<T>(
    attribute: Attribute<T extends number ? T : never>,
    to: Uint8Array<ArrayBufferLike>
  ): void {
    to.forEach((val, i) => {
      to[i] = (val | attribute.attributeValue()) << this.bitPos
    })
  }
  clear<T>(attribute: Attribute<T extends number ? T : never>, to: Uint8Array) {
    to.forEach((val, i) => {
      to[i] = (val & ~attribute.attributeValue()) << this.bitPos
    })
  }
}

export class ViewportBitAttributes {
  group1 = new BitApplicator(0, 2)
  data = new Uint8Array(32)
  setAttribute(attribute: Attribute<number>, range: AttributeRange) {
    this.group1.apply(attribute, this.data.subarray(range.from, range.to + 1))
  }
  removeAttribute(attribute: Attribute<number>, range?: AttributeRange) {
    range
      ? this.group1.clear(
          attribute,
          this.data.subarray(range.from, range.to + 1)
        )
      : this.group1.clear(attribute, this.data.subarray(0))
  }
  removeAll(attribute: Attribute<number>) {}
}
