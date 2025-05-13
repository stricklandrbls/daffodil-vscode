// import assert from 'assert'
// import { describe, it } from 'mocha'
// export class ViewportData {
//   static Capacity = 128
//   private _data = new Uint8Array(ViewportData.Capacity)
//   private _srcOffset = -1
//   //   private _srcBytesRemaining = -1

//   public update(viewport: ViewportMsg) {
//     this._data = viewport.data
//     this._srcOffset = viewport.srcOffset
//     // this._srcBytesRemaining = viewport.srcBytesRemaining
//   }
//   public at(index: number): number {
//     return this._data[index]
//   }
//   public byteAt(index: number): Byte {
//     const localOffset = index
//     const srcOffset = this._srcOffset + localOffset
//     const offsets: Offset = { viewport: localOffset, src: srcOffset }
//     const value = this._data[localOffset]
//     return {
//       offsets,
//       value,
//     }
//   }
// }
// function _generateData(length: number) {
//   let ret = new Uint8Array(length)
//   for (let i = 0; i < length; i++) ret[i] = i % 256
//   return ret
// }
// describe('Viewport Binary Data', function () {
//   it('Should update internal data from argument', function () {
//     const data = _generateData(ViewportData.Capacity)
//     // vp.update({ data, srcOffset: 0, srcBytesRemaining: 0 })
//     const vp = getViewportFromMsg({
//       data,
//       srcBytesRemaining: 0,
//       srcOffset: 0,
//     })
//     ;[0, 64, 127].forEach((i) => {
//       assert.equal(vp.data[i], data[i])
//     })
//   })
//   it('Should calculate file & viewport offsets', function () {
//     const data = _generateData(ViewportData.Capacity)
//     const vp = getViewportFromMsg({
//       data,
//       srcBytesRemaining: 0,
//       srcOffset: 256,
//     })

//     const expectedByte: Byte = {
//       offsets: { viewport: 10, src: 266 },
//       value: data[10],
//     }

//     assert.deepStrictEqual(expectedByte, vp.data[10])
//   })
// })
