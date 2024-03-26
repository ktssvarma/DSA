// var formatString = e => e.split('').sort().join('')
// var isAnagram = (s, t) => {
//     if (s.length !== t.length) return false
//     else return formatString(s) === formatString(t)
// }

var isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("anagr12am", "nagara21m"));
console.log(isAnagram("anagr1234am", "nagar5678am"));
