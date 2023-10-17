const numbers = [1, 2, 3, 4, 50, 6, 7, 8, 9, 10];

const max = numbers.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue);
});

console.log(max);