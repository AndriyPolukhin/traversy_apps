/**
 * Little/Big Endian for types arrays when using bitwise operators
 */

var isLittleEndian = true;
(() => {
  var buf = new ArrayBuffer(4);
  var buf8 = new Uint8ClampedArray(buf);
  var data = new Uint32Array(buf);
  data[0] = 0x0F000000;
  if (buf8[0] === 0x0f) {
    isLittleEndian = false;
  }
})();

var myNum = 0x11223344 | 0;
var buf = new ArrayBuffer(4);
var data8 = new Uint8ClampedArray(buf);
var data32 = new Uint32Array(buf);
data32[0] = myNum;

console.log(data8[0].toString(16));
console.log(data8[1].toString(16));
console.log(data8[2].toString(16));
console.log(data8[3].toString(16));


var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
// To speed up read and write from the image buffer you can create a buffer view that is
// 32 bits allowing you to read/write a pixel in a single operation
var buf32 = new Uint32Array(imgData.data.buffer);
// Mask out Red and Blue channels
var mask = 0x00FF00FF;// bigEndian pixel channels Red,Green,Blue,Alpha
if (isLittleEndian) {
  mask = 0xFF00FF00;  // littleEndian pixel channels Alpha,Blue,Green,Red
}
var len = buf32.length;
var i = 0;
while (i < len) { // Mask all pixels
  buf32[i] &= mask; //Mask out Red and Blue
}

ctx.putImageData(imgData);