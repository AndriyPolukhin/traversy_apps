// CHALLENGE 1: LONGET WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('hello, my name is Andriy') === 'hello'
// ex. longestWord('Hello there, my name is Andriy') === ['hello', 'there']

function longestWord(sen) {
    // 1. Solution first using a match(), a sort() and a filter() methods:
        /*  
            // Create a filtered array
            const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
            // Sort by length
            // ES 5:
                // const sorted = wordArr.sort(function(a, b) {
                //     return b.length - a.length;
                // });
            // ES 6:
            const sorted = wordArr.sort((a,b) => b.length - a.length);

            // If multiple words than put into an array using a filter()
            // ES 5:
            //  const longestWordArr = sorted.filter(function(word) {
            //     return word.length === sorted[0].length;
            // });
            // ES 6:
            const longestWordArr = sorted.filter((word) => word.length === sorted[0].length);
            // Check if more than one array val
            // As a if statement
                // if(longestWordArr.length === 1) {
                //     // Return the word
                //     return longestWordArr[0];
                // } else { 
                //     return longestWordArr;
                // }
            // Return with a ternary operator:
            return longestWordArr.length === 1 ? longestWordArr[0] : longestWordArr;
        */
        /*
        const Arr = sen.toLowerCase().match(/[a-z0-9]+/g);
        const sortArr = Arr.sort((a,b) => b.length - a.length);
        const longArr = sortArr.filter((w) => w.length === sortArr[0].length);
        return longArr.length === 1 ? longArr[0] : longArr;
        */
    // 2. Solution using a froEach

        let maxLetters = 0;
        let outputArr = [];
        sen.toLowerCase()
           .match(/\w+/g)
           .forEach(word => {
               if (!(word.length < maxLetters)) {
                   if (word.length > maxLetters) {
                    maxLetters = word.length;
                    outputArr = [];
                   }
                   outputArr.push(word);
               }
           });
        return outputArr.length > 1 ? outputArr : outputArr[0]; 
}


// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4], [5, 6],[7]]

function chunkArray(arr, len) {
    // 1. Solution with a while loop
    /*
        // Init a chunked arr
        const chunkedArr = [];
        // Set index
        let i = 0;
        // Loop while the index is less than the array length
        while (i < arr.length) {
            // Slice out from the index to the index + the chunk length
            // Push on the chunked array
            chunkedArr.push(arr.slice(i, i + len));
            // Increment by the chunk length
            // debugger;
            i += len;
        }
        // Return the chunked array
        return chunkedArr;
    */
    // 2. Solution with a forEach loop I:
    /*    
        // Init a chunked arr
        const chunkedArr = [];
        // Loop through arr
        arr.forEach(function(val) {
            // Get last element of the chunkkedArr[]
            const last = chunkedArr[chunkedArr.length - 1];
            // Check if last and if last length is equal to the chunk length
            if (!last || last.length === len) {
                chunkedArr.push([val]);
            } else {
                last.push(val);
            }

            // console.log(chunkedArr);
            // console.log(last);
        });

        return chunkedArr;
    */
    // 3. Solution with a forEach loop II:
    /*
        let i = 0, output = [], currArr = [];

        arr.forEach(element => {
            currArr.push(element);
            i++;
            if (i%len === 0 || i === arr.length) {
                output.push(currArr);
                currArr = [];
            }
        });
        return output;
    */
    // 4. Solution with a Array.from method:
    //
        return Array.from({ length: Math.ceil(arr.length / len)}, (v, i) => 
        arr.slice(i * len, i * len + len));
    //
}


// CHALENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
    // 1. Solution with a reduce
    /*
        return arrays.reduce((a, b) => a.concat(b));
    */
    // 2. Solution with a apply() method
    /*    
        return [].concat.apply([], (arrays)); 
    */
    // 3. Solution using a spread operator I:
        // 3.1 How the spread operator works
            // function add(a,b,c) {
            //     return a+b+c;
            // }  
            // const arr = [1,2,3];
            // console.log(add(...arr));
        // 3.2 Using on the flatten Array
    /*
        return [].concat(...arrays);
    */
    // 4. Solution using reduce with a spread operator II:
        return arrays.reduce((arr, nums) => [...arr, ...nums], []);
}

// CHALLENGE 4: ANAGRAN
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
    // 1. Solution to the Anagram using a Support function and bult-ins
    return formatStr(str1) === formatStr(str2);
}

// SUPPORT FUNCTION FOR THE ANAGRAM
function formatStr(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitazlie the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
    // 1. Solution using a filter and replace
    /*
    let newStr = str
                .toLowerCase()
                .replace(/[a-z]/gi, (char) => {
                            if(char === "z" || char === "Z") {
                                return 'a';
                            } else {
                                return String.fromCharCode(char.charCodeAt() + 1);
                            }
                        });

    newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());
    return newStr;
    */
   // 2. Solution using a variation of a replace() method with RE:
        return str.toLowerCase().replace(/[a-z]/g, char => (
            char === 'z' ? 'A' : String.fromCharCode(char.charCodeAt() + 1)
        )).replace(/[aeiou]/g, vowel => vowel.toUpperCase());
}


// Call Function
//  1. Ex: const output = longestWord("Hello there, my name is And riy");
//  2. Ex: const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 2);
//  3. Ex: const output = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
//  4. Ex: const output = isAnagram("Dormitory", "dirty room##");
//  5. Ex: 
const output = letterChanges("Hello There");

// console.log(longestWord("Hello there I am here"));
console.log(output);

