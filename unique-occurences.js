var uniqueOccurrences = function(arr) {
    let obj = {};
    for (const e of arr){
        obj[e] = (obj[e] || 0) + 1;
    }
    const seenValues = new Set();
    for (const value of Object.values(obj)) {
        if (seenValues.has(value)) {
            return false;
        }
        seenValues.add(value);
    }
    return true;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1,2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));