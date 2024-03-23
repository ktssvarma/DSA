var largestGoodInteger = function(num) {
    let req = ''
    for(let i=0;i<num.length;i++){
        const prev = i >= 0 ? num[i - 1] : '';
        const next = i + 1 < num.length ? num[i + 1] : '';
        if (prev === num[i] && num[i] === next) {
            if (!(req > num[i])) {
                req = num[i]
            }
        }
    }
    return req.repeat(3);
};
console.log(largestGoodInteger("6771339"))