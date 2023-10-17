const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.reduce((acc, currentValue) => {
    if (currentValue % 2 !== 0) {
    return acc + currentValue;
    } else {
    return acc;
    }
}, 0);

console.log(result); 