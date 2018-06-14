
let elements = [5,3,7,10,14];
let elementsBinary = [];
let Unsorted = new Array();


elements.forEach(element => {
    elementsBinary.push(baseConvert(element, 10, 2));
});

function compareIt(element) {
    element
        .split('')
        .reduce(function(el, num) {
            if ((!el[num]) & (!el[num] == 0)) {
                el[num] = 0;
            }
            el[num]++;
            return el;
            }, {});
}

const sorted = Unsorted.sort(function(a,b) {
    if (a.length === b.length)  {
        if(compareIt(a) > compareIt(b)) {
            return elements[a] - elements[b];
        }
    } else {
        return a - b;
    }
});


function baseConvert(number, initialBase, changeBase) {
    if ((initialBase && changeBase) === 2 || (initialBase && changeBase) === 10) {
        return parseInt(number + '', initialBase).toString(changeBase);
    }
}
function populateResult() {
  for (let i = 0; i < elements.length; i++) {
    Unsorted[elements[i]] = elementsBinary[i];
  }
}

populateResult();

// Write your code into this function
function Rearrange(elements) {
  let results = [];

  sorted.forEach(element => {
    results.push(parseInt(baseConvert(element, 2, 10)));
  });

  return results;//it must return an array of integers.
}
 