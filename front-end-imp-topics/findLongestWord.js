// Approach:
// 1. Split the string into individual words using split(" ").
// 2. Use reduce() to compare the words one by one.
// 3. Treat acc as the longest word found so far.
// 4. Compare the length of acc with the current word.
// 5. If acc is longer, keep acc.
// 6. Otherwise, keep the current word.
// 7. After all words are processed, return the longest word.

// Words:

// ["I", "love", "to", "solve", "programming"]


// reduce() compares:

// "I" vs "love"          → "love"
// "love" vs "to"         → "love"
// "love" vs "solve"      → "solve"
// "solve" vs "programming" → "programming"


let str = "I love to solve programming";

let resut = str.split(" ").reduce((acc, ele)=>{

    return acc.length > ele.length ? acc : ele;

});

console.log(resut);