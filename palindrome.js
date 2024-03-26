const isPalindrome = (e) => {
    return (e < 0 ? false : e == e.toString().split("").reverse().join(''))
};
console.log(isPalindrome(1221));
console.log(isPalindrome(125621));
console.log(isPalindrome(13421234563));
