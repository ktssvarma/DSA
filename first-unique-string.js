var firstUniqChar = function (s) {
  let obj = {};
  for (const e of s) {
    obj[e] = (obj[e] || 0) + 1;
  }
  for (const value of Object.keys(obj)) {
    if (obj[value] == 1) {
      return s.indexOf(value);
    }
  }
  return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));
