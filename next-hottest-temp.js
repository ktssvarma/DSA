var dailyTemperatures = function (temperatures) {
  const res = temperatures.map((temp, index) => {
    let i = index;
    let highTempIndex = index;
    while (i < temperatures.length - 1) {
      if (temperatures[i + 1] > temp) {
        highTempIndex = i + 1;
        i = i + 1;
        break;
      }
      i = i + 1;
    }
    return highTempIndex - index;
  });
  return res;
};

console.log(
  "Result",
  dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]),
  [1, 1, 4, 2, 1, 1, 0, 0]
);
console.log("Result", dailyTemperatures([30, 40, 50, 60]) , [1, 1, 1, 0]);
console.log("Result", dailyTemperatures([30, 60, 90]) , [1, 1, 0]);
