const sentence = "Bonjour tout le monde, vous aimez JS ?";

const reversedSentence = sentence.split('').reverse().join('');
console.log("Chaîne inversée:", reversedSentence);

const wordLengths = sentence.split(' ').map(word => word.length);

console.log("Nombre de caractères de chaque mot:", wordLengths);

function countCharactersInWords(sentence) {
    const words = sentence.split(' ');
    
    const wordLengths = words.map(word => word.length);
    
    return wordLengths;
}
const characterCounts = countCharactersInWords(sentence);
console.log("Nombre de caractères de chaque mot:", characterCounts);