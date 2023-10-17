const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.map(number => {
    if (number % 2 === 0) {
        return number ** 3; 
    } else {
        return number; 
    }
});

console.log(result); 