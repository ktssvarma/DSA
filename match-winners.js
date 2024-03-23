var findWinners = function(matches) {
    let losses = [10];
    for (const match of matches){
        losses[match[0]] = losses[match[0]] || 0;
        losses[match[1]] = (losses[match[1]] || 0) + 1;
    }
    console.log(losses)
    const zeroLosses = losses
      .map((a, index) => {
        if (a == 0) {
          return index;
        }
      })
      .filter((e) => e);
      const oneLoss = losses
        .map((a, index) => {
          if (a == 1) {
            return index;
          }
        })
        .filter((e) => e);
console.log(zeroLosses, oneLoss);
};

console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]))