// ==================================================
// Problem:
// ==================================================

// Reverse Each Word in a String

// ==================================================
// Approach:
// ==================================================

// 1. Split the input string into an array of words using `split(" ")`.
// 2. Create an empty array `result` to store the reversed words.
// 3. Traverse each word in the array.
// 4. For every word:
//    - Initialize an empty string `reversed`.
//    - Traverse the word from the last character to the first.
//    - Append each character to `reversed`.
// 5. Push the reversed word into the `result` array.
// 6. After processing all words, join the array using spaces.
// 7. Return the final reversed string.

// ==================================================
// Time Complexity:
// ==================================================

// O(n)

// ==================================================
// Space Complexity:
// ==================================================

// O(n)

// ==================================================
// Key Learning:
// ==================================================

// - Split a sentence into individual words.
// - Reverse each word independently without changing the word order.
// - Join the transformed words back into a sentence.
// - Practice nested loops for string manipulation.

function reverseEachWord(str){

    let words = str.split(" ");
    let result = [];

    for(let i=0; i<words.length; i++){

        let reversed = "";

        for(let j=words[i].length-1; j>=0; j--){
            reversed+=words[i][j];
        }
        result.push(reversed);
    }
    return result.join(" ");
}

console.log(reverseEachWord("I Love Solving Problems"));