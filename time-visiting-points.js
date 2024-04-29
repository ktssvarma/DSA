// var minTimeToVisitAllPoints = function(points) {
//     let time = 0;
//     if(points.length==1){
//         return time;
//     }
//     for (let i = 0; i < points.length - 1; i++) {
//       let currentLocation = points[i];
//       let destination = points[i+1]
//       while (
//         currentLocation[0] !== destination[0] ||
//         currentLocation[1] !== destination[1]
//       ) {
//         if (currentLocation[0] > destination[0]) {
//             currentLocation[0] = currentLocation[0] - 1;
//           }
//           if (currentLocation[0] < destination[0]) {
//             currentLocation[0] = currentLocation[0] + 1;
//           }
//           if (currentLocation[1] > destination[1]) {
//             currentLocation[1] = currentLocation[1] - 1;
//           }
//           if (currentLocation[1] < destination[1]) {
//             currentLocation[1] = currentLocation[1] + 1;
//           }
//           time++;
//       }
//     }
//     return time;
// };
var minTimeToVisitAllPoints = function(points) {
    let time = 0;
    for (let i = 0; i < points.length - 1; i++) {
      time += Math.max(
        Math.abs(points[i+1][0] - points[i][0]),
        Math.abs(points[i+1][1] - points[i][1])
      );
    }
    return time;
};


minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]])
minTimeToVisitAllPoints([[3,2],[-2,2]])