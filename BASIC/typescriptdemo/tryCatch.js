// function getElement(arr, pos) {
//   return arr[pos];
// }

// // let arr = [1, 2, 3, 4, 5];
// /*
// try {
//   console.log(getElement(arr, 4));
// } catch (e) {
//   console.log(e.message);
// }
// console.log('The programm continued executing!');
// */
// try {
//   console.log(getElement(arr, 4));
// } finally {
//   console.log('Finally Block');
// }
// console.log('The programm continued executing!');


"use strict";

const arr = [1, 4, 3, 4, 5];
try {
  arr = [4, 2];
  console.log(arr.sort());
} catch (e) {
  console.log(e.message);
} finally {
  console.log(arr.sort());
}