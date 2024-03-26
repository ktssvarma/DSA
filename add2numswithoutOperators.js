var getSum = function (a, b) {
  while (b) {
    console.log(`${a}        -->`, a.toString(2));
    console.log(`${b}        -->`, b.toString(2));
    console.log(`${a} & ${b}    -->`, (a & b).toString(2));
    console.log(`${a} ^ ${b}    -->`, (a ^ b).toString(2));
    const carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  console.log(`${a}       -->`, a.toString(2));
  return a;
};

console.log(getSum(5, 6));
