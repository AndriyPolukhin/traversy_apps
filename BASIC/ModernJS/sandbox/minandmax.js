/**
 * GETTING MIN AND MAX
 */

console.log(Math.max(4, 12));
console.log(Math.max(-1, -15));

console.log(Math.min(4, 12));
console.log(Math.min(-1, -15));

// Getting min and max from an array:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  max = Math.max.apply(Math, arr),
  min = Math.min.apply(Math, arr);

console.log('The Min is: ', min);
console.log('The Max is: ', max);

// es6
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  max2 = Math.max(...arr2),
  min2 = Math.min(...arr2);

console.log('the min is: ', min2);
console.log('the max is: ', max2);