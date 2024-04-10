var numSquares = function(n) {
    let squares = [];
    let i = 1;
    let isnotFilled = true
    while (isnotFilled) {
      if (i ** 2 <= n) {
        squares.push(i ** 2);
        i++;
      } else {
        isnotFilled = false;
      }
    }
    squares.sort((a, b) => b - a);
    let req = 0;
    let res = 0;
    const addInt = (e) => {
        if (n < req + e) {
          return e;
        } else {
            req = req + e;
            res++;
          return addInt(e);
        }
    };
    for (const sq of squares){
        addInt(sq);
    }
    return res;
};

// Failed

console.log(numSquares(12))
console.log(numSquares(120000000002))
