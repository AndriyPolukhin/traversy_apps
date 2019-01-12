let re;
// Litteral Characters
re = /hello/;
re = /hello/i;


// Metacharacter Symbols
re = /^h/i; // Must start with
re = /world$/i; // Must Ends with
re = /^hello World$/i; // Must begin and end with
re = /h.llo/i; // Matches any one character
re = /h*llo/i; // Matches any characters
re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i;  // Escape characres

// Brackets [] - Characters sets
re = /gr[ae]y/i; // Must be an a or e as a set
re = /[GF]ray/i; // at the begining g Or f
re = /[^GF]ray/i; // Match anything except a G or F
re = /[A-Z]ray/; // Any uppercase letter
re = /[a-z]ray/; // Any uppercase letter
re = /[A-Za-z]ray/; // Any letter of any case
re = /[0-9][0-9]ray/; // Numbers

// Braces {} - Quntifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Range to occur
re = /Hel{2,}o/i; // Al least {m} times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/;

// Shorthand Character classes
re = /\w/; // Word Character - alphanumeric character or _
re = /\w+/; // One or more word character
re = /\W/; // Non-Word characters
re = /\d/; // Digit once
re = /\d+/; // any Digit one or more times
re = /\D/; // Non-Digit
re = /\s/; // Match whitespace
re = /\S/; // Non-whitespace character
re = /Hell\b/i; // Word boundary

// Assertions / conditionals
re = /x(?=y)/; // Match x only if it's followed by y
re = /x(?!y)/; // y is after the x

// String to match
const str = 'xsadfasdxxxssxxxydsfasdf';

// log results
const result = re.exec(str);
console.log(result);
function reTest() {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} do Not match ${re.source}`)
  }
}

reTest(re, str);