// Approach:
// 1. Create an empty string to store the reversed string.
// 2. Start traversing the given string from the last character.
// 3. Move backwards until reaching the first character.
// 4. Add each character to the result string.
// 5. Return the reversed string.


function reverseString(str){

    let result = "";

    for(let i=str.length-1; i>=0; i--){
        result+=str[i];
    }

    return result;

}

console.log(reverseString("I Love JavaScript"));