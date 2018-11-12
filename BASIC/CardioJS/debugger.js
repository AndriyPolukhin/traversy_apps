function maxCharacter(str) {
  const charMap = {};

  str.split('').forEach((char) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for (let char in charMap) {
    debugger;

  }


}


const output = maxCharacter('anastasia');
console.log(output);

// node inspect debugger.js