var hammingWeight = function(n) {
    return n.toString(2).split('').filter((e) => e == '1').length;
};
console.log(hammingWeight(00000000000000000000000000001011));