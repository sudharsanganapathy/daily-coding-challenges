// Approach:
// 1. Create an object to store the frequency of each character.
// 2. Traverse the string and count how many times each character appears.
// 3. Traverse the string again from left to right.
// 4. Check the frequency of each character.
// 5. If the frequency is 1, return that character immediately.
// 6. If no character appears only once, return null.


function firstNonRepeatingCharacter(str){

    let result = {};

    for(let i=0; i<str.length; i++){

        let char = str[i];

        if(result[char]){
            result[char]++;
        }
        else{
            result[char]=1;
        }
    }

    for(let i=0; i<str.length; i++){

        let char = str[i];

        if(result[char]===1){
            return char;
        }
            
    }

    return null;

}

console.log(firstNonRepeatingCharacter("array"));