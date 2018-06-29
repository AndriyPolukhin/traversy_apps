function reverseString(s) {
  try {
    let r = s.split('').reverse().join('');
    console.log(r);

  } catch (e) {
    console.log(e.message);
    console.log(s);
  }
}

reverseString("1234");
reverseString(Number(1234));