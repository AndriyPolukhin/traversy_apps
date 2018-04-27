// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    // 1. Solution with built-in functions:
        /*
        const strArr = str.split('');
        strArr.reverse();
        return strArr.join('');
         return str
            .split('')
            .reverse()
            .join('');
        */
    // 2. Solution with a Decrementing loop:
        /*
        let revString = '';
        for(let i = str.length - 1; i >= 0; i--) {
            revString = revString + str[i];
        }
        return revString;
        */
    // 3. Solution with a Incrementing Loop:
        /*
            let revString = '';
            for(let i = 0; i <= str.length - 1; i++) {
                revString = str[i] + revString;
            }
            return revString;
        */
    // 4. Solution using a for of loop:
        /*    
            let revString = '';
            for (let char of str) {
                revString = char + revString;
            }
            return revString;
        */

    // 5. Solution using a high order Array method (ex. forEach) :
            
        //ES 5:
        /*
            let revString = '';
            str.split('').forEach(function(char) {
                revString = char + revString;
            });
            return revString;
        */
       // ES 6:
       /*
            let revString = '';
            str.split('').forEach(char => revString = char + revString);
            return revString; 
        */
    // 6. Solution using a reduce function:
        /*    
        return str.split('').reduce((revString, char) => char + revString, '');
        */
    // 7. Solution using a spread operator and a map(): 
            let arr = [...str];
            console.log(arr);
            let newArr = arr.map((_, i, arr) => {
                return arr[arr.length - 1 - i];
            });
            return newArr.join("");

}


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPallindrome('racecar') === 'true', isPallindrome('hello') == false

function isPallindrome(str) {

    // 1. Solution using the buil-ins:
        /*
            const revString = str.split('').reverse().join('');
            return revString === str;
        */
    // 2. Solution using a for loop and an if statement:
        let isPali = true;
        let caseStr = str.toLowerCase();
        let arr = caseStr.split('');
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== arr[arr.length - 1 - i]) {
                isPali = false;
                break;
            }
        }
        return isPali;

}   


// CHALLENGE 3: REVERSE A INTEGER
// Return an integer in reverse
// ex. reverseInt(521) == 125

function reverseInt(int) {
    const revString = int.toString().split('').reverse('').join('');
    return parseInt(revString) * Math.sign(int);
}


// CHALLENGE 4: CAPITALIZE LETTERS
// Retrun a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascropt') == 'I Love Javascript'

function capitalizeLetters(str) {
    // 1. Using a for loop and built-ins:
        /*
            const strArr = str.toLowerCase().split(' ');
            for (let i = 0; i < strArr.length; i++) {
                strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
            }
            return strArr.join(' ');
        */
    // 2. Using a map() and buil-ins:
        /*
            return str
                .toLowerCase()
                .split(' ')
                .map(word => word[0].toUpperCase() + word.substr(1))
                .join(' ');
        */
    // 3. Using a Regular Expression:
            return str.replace(/\b[a-z]/gi, char => char.toUpperCase());


    }

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {
    // 1. Using an object with key -> value pair and a for in loop:
    /*
        const charMap = {};
        let maxNum = 0;
        let maxChar = '';

        str.split('').forEach(function (char) {
            charMap[char] ? charMap[char]++ : charMap[char] = 1;
        });
        
        for (let char in charMap) {
            // debugger; 
            // node inspect cardio_1.js
            // c - to continue; repl to evaluate mode;
            if (charMap[char] > maxNum) {
                maxNum = charMap[char];
                maxChar = char;
            }
        }
        return maxChar;
    */
    // 2. Solution with a Sort and a loop:
        /*
            const sortedStr = str.split('').sort();
            const maxChar = {char: '', count: 0};
            const currentChar = {char: '', count: 0};

            sortedStr.forEach(char => {
                if (currentChar.char === char) {
                    currentChar.count++;
                } else {
                    if (maxChar.count < currentChar.count) {
                        maxChar.char = currentChar.char;
                        maxChar.count = currentChar.count;
                    }
                    currentChar.char = char;
                    currentChar.count = 0;
                }
            });
            return maxChar.char;
        */
    // 3. Solution using forEach sort and map:
            let letters = {};
            str
                .toLowerCase()
                .split('')
                .forEach(l => (letters[l] = letters[l] + 1 || 1));
            const sortedLetters = Object.entries(letters)
                .sort((a, b) => a[1] - b[1])
                .map(a => a[0]);
            return sortedLetters[sortedLetters.length - 1];

}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers form 1 to 100.
// For multiplies of 3, instaed of the number, print "Fizz",
// for multiplies of 5 print "Buzz". For numbers which are 
// multiplies of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
    // 1. Solution using a for loop:
    /*
        for (let i = 1; i <= 100; i++) {
            if (i % 15 === 0) {
                console.log("FizzBuzz");
            } else if (i % 3 === 0) {
                console.log('Fizz');
            } else if ( i % 5 === 0) {
                console.log("Buzz");
            } else {
                console.log(i);
            }
        }
    */
    // 2. Solution using a for loop II:
    /*
        for (let i = 1; i <= 100; i++) {
            let output = '';
            if (i % 3 === 0) {
                output += 'fizz';
            }
            if (i % 5 === 0) {
                output += 'buzz';
            }
            console.log(output || i);
        }  
    */
    // 3. Solution using a for loop III with a array:
    for (let i = 1; i <= 100; i++) {
        console.log([
            (i % 3 === 0 ? 'Fizz' : ''),
            (i % 5 === 0 ? 'Buzz' : '')
        ].join('') || i);
    }
}



// Call Function
//  1. Ex: const output = reverseString('hello');
//  2. Ex: const output = isPallindrome('madam');
//  3. Ex: const output = reverseInt(-521);
//  4. Ex: const output = capitalizeLetters("i love javaScript");
//  5. Ex: const output = maxCharacter('javascript');
//  6. Ex: 
const output = fizzBuzz();

console.log(output);



