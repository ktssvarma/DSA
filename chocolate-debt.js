var buyChoco = (prices, money) => {
  console.log(prices);
  prices.sort((a, b) => a - b);
  console.log(prices);
  if (prices[0] + prices[1] <= money) {
    return money - prices[0] - prices[1];
  } else {
    return money;
  }
};
console.log("Result : ", buyChoco([1, 2, 2], 3));
console.log("Result : ", buyChoco([3, 2, 3], 3));
