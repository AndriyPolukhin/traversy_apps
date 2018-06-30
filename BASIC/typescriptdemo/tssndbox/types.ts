let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

/*
let strArr: string[];
let numArr: number[];
let boolArr: boolean[];
*/

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number];

myString = "Hello".slice(0, 3);
myNum = 10;
myBool = true;
myVar = true;

strArr = ["Hello", "world"];
numArr = [1, 2, 3, 4];
boolArr = [true, false, true];

strNumTuple = ["Hello", 4];

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = null;

console.log(myVoid);
console.log(myNull);
console.log(myUndefined);

// console.log(strNumTuple);

// console.log(myString);
// console.log(myNum);
// console.log(myBool);
// console.log(myVar);
// console.log(strArr);
// console.log(numArr);
// console.log(boolArr);
