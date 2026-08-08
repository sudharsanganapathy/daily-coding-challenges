// ==================================================
// Problem:
// ==================================================

// Valid Parentheses

// ==================================================
// Approach:
// ==================================================

// 1. Create an empty stack using an array.

// 2. Traverse the string character by character.

// 3. If the current character is an opening bracket:
//       (, {, [
//    push it into the stack.

// 4. If the current character is a closing bracket:
//       ), }, ]
//    pop the top element from the stack.

// 5. Compare the popped opening bracket with the current
//    closing bracket.

// 6. If they don't match, return false immediately.

// 7. After processing the complete string, check the stack.

// 8. If the stack is empty, all brackets were properly matched,
//    so return true.

// 9. If the stack still contains brackets, return false.

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

// - Use a Stack when the most recently opened item must be
//   processed first.
// - `push()` adds an element to the stack.
// - `pop()` removes the top element.
// - Opening brackets are pushed.
// - Closing brackets are matched against the top element.
// - The final stack must be empty for the parentheses to be valid.


function isValidParanthesis(s){

    let stack = [];

    for(let i=0; i<s.length; i++){

        let char = s[i];

        if(char === "(" || char === "{" || char === "["){
            stack.push(char);
        }
        else{
            let top = stack.pop();
            if((char===")" && top!=="(") || (char==="}" && top!=="{") || (char==="]" && top!=="[")){
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValidParanthesis("([])"));
console.log(isValidParanthesis("([})"));
