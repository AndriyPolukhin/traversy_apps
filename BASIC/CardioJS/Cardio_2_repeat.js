// Challenge I: Longest Word
// Return the longest word of a string
// If more than one longest word , put into an array
// ex. longestWord('hello, my name is Andriy') === 'hello'
// ex. longestWord('Hello there, my name is Andriy') === ['hello', 'there']

function longestWord(sen) {
  // Create filtered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  // craete sotred array
  const sorted = wordArr.sort(function (a, b) {
    return b.length - a.length;
  });

  // If multiple words, put into array
  const longestWordArr = sorted.filter(function (word) {
    return word.length === sorted[0].length;
  });

  console.log(longestWordArr);



}

longestWord('hello, my name is Andriy') === 'hello';
longestWord('Hello there, my name is Andriy') === ['hello', 'there'];