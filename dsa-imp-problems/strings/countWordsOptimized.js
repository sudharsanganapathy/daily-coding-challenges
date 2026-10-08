// Initialize count to track the number of words
// Initialize inWord as false because we start outside a word
// Traverse through every character in the string
// When a non-space character is found while outside a word, increment the count
// Set inWord to true to indicate that we are currently inside a word
// When a space is found, set inWord to false
// Continue scanning to detect the beginning of the next word
// Return the total word count


function countWords(str){

    let count = 0;
    let inWord = false;

    for(let i=0; i<str.length; i++){

        if(str[i]!==" " && inWord===false){
            count++;
            inWord = true;
        }

        else if(str[i]===" "){
            inWord = false;
        }

    }
    return count;
}

console.log(countWords("I love JavaScript"));
console.log(countWords("I   love   JavaScript"));
console.log(countWords("   I love JavaScript  "));