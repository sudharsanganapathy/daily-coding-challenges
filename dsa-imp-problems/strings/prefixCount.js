// Approach:
// 1. Initialize count as 0.
// 2. Traverse every word in the words array.
// 3. Use startsWith() to check whether the current word begins with the given prefix.
// 4. If the word starts with the prefix, increase count by 1.
// 5. Continue until all words are checked.
// 6. Return count as the number of matching words.


function prefixCount(words, pref){

    let count = 0;

    for(let i=0; i<words.length; i++){

        if(words[i].startsWith(pref)){
            count++;
        }

    }

    return count;

}

const words = ["pay", "attention", "practice", "attend", "atomic"];

console.log(prefixCount(words, "at"));