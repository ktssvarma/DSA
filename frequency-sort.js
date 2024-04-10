var frequencySort = function (s) {
    let obj = {};
    for (const char of s){
        obj[char] = (obj[char] || 0) + 1;
    }
    const sortedKeys = Object.keys(obj).sort((keyA, keyB) => obj[keyB] - obj[keyA]);
    let res = ''
    for(const char of sortedKeys){
        for (let j = 0; j < obj[char]; j++) {
          res += char;
        }
    }
    return res;
};

console.log(frequencySort("tree"));
console.log(frequencySort("cccaaa"));
console.log(frequencySort("Aabb"));
