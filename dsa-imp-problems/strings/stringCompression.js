// ==================================================
// Problem:
// ==================================================

// String Compression

// ==================================================
// Approach:
// ==================================================

// 1. Initialize an empty string `result` to store the compressed output.
// 2. Initialize a variable `count` to 1 because the first character appears at least once.
// 3. Traverse the string starting from index 1.
// 4. If the current character is the same as the previous character, increment `count`.
// 5. Otherwise:
//    - Append the previous character and its count to `result`.
//    - Reset `count` to 1 for the new character.
// 6. After the loop ends, append the last character and its count to `result`.
// 7. Return the compressed string.

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

// - Traverse the string only once.
// - Count consecutive duplicate characters.
// - Always append the last character after the loop because it won't be processed inside the loop.
// - This problem demonstrates the Run-Length Encoding (RLE) technique, a simple form of data compression.


function stringCompression(str){

    let result = "";
    let count = 1;

    for(let i=1; i<str.length; i++){

        if(str[i]===str[i-1]){
            count++;
        }
        else{
            result+= str[i-1] + count; // to save previous value
            count = 1;
        }

    }

    result+= str[str.length-1] + count; // to save last value

    return result;
}

const str = "aabbbccccd"

console.log(stringCompression(str));