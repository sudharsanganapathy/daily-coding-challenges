// Approach:
// 1. Initialize an empty string to store the result.
// 2. Traverse the string character by character.
// 3. Check whether the current index is even using i % 2 === 0.
// 4. Convert characters at even indexes to uppercase.
// 5. Keep characters at odd indexes unchanged.
// 6. Add each character to the result string.
// 7. Return/print the final modified string.


let str = "programming";

let result = "";

for(let i=0; i<str.length; i++){

    if(i%2===0){
        result+=str[i].toUpperCase();
    }else{
        result+=str[i];
    }

}

console.log(result);