// var makeGood = function(s) {
//     let num = s.split("");
//     console.log(num);
//     for (let i = 0; i < s.length - 1; i++) {
//       if (num[i] != num[i + 1] && num[i] == num[i + 1].toLowerCase()){
//         num[i] = "";
//         num[i + 1] = "";
//       }
//       console.log(num);
//     }
// };

var recursive = (str, index) => {
  if (index > str.length - 1) {
    return str;
  }
  if (
    index != 0 &&
    Math.abs(str.charCodeAt(index) - str.charCodeAt(index - 1)) == 32
  ) {
    let name = str.slice(0, index - 1) + str.slice(index + 1);
    return recursive(name, index - 1);
  } else {
    return recursive(str, index + 1);
  }
};

var makeGood = function (s) {
    return recursive(s, 1);
};

console.log("----->", makeGood("leEaeetcode"));
console.log("----->", makeGood("abBAcC"));
console.log("----->", makeGood("s"));
