/**
 * THIS IS THE CARDIO JS FILE
 */


// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of teh amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// SOLUTION I - ES5: arguments & for loop
function addAll() {
  var args = Array.prototype.slice.call(arguments);
  var total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

// SOLUTION II - ES6: rest operator & reduce
function addAllNew(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur)
}

// console.log(addAll(2, 5, 6, 7, 5));
// console.log(addAllNew(2, 5, 6, 7, 5));

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a numbe to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
  let total = 0;

  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i < num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}


// console.log(sumAllPrimes(10));

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2,3,4,6,6, 'hello'], 2,6) == [3,4, 'hello']


// SOLUTION I: arguments, indexOf, filter
function seekAndDestroy(arr) {
  // 1. Args Include everything passed to the function
  const args = Array.from(arguments);
  // 2. Arr includes only the array passed to the function
  function filterArr(arr) {
    // Return true if NOT in array
    return args.indexOf(arr) === -1;
  }

  return arr.filter(filterArr);

}
// console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6, 'hello'));

// SOLUTION II: ...rest, filter & includes
function seekAndDestroyNew(arr, ...rest) {
  console.log('Array is:', arr);
  console.log('Rest is', rest);
  return arr.filter(val => !rest.includes(val));
}

// console.log(seekAndDestroyNew([2, 3, 4, 6, 6, 'hello'], 2, 6, 'hello'));

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1 , 160, 180];
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

// SOLUTION: multiple arrays combined with splice
function sortByHeight() {
  // arr1 is needed to hold the position of -1
  const arr1 = [];
  // arr2 is needed to hold all the numbers that are not -1
  const arr2 = [];

  // Using forEach to store the positions and numbers: using val and index
  a.forEach((val, i) => val === -1 ? arr1.push(i) : arr2.push(val));

  // Sort from lowest to highest
  const sortArr = arr2.sort((a, b) => a - b);

  // Now combine the arrays
  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

  return sortArr;

  // console.log('Arr1:', arr1, 'Arr2:', arr2, 'Sorted: ', sortArr);

}

const a = [-1, 150, 190, 170, -1, -1, 160, 180];
// console.log(sortByHeight(a));

// CHALLENGE  5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters('abce') == 'd'
// missingLetters('abcdefghjklmno') = 'i'
// missingLetters('abcdefghiklmnopqrstuvwxyz') == undefined

// SOLUTION: charCodeAr & map & split
function missingLetters(str) {
  // Take the char code number
  let compare = str.charCodeAt(0);
  let missing;

  // Change the string into an array
  str.split('').map((char, i) => {
    if (str.charCodeAt(i) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// console.log(missingLetters('abcdeg'));

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd nubmers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

// SOLUTION: modules and for loop / my
function evenOddSumsMy(arr) {
  let ans = [];
  let even = [];
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i])
    } else {
      odd.push(arr[i]);
    }
  }
  even = even.reduce((acc, cur) => acc + cur);
  odd = odd.reduce((acc, cur) => acc + cur);
  ans.push(even, odd);
  return ans;

}
// console.log(evenOddSumsMy([50, 60, 60, 45, 71]));

// SOLUTION II: forEach and modulus
function evenOddSums(arr) {
  // Init two variables
  let evenSum = 0;
  let oddSum = 0;
  arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));
  return [evenSum, oddSum];
}
console.log(evenOddSums([50, 60, 60, 45, 71]));













