function countLetters(string) {
const letterCounts = {};

for (const char of string) {
    if (char in letterCounts) {
        letterCounts[char]++;
    } else {
        letterCounts[char] = 1;
        }
    }
    return letterCounts;
}

const inputString = "Mississippi";
const letterCounts = countLetters(inputString);

console.log("Occurrences de chaque lettre :");
for (const letter in letterCounts) {
    console.log(`${letter}: ${letterCounts[letter]}`);
}

function countOccurrences(str) {
    const letterCounts = {};

    for (const char of str) {
        if (char in letterCounts) {
            letterCounts[char]++;
        } else {
            letterCounts[char] = 1;
        }
    }

    return letterCounts;
}