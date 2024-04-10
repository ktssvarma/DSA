var majorityElement = function(nums) {
    let obj = {}
    for (const num of nums){
        obj[num] = (obj[num] || 0) + 1
    }
    const sortedKeys = Object.keys(obj).sort((keyA, keyB) => obj[keyB] - obj[keyA]);
return Object.values(sortedKeys)[0];
    // console.log(Object.values(sortedKeys)[0]);
    // for(const k of sortedKeys){
    //     if (obj[k] >= nums.length / 2) {
    //       return k;
    //     }
    // }
    // return null
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));