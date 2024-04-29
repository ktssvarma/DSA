// var tribonacci = function (n) {
//   const arr = [0, 1, 1];
//   for (let i = 3; i <= n; i++) {
//     const res = arr[i - 1] + arr[i - 2] + arr[i - 3];
//     if (i == n) {
//       return res;
//     } else {
//       arr.push(res);
//     }
//   }
// };

var tribonacci = function (n) {
  if (n == 0) {
    return 0;
  }
  const req = { a: 0, b: 1, c: 1 };
  const res = (i) => {
    if (i >= n) {
      return req.c;
    }
    let c = req.c;
    req.c = req.a + req.b + c;
    req.a = req.b;
    req.b = c;
    return res(i + 1);
  };
  return res(2);
};

var tribonacci = function (n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  const req = { a: 0, b: 1, c: 1 };
  for (let i = 3; i <= n; i++) {
    let temp = req.a + req.b + req.c;
    req.a = req.b;
    req.b = req.c;
    req.c = temp;
  }
  return req.c;
};

tribonacci(4);
tribonacci(25);
tribonacci(5);
