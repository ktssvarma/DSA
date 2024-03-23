var isPalindrome = function(head) {
    let headString = String(head.join())
    let tailString = String(head.join())
    console.log(headString == tailString);
};
console.log(isPalindrome([1, 2, 3]));
console.log(isPalindrome([1, 2, 2, 1]));
