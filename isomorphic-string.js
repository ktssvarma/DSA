var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  const repetitionOfS = {};
  const repetitionOfT = {};
  for (let i = 0; i < t.length; i++) {
    repetitionOfS[s[i]] = repetitionOfS[s[i]]
      ? [...repetitionOfS[s[i]], i]
      : [i];
  }
  for (let i = 0; i < t.length; i++) {
    repetitionOfT[t[i]] = repetitionOfT[t[i]]
      ? [...repetitionOfT[t[i]], i]
      : [i];
  }
  for (const value1 of Object.values(repetitionOfS)) {
    let matches = false;
    for (const value2 of Object.values(repetitionOfT)) {
        if(value1.join("") == value2.join("")){
            matches = true;
            break;
        }
    }
    if(!matches){
        return false;
    }
  }
  return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("badc", "baba"));
console.log(isIsomorphic("bbbaaaba", "aaabbbba"));
