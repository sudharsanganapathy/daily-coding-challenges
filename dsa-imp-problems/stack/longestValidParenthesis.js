// Create a stack with -1 as the initial boundary index
// Traverse through each character in the string
// Push the index of every opening parenthesis onto the stack
// For a closing parenthesis, remove the matching opening parenthesis index
// If the stack becomes empty, store the current index as the new boundary
// Otherwise, calculate the valid substring length using current index minus the stack top index
// Update the maximum valid parentheses length
// Return the maximum length found


function longestValidParenthesis(s){

    let stack = [-1] // Setting -1 as a boundary
    let maxLength = 0;

    for(let i=0; i<s.length; i++){

        if(s[i]==="("){
            stack.push(i);
        }

        else{

            stack.pop();

            if(stack.length===0){
                stack.push(i);
            }else{
                let length = i - stack[stack.length-1];
                maxLength = Math.max(maxLength, length);
            }
        }
    }
    return maxLength;
}

console.log(longestValidParenthesis(")()"));
console.log(longestValidParenthesis("((()))"));
console.log(longestValidParenthesis("()("));
console.log(longestValidParenthesis(""));
