
const x1 = 1;
const y1 = 1;
const x2 = 2;
const y2 = 2;
const x3 = 3;
const y3 = 3;

function isInLine(x1, y1, x2, y2, x3, y3) {
    const slope = (y2 - y1) / (x2 - x1);
  
    const yDiff = slope * (x3 - x1) - (y3 - y1);
  
    return Math.abs(yDiff) <= 0;
  }
  
  const inLine = isInLine(x1, y1, x2, y2, x3, y3);
  
  if (inLine) {
    console.log("The three are in line.");
  } else {
    console.log("The three are not in line.");
  }