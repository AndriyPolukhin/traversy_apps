// Challenge 1: reverse a string
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // 1. Solution with built-in functions
  // return str.split('').reverse().join('');

  // 2. Solution with Decrementing loop:
  // let revString = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   revString += str[i];
  // }
  // return revString;

  // 3. Solution with Incrementing loop:
  // let revString = '';
  // for (let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString;
  // }
  // return revString;

  // 4. Solution using a for of loop:
  // let revString = '';
  // for (let char of str) {
  //   revString = char + revString;
  // }
  // return revString;

  // 5. Solution using a high order Array Method (ex. forEach)
  // // Es 5.
  // let revString = '';
  // str.split('').forEach((char) => {
  //   revString = char + revString;
  // });
  // return revString;

  // // Es 6.
  // let revString = '';
  // str.split('').forEach(char => revString = char + revString);
  // return revString;

  // 6. Solution using a reduce function:
  // return str.split('').reduce((revString, char) => char + revString, '');

  // 7. Solution using a spread operator and a map():
  let arr = [...str];
  console.log(arr);
  let newArr = arr.map((_, i, arr) => {
    return arr[arr.length - 1 - i];
  });
  return newArr.join("");


}

// console.log(
//   reverseString('Anastasia')
// );


// Challenge 2:Validate a palindrome
// Return true if palindrome and false if not
// ex. isPallindrome('rececar') === 'true', isPallindrome('hello') == false

function isPallindrome(str) {
  // 1. Solution using the built-ins
  // const revString = str.split('').reverse().join('');
  // return revString === str;

  // 2. Solution using a for loop and if statement
  let isPal = true;
  let caseStr = str.toLowerCase();
  let arr = caseStr.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.lenght - 1 - i]) {
      isPla = false;
      break;
    }
  }
  return isPal;

}

// console.log(
//   isPallindrome('racecar'),
//   isPallindrome('hello')
// );


// Challenge 3: Reverse an Integer
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revInt = int.toString().split('').reverse().join('');
  return parseInt(revInt) * Math.sign(int);
}

// console.log(
//   reverseInt(827),
//   reverseInt(112)
// );


// Challenge 4: Capitalize a ltter
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') == 'I Love Javascript'
function capitalizeLetters(str) {
  // 1. Using the built ins
  // const strArr = str.toLowerCase().split(' ');
  // for (let i = 0; i < strArr.length; i++) {
  //   strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  // }
  // return strArr.join(' ');

  // 2. Using a map() and built-ins:

  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map(word => word[0].toUpperCase() + word.substr(1))
  //   .join(' ');

  // 3. Using a regular expression
  return str.replace(/\b[a-z]/gi, char => char.toUpperCase());
}

// console.log(capitalizeLetters('anastasia and andriy are perfect for each other'));

// Challenge 4: Max Character
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {
  // 1. Using an object with key -> value pair and a for in loop:
  // const charMap = {};
  // let maxNum = 0;
  // let maxChar = '';

  // str.split('').forEach(function (char) {
  //   charMap[char] ? charMap[char]++ : charMap[char] = 1;
  // });

  // for (let char in charMap) {
  //   if (charMap[char] > maxNum) {
  //     maxNum = charMap[char];
  //     maxChar = char;
  //   }
  // }
  // return maxChar;


  // 2. Solution with a OBJECT, SORT and a LOOP:
  // const sortedStr = str.split('').sort();
  // console.log(sortedStr);
  // const maxChar = {
  //   char: '',
  //   count: 0
  // };
  // const currentChar = {
  //   char: '',
  //   count: 0
  // };


  // sortedStr.forEach(char => {
  //   if (currentChar.char === char) {
  //     currentChar.count++;
  //   } else {
  //     if (maxChar.count < currentChar.count) {
  //       maxChar.char = currentChar.char;
  //       maxChar.count = currentChar.count;
  //     }

  //     currentChar.char = char;
  //     currentChar.count = 0;

  //   }
  // });
  // return maxChar.char;


  // 3. Solution using forEach sort and map:
  let letters = [];
  str.toLowerCase().split('')
    .forEach(l => (letters[l] = letters[l] + 1 || 1));
  console.log(str);
  const sortedLetters = Object.entries(letters)
    .sort((a, b) => a[1] - b[1])
    .map(a => a[0]);
  console.log(sortedLetters);
  return sortedLetters[sortedLetters.length - 1];
}

// console.log(
//   maxCharacter('anastasia'),
//   maxCharacter('andriy')
// );

// Challenge 6: FizzBUZZ
// write a programm that prints all the numbers from 1 to 100.
// for multiplies of 3, instead of the number, print "fizz",
// for multiplies of 5 print "buzz". for numbers which are
// multiplies of both 3 and 5, print "fizzbuzz"

function fizzBuzz() {
  // 1. Solution using a for loop:
  // for (let i = 1; i <= 100; i++) {
  //   if (i % 15 === 0) {
  //     console.log("fizzBuzz");
  //   } else if (i % 3 === 0) {
  //     console.log("fizz");
  //   } else if (i % 5 === 0) {
  //     console.log("Buzz");
  //   } else {
  //     console.log(i);
  //   }
  // }

  // 2. Solution with a for loop II:
  // for (let i = 1; i <= 100; i++) {
  //   let output = '';
  //   if (i % 3 === 0) {
  //     output += 'fizz';
  //   }
  //   if (i % 5 === 0) {
  //     output += 'buzz';
  //   }
  //   console.log(output || i);
  // }

  // 3. Solution using a for loop III with a arary:
  for (let i = 1; i <= 100; i++) {
    console.log([
      (i % 3 === 0 ? 'Fizz' : ''),
      (i % 5 === 0 ? 'Buzz' : '')
    ].join('') || i);
  }
}
fizzBuzz();