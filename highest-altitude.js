
var largestAltitude = function(gain) {
    let res = { last: 0, result: 0 }
    for (let i = 0; i < gain.length;i++){
        res.last = res.last + gain[i];
        if(res.last>res.result){
            res.result=res.last;
        }
    }
    return res.result;
};

console.log(largestAltitude([-5,1,5,0,-7]))