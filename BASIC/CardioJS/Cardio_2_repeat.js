// Challenge 1: longest Word
// Return the longest word of a string

function longestWord(sen) {

  const Arr = sen.toLowerCase().match(/[a-z0-9]+/g);
  const sortArr = Arr.sort((a, b) => b.length - a.length);
  const longArr = sortArr.filter((w) => w.length === sortArr[0].length);
  return longArr.length === 1 ? longArr[0] : longArr;

}

console.log(
  longestWord('Hello there, mu name is Andriy')
);
