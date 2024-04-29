var pivotInteger = function(n) {
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 2; i <= n; i++) rightSum += i;

    for (let j = 1; j <= n; j++) {
        if (j > 1) {
          leftSum += j-1;
          rightSum -= j;
        }
        if (leftSum == rightSum) return j;
    }
    return -1;
};

pivotInteger(8);