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
