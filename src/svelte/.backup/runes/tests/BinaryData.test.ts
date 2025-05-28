import assert from 'assert'
import { describe, it } from 'mocha'
import {
  Byte,
  ViewportData,
} from '../../../svelte/src/components/sections/data/DataDisplay'
import {
  createViewportConfig,
  displayBytes,
  prependRadixStr,
  ViewportDisplay,
} from '../components/sections/data/ViewportDisplay'

function _generateData(length: number) {
  let ret = new Uint8Array(length)
  for (let i = 0; i < length; i++) ret[i] = i % 256
  return ret
}
describe('Viewport Binary Data', function () {
  const vp = new ViewportData()
  it('Should update internal data from argument', function () {
    const data = _generateData(ViewportData.Capacity)
    vp.update({ data, srcOffset: 0, srcBytesRemaining: 0 })
    ;[0, 64, 127].forEach((i) => {
      assert.equal(vp.at(i), data[i])
    })
  })
  it('Should calculate file & viewport offsets', function () {
    const data = _generateData(ViewportData.Capacity)
    vp.update({ data, srcOffset: 256, srcBytesRemaining: 0 })

    const expectedByte: Byte = {
      offsets: { viewport: 10, src: 266 },
      value: data[10],
    }

    assert.deepEqual(expectedByte, vp.byteAt(10))
  })
})

describe('Viewport Data Displayer', function () {
  const vp = new ViewportData()
  const byteArray = Uint8Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  vp.update({ data: byteArray, srcOffset: 0, srcBytesRemaining: 0 })

  describe('Byte Display Strategy', function () {
    it('Should operate on single or multiple bytes', function () {
      const byteArray = Uint8Array.from([0, 20, 40])
      const byteStrs = displayBytes(16, ...byteArray)
      assert.equal(byteStrs[1], prependRadixStr(16, byteArray[1].toString(16)))
    })
  })
  it('Should accept a display configuration', function () {
    const config = createViewportConfig({ bytesPerLine: 4, lineCount: 4 })
    const display = new ViewportDisplay(vp, config)

    const content = display.get()
    assert.equal(content[0].length, 4)
    assert.equal(content[1][0].value, 4)
    console.log(content)
  })
})
