var destCity = function (paths) {
  const checkDest = (point) => {
    let refoundDest = false;
    for (const path of paths) {
      if (path[0] == point) {
        console.log(path);
        refoundDest = true;
        return checkDest(path[1]);
      }
    }
    if (!refoundDest) {
      return point;
    }
  };

  return checkDest(paths[0][1]);
};
console.log(
  "dest",
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
);
console.log(
  "dest",
  destCity([
    ["B", "C"],
    ["D", "B"],
    ["C", "A"],
  ])
);
console.log("dest", destCity([["A", "Z"]]));
