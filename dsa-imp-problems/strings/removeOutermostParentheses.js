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