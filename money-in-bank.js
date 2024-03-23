var totalMoney = function(n) {
    const amount = [1, 2, 3, 4, 5, 6, 7]
    let week = 0;
    let total = 0;
    let i = 0;
    while (i < n) {
        total = total + amount[i % 7] + week
        i++;
    }
    return total
};
console.log(totalMoney(4));