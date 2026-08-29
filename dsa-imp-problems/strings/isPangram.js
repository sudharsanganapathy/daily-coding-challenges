// Approach:
// 1. Convert the sentence to lowercase so uppercase and lowercase letters are treated equally.
// 2. Create a Set to store unique alphabet characters.
// 3. Traverse every character in the sentence.
// 4. Check whether the character is between "a" and "z".
// 5. Add valid alphabet characters to the Set.
// 6. Since Set stores only unique values, duplicate letters are automatically ignored.
// 7. A sentence is a pangram if the Set contains all 26 English letters.
// 8. Return true if the Set size is 26; otherwise return false.


function isPangarm(sentence){

    sentence = sentence.toLowerCase();

    let set = new Set();

    for(let i=0; i<sentence.length; i++){

        let char = sentence[i];

        if(char >= "a" && char <= "z"){

            set.add(char);

        }

    }
    return set.size===26;
}

console.log(isPangarm("The quick brown fox jumps over the lazy dog"));
console.log(isPangarm("Hello World!"));