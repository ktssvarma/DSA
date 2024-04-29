var isPalindrome = function (head) {
  let headString = "";
  let tailString = "";
  for (let i = 0; i < head.length; i++) {
    headString += head[i];
  }
  for (let j = head.length - 1; j >= 0; j--) {
    tailString += head[j];
  }
  console.log(headString, tailString, headString == tailString);
  return headString === tailString;
};

isPalindrome([1, 2, 2, 1]);
isPalindrome([1, 2, 4, 6, 3, 5, 5, 2, 1]);
isPalindrome([1, 2]);
