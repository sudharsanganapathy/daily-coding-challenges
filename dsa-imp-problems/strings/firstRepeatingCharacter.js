// Approach:
// 1. Create an empty object to store the frequency of each character.
// 2. Traverse the string and count the occurrence of every character.
// 3. Traverse the string again from left to right.
// 4. Check whether the current character has a frequency greater than 1.
// 5. Return the first character that repeats.
// 6. If no character repeats, return null.


function firstRepeatingCharacter(str){

    const result = {};

    for(let i=0; i<str.length; i++){

        let char = str[i];

        if(result[char]){
            result[char]++;
        }
        else{
            result[char] = 1;
        }
    }
    
    for(let i=0; i<str.length; i++){

        let char = str[i];

        if(result[char]>1){
            return char;
        }
    }
    return null;
}

console.log(firstRepeatingCharacter("abcd"));
console.log(firstRepeatingCharacter("programming"));
