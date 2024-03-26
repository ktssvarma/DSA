var findDuplicates = function (nums) {
  let nonRepeating = [];
  let repeating = [];
  for (const j of nums) {
    if (nonRepeating.includes(j)) {
      repeating.push(j);
    } else {
      nonRepeating.push(j);
    }
  }
  return repeating;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
