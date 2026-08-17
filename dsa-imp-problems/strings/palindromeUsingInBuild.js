// Approach:
// 1. Convert the string into an array of characters using split("").
// 2. Reverse the characters using reverse().
// 3. Convert the array back into a string using join("").
// 4. Compare the reversed string with the original string.
// 5. If both are equal, the string is a palindrome.
// 6. Otherwise, it is not a palindrome.


function palindrome(str){

    let result = str.split("").reverse().join("");

    return result === str;
}

console.log(palindrome("hello"));
console.log(palindrome("madam"));
console.log(palindrome("racecar"));
