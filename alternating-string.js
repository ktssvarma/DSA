var minOperations = function (s) {
  const repeatCount = (a, b) => {
    let j = 0;
    for (const char of a) {
      if (char == b) {
        j++;
      }
    }
    return j;
  };
  console.log(s);
  let firstPlace = "";
  let secondPlace = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 == 0) {
      firstPlace += s[i];
    } else {
      secondPlace += s[i];
    }
  }
  const first0s = repeatCount(firstPlace, "0");
  const first1s = repeatCount(firstPlace, "1");
  const second0s = repeatCount(secondPlace, "0");
  const second1s = repeatCount(secondPlace, "1");
  console.log(firstPlace, secondPlace);
  console.log(first0s, first1s, second0s, second1s);
};
console.log(minOperations("0100"));
console.log(minOperations("10"));
console.log(minOperations("1111"));
console.log(minOperations("10011001111"));
