// Approach:
// 1. Initialize count as 0.
// 2. Traverse each character of the string.
// 3. Check whether the current character is a vowel.
// 4. If it is a vowel, increment count by 1.
// 5. Continue until all characters are checked.
// 6. Return the total vowel count.


function countVowels(str){

    let count = 0;

    for(let i=0; i<str.length; i++){

        let char = str[i];

        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }

    return count;

}

console.log(countVowels("PrOgrAmMIng".toLowerCase()));