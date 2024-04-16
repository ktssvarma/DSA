/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let maxLimit = tickets[k];
  let boughtTemp = [...tickets];
  let res = 0;
  while (maxLimit > 0) {
    // console.log(boughtTemp.join("--"));
    let dontBreak = true;
    boughtTemp = boughtTemp.map((e,index) => {
      if (e > 0 && dontBreak) {
        res++;
        if (k == index && e - 1 == 0) {
          dontBreak = false;
        }
        return e - 1;
      } else {
        return e;
      }
    });
    maxLimit = boughtTemp[k];
  }
  return res;
};

console.log(timeRequiredToBuy([2, 3, 2], 2), 6);
console.log(timeRequiredToBuy([5, 1, 1, 1], 0), 8);
console.log(timeRequiredToBuy([84, 49, 5, 24, 70, 77, 87, 8], 3),154);
console.log(
  timeRequiredToBuy(
    [
      68, 21, 45, 7, 38, 61, 7, 33, 72, 61, 67, 84, 65, 61, 19, 72, 11, 64, 18,
      100, 30, 21, 10, 42, 25, 72, 8, 99, 36, 76, 35, 19, 24, 66, 36, 43, 29,
      92, 34, 6, 5, 11, 25, 64, 36, 47, 83, 82, 29, 95, 2, 91, 97, 27, 39, 88,
      73, 37, 43, 66, 62, 8, 53, 12, 27, 48, 59, 6, 87, 51, 13, 52, 32, 96, 23,
      9, 78, 20, 32, 1, 8, 73, 71, 4, 93, 82, 71, 14, 19, 34, 29, 32, 50, 45,
      56, 50, 42, 30, 37, 88,
    ],
    12
  ),
  4028
);
