var maxLength = function(arr) {
    let res1 = ''
    let res2 = ''
    for (const uni of arr.sort((a, b) => a.length - b.length)){
        console.log(uni)
        let repeatedStrings = new Set(uni).size == uni.length;
        let isValid = true;
        for(const char of uni){
            if(res2.includes(char)){
                isValid = false
            }
        }
        if(isValid && repeatedStrings){
            res2 = res2 + uni;
        }
    }
    for (const uni of arr.sort((a, b) => b.length - a.length)){
        console.log(uni)
        let repeatedStrings = new Set(uni).size == uni.length;
        let isValid = true;
        for(const char of uni){
            if(res1.includes(char)){
                isValid = false
            }
        }
        if(isValid && repeatedStrings){
            res1 = res1 + uni;
        }
    }
    return Math.max(res1.length, res2.length);
};


console.log(maxLength(["ab", "cd", "cde", "cdef", "efg", "fgh", "abxyz"]));