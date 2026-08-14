// Approach:
// 1. Convert the string into an array of words using split(" ").
// 2. Reverse the order of the words using reverse().
// 3. Convert the array back into a string using join(" ").
// 4. Return or print the reversed string.


let str = "I love to solve problems";

let result = str.split(" ").reverse().join(" ");

console.log(result);