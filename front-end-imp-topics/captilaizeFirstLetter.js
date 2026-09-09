// Store the input sentence in a string
// Split the sentence into individual words
// Traverse each word using map()
// Convert the first character of each word to uppercase
// Keep the remaining characters unchanged using slice()
// Join all the modified words back into a sentence
// Display the final capitalized string


let str = "dsa is important";

let result = str
            .split(" ")
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join(" ");

console.log(result);