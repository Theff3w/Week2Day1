const phrase = '8790:bonjour le monde:8987:7777:Hello World:9007';
const regex = /\d+/g;
const numbers = phrase.match(regex);

console.log(numbers);