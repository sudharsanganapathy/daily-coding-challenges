// ==================================================
// Problem:
// ==================================================

// Remove Stars

// ==================================================
// Approach:
// ==================================================

// 1. Create an empty stack.

// 2. Traverse the string character by character.

// 3. If the current character is NOT `*`:
//    push it into the stack.

// 4. If the current character is `*`:
//    remove the most recently added character using `pop()`.

// 5. Continue until the entire string is processed.

// 6. Join the remaining characters in the stack
//    to form the final string.

// ==================================================
// Example:
// ==================================================

// Input:

// "lee*t*cod*e"

// Process:

// l → [l]
// e → [l,e]
// e → [l,e,e]
// * → [l,e]
// t → [l,e,t]
// * → [l,e]
// c → [l,e,c]
// o → [l,e,c,o]
// d → [l,e,c,o,d]
// * → [l,e,c,o]
// e → [l,e,c,o,e]

// Final:

// "lecoe"

// ==================================================
// Complexity:
// ==================================================

// Time  → O(n)
// Space → O(n)

// ==================================================
// Key Learning:
// ==================================================

// `*` removes the most recently added character.

// This is exactly the behavior of a Stack:

// Last In → First Out (LIFO)


function removeStars(s){

    let stack = [];

    for(let i=0; i<s.length; i++){

        let char = s[i];

        if(char==="*"){
            stack.pop();
        }
        else{
            stack.push(char);
        }
    }

    return stack.join("");
}

const str = "lee*t*cod*e";

console.log(removeStars(str));