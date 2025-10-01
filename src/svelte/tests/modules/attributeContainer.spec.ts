import {
  type AttributeApplicator,
  type Attribute,
} from '../../src/utilities/ByteCategories/BitAttribute.ts'
import { describe, it } from 'mocha'
import assert from 'assert'
import {
  BitApplicator,
  type AttributeRange,
} from '../../src/utilities/ByteCategories/ViewportBitAttributes.ts'

interface AttributeContainer<T> {
  registerApplicator(applicator: AttributeApplicator<T>)
}
class Container implements AttributeContainer<number> {
  applicators: AttributeApplicator<number>[] = []
  apps: { [K: string]: AttributeApplicator<number> } = {}
  registerApplicator(applicator: AttributeApplicator<number>) {
    console.log(Object.getOwnPropertyDescriptor(applicator, 'name'))
  }
}
const Group1 = new BitApplicator(0, 2)
describe('Attribute Filtering', () => {
  it('Should filter based off an attribute container', () => {})
})
