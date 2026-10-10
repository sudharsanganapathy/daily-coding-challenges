// Initialize an empty string to store the result
// Initialize a counter to track the nesting depth of parentheses
// Traverse through each character in the string
// If the character is an opening parenthesis, check whether it is inside another primitive group
// Keep the opening parenthesis only when the current nesting depth is greater than zero
// Increase the nesting depth after processing the opening parenthesis
// If the character is a closing parenthesis, decrease the nesting depth
// Keep the closing parenthesis only when the updated nesting depth is greater than zero
// Return the string without the outermost parentheses


function removeParentheses(s){

    let result = "";
    let count = 0;

    for(let i=0; i<s.length; i++){

        let char = s[i]

        if(char==="("){

            if(count > 0){
                result+=char;
            }
            count++;
        }

        else{

            count--;

            if(count > 0){
                result+=char;
            }
        }
    }
    return result;
}

console.log(removeParentheses("(()())(())"));
console.log(removeParentheses("(()())(())(()(()))"));
console.log(removeParentheses("()()"));