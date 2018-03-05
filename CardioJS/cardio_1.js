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
            return str.split('').reduce((revString, char) => char + revString, '');
}


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPallindrome('racecar') === 'true', isPallindrome('hello') == false

function isPallindrome(str) {}


// CHALLENGE 3: REVERSE A INTEGER
// Return an integer in reverse
// ex. reverseInt(521) == 125

function reverseInt(init) {}


// CHALLENGE 4: CAPITALIZE LETTERS
// Retrun a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascropt') == 'I Love Javascript'

function capitalizeLetters(str) {}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers form 1 to 100.
// For multiplies of 3, instaed of the number, print "Fizz",
// for multiplies of 5 print "Buzz". For numbers which are 
// multiplies of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {}



// Call Function
const output = reverseString('hello');

console.log(output);