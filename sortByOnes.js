var sortByBits = function (arr,res) {
    function countOnesInBinary(number) {
        let binaryString = number.toString(2);
        let count = 0;
        for (let i = 0; i < binaryString.length; i++) {
            if (binaryString[i] === '1') {
                count++;
            }
        }
        return count;
    }
    const string = arr
      .sort((a, b) => a - b)
      .map((e) => ({ noOf: countOnesInBinary(e), val: e }))
      .sort((a, b) => a.noOf - b.noOf);
    const formated = string.map((j) => j.val)
    return formated
};
function countOnesInBinary(number) {
    return number.toString(2).split('').filter((e)=>e=='1').length;
}
countOnesInBinary(1024)
// sortByBits([0,1,2,3,4,5,6,7,8],[0,1,2,4,8,3,5,6,7])
// sortByBits([1024,512,256,128,64,32,16,8,4,2,1],[1,2,4,8,16,32,64,128,256,512,1024])