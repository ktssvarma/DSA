
// function add(accumulator, a) {
//     return accumulator + a;
//   }

// const sumOfAll = (array) => array?.reduce(add, 0) || 0;

// var pivotIndex = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//       let leftSum = sumOfAll(nums.slice(0, i));
//       let rightSum = sumOfAll(nums.slice(i + 1, nums.length));
//       if(leftSum == rightSum){
//         return i;
//       }
//     } 
//     return -1;
// };

var pivotIndex = function(nums) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }

    return -1;
};

console.log("----->",pivotIndex([1,7,3,6,5,6]));
console.log("----->",pivotIndex([1,2,3]));
console.log("----->",pivotIndex([2,1,-1]));