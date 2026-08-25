// Approach:
// 1. Split the string into an array of words using a space.
// 2. Initialize count as 0.
// 3. Traverse the array of words.
// 4. Increment count for every word.
// 5. Return/print the total word count.


let str = "I  love  to   solve    problem";

let strUpdated = str.trim().split(/\s+/);

let count = 0;

for(let i=0; i<strUpdated.length; i++){
    count++;
}

console.log(count);