var sumOnlyFavorites = FP.compose([
  FP.filterReducer(FP.gte(10)),
  FP.filterReducer(FP.te(20))
])(sum);

var printMagicNumber = FP.pipe([
  FP.reduce(sumOnlyFavorites, 0),
  constructMsg,
  console.log
]);

var numbers = [4, 10, 0, 27, 42, 17, 15, -6, 58];

printMagicNumber(numbers);

function sum(x, y) {
  return x + y;
}
function constructMsg(v) {
  return `The magic number is: ${v}`;
}
