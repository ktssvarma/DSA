var firstMissingPositive = function(nums) {
    nums.sort((a, b) => b - a);
    const maxNumber = nums[0] + 1;
    if(maxNumber<1){
        return 1;
    }
    let i=0;
    let res;
    while (i <= maxNumber) {
      if (i > 0 && !nums.includes(i)) {
        res = i;
        break;
      }
      i++;
    }
    return res;
};

console.log(firstMissingPositive([1,2,0]))
console.log(firstMissingPositive([3,4,-1,1]))