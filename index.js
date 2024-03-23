/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  const bedLength = flowerbed.length;
  let modifiedFlowerBed = flowerbed;
  let count = n;
  let i = 0;
  if (n == 0) {
    return true;
  }
  if (bedLength == 1) {
    if (modifiedFlowerBed[0] == 0) {
      modifiedFlowerBed[0] = 1;
      count = count - 1;
    }
  } else {
    while (i < bedLength) {
      if (i + 1 >= bedLength) {
        if (modifiedFlowerBed[i] == 0 && modifiedFlowerBed[i - 1] == 0) {
          modifiedFlowerBed[i] = 1;
          count = count - 1;
          i = i + 1;
        } else {
          i = i + 1;
        }
      } else if (i == 0) {
        if (modifiedFlowerBed[i] == 0 && modifiedFlowerBed[i + 1] == 0) {
          modifiedFlowerBed[i] = 1;
          count = count - 1;
          i = i + 1;
        } else {
          i = i + 1;
        }
      } else {
        if (modifiedFlowerBed[i] == 1) {
          i = i + 1;
        } else {
          if (modifiedFlowerBed[i - 1] == 0 && modifiedFlowerBed[i + 1] == 0) {
            modifiedFlowerBed[i] = 1;
            count = count - 1;
          }
          i = i + 1;
        }
      }
    }
  }
  return count == 0;
};

console.log(canPlaceFlowers([1,0,0,0,1,0,1],1))
console.log(canPlaceFlowers([1,0,0,0,1],1))
console.log(canPlaceFlowers([1,0,0,0,1],2))