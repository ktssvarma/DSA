var maxScore = function (s) {
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
  let res = 0;
  for (let i = 0; i < s.length - 1; i++) {
    const left = s.slice(0, i + 1);
    const right = s.slice(i + 1, s.length);
    const count = repeatCount(left, "0") + repeatCount(right, "1");
    console.log(left, right, count);
    if (count > res) {
      res = count;
    }
  }
  return res;
};

console.log(maxScore("011101"));
console.log(maxScore("00111"));
console.log(maxScore("1111"));
