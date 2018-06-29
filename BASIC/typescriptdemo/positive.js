/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {

  if (a > 0) {
    return 'YES';
  }
  if (a < 0) {
    throw new Error('Negative Error');
  }

  if (a === 0) {
    throw new Error('Zero Error');
  }


}

function main(num, array) {
  let n = num;
  let arr = array;
  for (let i = 0; i < n; i++) {
    a = arr[i];

    try {
      console.log(isPositive(a));
    } catch (e) {
      console.log(e.message);
    }
  }
}

main(3, [1, -1, 0]);