// function throwString() {
//   // generate an exception with a String value
//   throw 'some exception';
// }

// function throwFalse() {
//   // generate an exception with a boolean value of false
//   throw false;
// }

// function throwNumber() {
//   // generate an exception with a Number value of -1
//   throw -1;
// }


// // 1.
// try {
//   throwString();
// } catch (e) {
//   console.log(e);
// }

// // 2.
// try {
//   throwFalse();
// } catch (e) {
//   console.log(e);
// }

// // 3.
// try {
//   throwNumber();
// } catch (e) {
//   console.log(e);
// }

// // 4.
// const input = "This is a Custom Error";

// function throwMyError() {
//   // generate exception with a value from input
//   throw new Error(input);
// }

// function main() {
//   try {
//     throwMyError();
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// main();

// Program

function getValue(arr, pos) {
  if (pos < 0) {
    throw new Error("Index Underflow: " + pos);
  }

  let len = arr.length;

  if (pos >= len) {
    throw new Error("Index overflow: " + pos);
  }
  return arr[pos];
}

function main() {
  let index;
  const arr = [1, 2, 3, 4, 5];
  try {
    index = 5;
    console.log(getValue(arr, index));
  } catch (e) {
    console.log(e.message);
  }

  try {
    index = 2;
    console.log(getValue(arr, index));
  } catch (e) {
    console.log(e.message);
  }

  try {
    index = -3;
    console.log(getValue(arr, index));

  } catch (e) {
    console.log(e.message);
  }
}

main();