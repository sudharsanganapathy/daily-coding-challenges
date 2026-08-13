// Approach:
// 1. Create an empty string to store unique characters.
// 2. Traverse the input string from left to right.
// 3. Check whether the current character already exists in result.
// 4. If it does not exist, add it to result.
// 5. If it already exists, skip it.
// 6. Continue until all characters are processed.
// 7. Return the result containing only distinct characters.


const str = "programming";

let result = "";

for(let i=0; i<str.length; i++){

    if(!result.includes(str[i])){
        result+=str[i];
    }

}

console.log(result);