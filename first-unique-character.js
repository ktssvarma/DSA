var firstUniqChar = function(s) {
    console.log(s);
    let shortPath = s.split('');
    for (let i = 0; i < s.length; i++) {
      
      console.log(shortPath.splice(i,1));
      console.log(shortPath);
    }
};

console.log(firstUniqChar("leetcode")==0);
console.log(firstUniqChar("loveleetcode")==2);
console.log(firstUniqChar("aabb") == -1);