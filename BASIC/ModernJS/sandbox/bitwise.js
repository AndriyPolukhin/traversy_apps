/**
 * BITWISE OPERATORS
 */

// Bitwise or
let a;
a = 0b0011 | 0b1010;
console.log(a === 0b1011);

// Bitwise and
a = 0b0011 & 0b1010

console.log(a === 0b0010);

// Bitwise not
a = ~0b0011;
console.log(a === 0b1100);

// Bitwise xor
a = 0b1010 ^ 0b0011;
console.log(a === 0b1001);

// Bitwise left shift
a = 0b0001 << 1;
console.log(a === 0b0010);
a = 0b0001 << 2;
console.log(a === 0b0100);
a = 0b0001 << 3;
console.log(a === 0b1000);

// Example in improving math operations
let n = 2;
a = 5.4;
let result = (a << n) === Math.floor(a) * Math.pow(2, n);
// console.log('The result is:', result);
a = 5.4 << n;
console.log(a);


// Bitwise right shift
a = 0b1001 >> 1;
console.log(a === 0b0100);
a = 0b1001 >> 2;
console.log(a === 0b0010);
a = 0b1001 >> 3;
console.log(a === 0b0001);
console.log('Zero-fill right shift:')
a = 0b1001 >>> 1;
console.log(a === 0b0100);
a = 0b1001 >>> 2;
console.log(a === 0b0010);
a = 0b1001 >>> 3;
console.log(a === 0b0001);

// A negative 32bit value always has the left most bit on:
a = 0b11111111111111111111111111110111 | 0;
console.log(a);
b = a >> 2;
console.log(b);
b = a >>> 2;
console.log(b);

// Right shift on positive numbers is the equivalent of dividing by the Math.pow(2,n) and flooring the result:
console.log('Example of positive right shift:')
a = 256.67;
n = 4;
result = (a >> n) === Math.floor(Math.floor(a) / Math.pow(2, n));
console.log(result);
a = a >> n;
console.log(a)

result = (a >>> n) === Math.floor(Math.floor(a) / Math.pow(2, n))
console.log(result);
a = a >>> n;
console.log(a)

// Right shift zero fill(>>>)
a = -256.67;
result = (a >>> n) === Math.floor(Math.floor(a) / Math.pow(2, n));
console.log(result);


a |= b; // same as: a = a | b;
a ^= b; // same as: a = a ^ b;
a &= b; // same as: a = a & b;
a >>= b; // same as: a = a >> b;
a >>>= b; // same as: a = a >>> b;
a <<= b; // same as: a = a << b;