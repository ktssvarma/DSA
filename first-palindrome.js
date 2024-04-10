var firstPalindrome = function (words) {
  for (const word of words) {
    let reversed = word.split("").reverse().join("");
    if (word == reversed) {
      return word;
    }
  }
  return "";
};
console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
console.log(firstPalindrome(["notapalindrome", "racecar"]));
console.log(firstPalindrome(["def", "ghi"]));
