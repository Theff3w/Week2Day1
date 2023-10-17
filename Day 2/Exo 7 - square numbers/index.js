const A = [8.3, 7.5];
const positions = [[1,1], [2, 2], [3, 4.5], [0, 9]];
const distances = [];

function calculateDistance(point1, point2) {
    const x1 = point1[0];
    const y1 = point1[1];
    const x2 = point2[0];
    const y2 = point2[1];
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

for (const position of positions) {
    const distance = calculateDistance(A, position);
    distances.push(distance);
}

// let maxDistanceIndex = 0;
// let maxDistance = distances[0];

// for (let i = 1; i < distances.length; i++) {
//     if (distances[i] > maxDistance) {
//         maxDistance = distances[i];
//         maxDistanceIndex = i;
//     }
// }

// Le plus éloigné en une ligne ?
const maxDistanceIndex = distances.indexOf(Math.max(...distances));

console.log("Distances:", distances);
console.log("Point le plus éloigné:", positions[maxDistanceIndex]);