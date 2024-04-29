var findSpecialInteger = function(arr) {
    const lengthOfArr = arr.length;
    const obj = {};
    for (let i = 0; i < lengthOfArr; i++) {
      obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }
    for(const char of Object.entries(obj)){
        if((char[1]/lengthOfArr)>0.25){
            return char[0];
        }
    }
};

findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]);
// findSpecialInteger([1, 1]);