var isSubsequence = function(s, t) {
    let arr = [];
    for (const char of s){
        const req = t.indexOf(char)
        if (req >= 0) {
          arr.push(req);
        }else{
            return false;
        }
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) {
            return false;
        }
    }
    const revArr = arr.reverse();
    for (let i = 0; i < revArr.length - 1; i++) {
        if (revArr[i] <= revArr[i + 1]) {
            return false;
        }
    }
    return true;
};

console.log("----->", isSubsequence("abc", "ahbgdc"));
console.log("----->", isSubsequence("axc", "ahbgdc"));
// console.log('----->',isSubsequence())