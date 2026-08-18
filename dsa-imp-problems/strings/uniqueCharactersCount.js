// Approach:
// 1. Create an empty object to store the frequency of each character.
// 2. Traverse the string and count how many times each character appears.
// 3. Traverse the string again.
// 4. Check whether the current character has a frequency of exactly 1.
// 5. If its frequency is 1, increment uniqCount.
// 6. Return uniqCount.


function countUniqueCharacters(str){

    let result = {};
    let uniqCount = 0;

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

        if(result[char]===1){
            uniqCount++;
        }
    }

    return uniqCount;

}

const str = "sudharsan";

console.log(countUniqueCharacters(str));