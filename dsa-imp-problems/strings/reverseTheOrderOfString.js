// Approach:
// 1. Create an empty result string to store the reversed word order.
// 2. Create an empty word string to build the current word.
// 3. Traverse the string from right to left.
// 4. If the current character is a space, add the completed word to result.
// 5. Reset word to process the next word.
// 6. If the character is not a space, add it to the beginning of word.
// 7. After the loop, add the remaining word to result.
// 8. Return the result with the words in reverse order.


let str = "Hello Programmer";
let result = "";
let word = "";

for(let i=str.length-1; i>=0; i--){

    if(str[i]===" "){
        result+=word+" ";
        word="";
    }
    else{
        word = str[i]+word;
    }
    
}
result+=word;

console.log(result);
