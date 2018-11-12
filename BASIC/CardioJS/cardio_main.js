// CHALLENGE 1: REVERSE A STRING

function reverseString(str) {
  // return str
  //   .split('')
  //   .reverse()
  //   .join('');

  // //////////////////

  // let revString = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i];
  // }
  // return revString;

  // let revString = '';
  // for (let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString;
  // }
  // return revString;

  // // USING A FOR OF LOOP
  // let revString = '';
  // for (let char of str) {

  //   revString = char + revString;
  // }
  // return revString;

  // USING FOREACH
  // let revString = '';
  // str.split('').forEach(char =>
  //   revString = char + revString
  // );
  // return revString;

  // USING REDUCE
  return str.split('').reduce((revString, char) => char + revString, '');

}


// CHALLENGE 2: VALIDATE A PALINDROME

function isPalindrome(str) {
  // let revString = str.split('').reduce((revString, char) => {
  //   return char + revString;
  // }, '');

  // if (revString === str) {
  //   return true;
  // }

  // FIRST
  const revString = str.split('').reverse().join('');

  return revString === str;


}


// CHALLENGE 3: REVERSE AN INTEGER

function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('');
  // return parseInt(revString);
  return parseInt(revString) * Math.sign(int);
}


// CHALLENGE 4: CAPITALIZE LETTERS
function capitalizeLetters(str) {

  // 1. USING A FOR LOOP
  // const strArr = str.toLowerCase().split(' ');
  // for (let i = 0; i < strArr.length; i++) {
  //   strArr[i] = strArr[i]
  //     .substring(0, 1)
  //     .toUpperCase() +
  //     strArr[i].substring(1);
  // }
  // return strArr.join(' ');

  // 2. USING A MAP FUNCTION
  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map(word => word[0].toUpperCase() + word.substr(1))
  //   .join(' ');

  // 3. REGULAR EXPRESSIONS
  return str.replace(/\b[a-z]/gi, char => char.toUpperCase());
}


// CHALLENGE 5: MAX CHARACTER
function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach((char) => {
    if (charMap[char]) {
      charMap[char] = charMap[char] + 1;
    } else {
      charMap[char] = 1;
    }
  });

  for (const char in charMap) {
    debugger;
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

// CHALLENGE 6: FIZZBUZZ
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}




// OUTPUT

// const output = reverseString('hello');
// const output = isPalindrome('racecar');
// const output = reverseInt(-12345);
// const output = capitalizeLetters('andriy and anastasia');
// const output = maxCharacter('anastttttttttasia');
const output = fizzBuzz();
console.log(output);
