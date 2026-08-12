// Approach:
// 1. Create an empty stack to store characters.
// 2. Traverse the string from left to right.
// 3. Check if the stack is not empty and the top character matches the current character.
// 4. If they match, pop the top character.
// 5. Otherwise, push the current character into the stack.
// 6. Continue until all characters are processed.
// 7. Join the stack to form the final string.
// 8. Return the result.



function removeAdjacentDuplicates(s){

    let stack = [];

    for(let i=0; i<s.length; i++){

        let char =s[i];

        if(stack.length>0 && stack[stack.length-1]===char){
            stack.pop();
        }
        else{
            stack.push(char);
        }
    }

    return stack.join("");

}

console.log(removeAdjacentDuplicates("abbacab"));