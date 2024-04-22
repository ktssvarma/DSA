const reccursion = (s, i) => {
    if (i == s.length - 1) {
      return 0;
    }
    return (
      Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)) + reccursion(s, i + 1)
    );
};

var scoreOfString = function (s) {
    return reccursion(s, 0);
};

console.log(scoreOfString("hello"));
