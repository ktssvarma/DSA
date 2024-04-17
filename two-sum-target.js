var twoSum = function (nums, target) {
  const a = new Set();
  let index;

  for (let i = 0; i < nums.length; i++) {
    if (a.has(target - nums[i])) {
      index = i;
      break;
    } else {
      a.add(nums[i]);
    }
  }

  for (let j = index - 1; j >= 0; j--) {
    if (nums[j] + nums[index] == target) {
      return [j, index];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
