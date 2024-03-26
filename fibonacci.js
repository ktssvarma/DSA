// const fibonacci = (e)=>{
//     let arr = [0, 1];
//     let i = 0;
//     while (i < e) {
//         arr.push(arr[i] + arr[i + 1]);
//         i++;
//     }
//     console.log(arr[e]);
// }

const fibonacci = n =>{
    if (n <= 1) return n;
    
    return fibonacci(n-1) + fibonacci(n - 2);
}

console.log(fibonacci(6));

// 6-> (5 + 4)
// 6-> ((4 + 3) + (3 + 2))
// 6-> (((3+2) + (2+1)) + ((2+1) + (1+0)))
// 6-> ((((2+1)+(1+0)) + ((1+0)+1)) + ((1+0)+1) + (1+0)))
// 6-> ((((1+0)+1)+(1+0)) + ((1+0)+1)) + ((1+0)+1) + (1+0)))
// fibonacci(5);
// fibonacci(6);
// fibonacci(7);