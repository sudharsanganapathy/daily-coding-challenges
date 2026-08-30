// Approach:
// 1. Create an empty object to store the frequency of each word.
// 2. Traverse the array of words.
// 3. Store the current word in a variable.
// 4. If the word already exists, increment its frequency.
// 5. Otherwise, initialize its frequency as 1.
// 6. Return the frequency object.


function wordsFrequency(words){

    let result = {};

    for(let i = 0; i < words.length; i++){

        let word = words[i];

        if(result[word]){
            result[word]++;
        }else{
            result[word] = 1;
        }
    }

    return result;
}

console.log(wordsFrequency(["hello", "javascript", "hello", "world"]));