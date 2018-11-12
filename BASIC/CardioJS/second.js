// CHALLENGE 1: LONGEST WORD
function longestWord(sen) {
  // 1. Take out the punctuation and separate into array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  // 2. Sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  // 3. If mutliple words, put into array
  const longestWordArr = sorted.filter(word => word.length === sorted[0].length
  );

  // 4. Check if more than one array value
  if (longestWordArr.length === 1) {
    // Return the word
    return longestWordArr[0];
  }
  return longestWordArr;

}

// CHALLENGE 2: ARRAY CHUNKING
function chunkArray(arr, len) {
  /*
  // I. Solution 1: While Loop

  // 1. Initialize a chunk array
  const chunkedArr = [];
  // 2. Set index
  let i = 0;
  // 3. Loop while index is less than the array length
  while (i < arr.length) {
    // 3.1 Slice out from the indesx to the index + the chunk length
    // and push on to the chunked array
    chunkedArr.push(arr.slice(i, i + len));
    // 3.2. Increment i by the chunk length
    i += len;
  }
  return chunkedArr;
  */
  // II. Solution 2: ForEACH

  // 1. Init the array
  const chunkedArr = [];
  // 2. Loop through arr
  arr.forEach((val) => {
    // 2.1 Get the last elements
    const last = chunkedArr[chunkedArr.length - 1];
    // 2.2. Check if there is a last and if the last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }

    // console.log(chunkedArr);
    // console.log(last);
  });
  return chunkedArr;

}

// CHALLENGE 3: FLATTEN ARRAY
function flattenArray(arrays) {
  /*
  // I. Solution with reduce
  return arrays.reduce((a, b) =>  a.concat(b));
  */
  // II. Solution with apply
  // return [].concat.apply([], arrays);

  // III. Solution using spread operator
  return [].concat(...arrays);
}


// CHALLENGE 4: ANAGRAM
function isAnagram(str1, str2) {
  // I. Solution
  return formatStr(str1) === formatStr(str2);
}

// Helper function for the Anagram
function formatStr(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}


// CHALLENGE 5: LETTER CHANGES
function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === 'z') {
      return 'a';
    }
    return String.fromCharCode(char.charCodeAt() + 1);

  });
  newStr = newStr.replace(/a|e|i|o|u|y/gi, (vowel) => vowel.toUpperCase());
  return newStr;
}

// OUTPUTS
// const output = longestWord('andriy and anastasia, are living together with alexandra');
// const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
// const output = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
// const output = isAnagram('elbow', 'below');
// const output = isAnagram('Dormitory', 'dirtyroom##');
const output = letterChanges('Hello There Anastasia');

console.log(output);
