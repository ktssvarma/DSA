var lengthOfLastWord = function(s) {
    s =  s.split(" ").filter((e) => (e != ""))
    return s[s.length - 1].length;
};

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"));