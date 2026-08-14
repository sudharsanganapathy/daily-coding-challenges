// Approach:
// 1. Create an empty object to store groups of anagrams.
// 2. Traverse each word in the input array.
// 3. Sort the characters of the current word.
// 4. Use the sorted characters as the unique key.
// 5. Check whether the key already exists in groups.
// 6. If the key does not exist, create an empty array for that key.
// 7. Push the original word into the corresponding group.
// 8. Continue until all words are processed.
// 9. Use Object.values() to return only the grouped arrays.


function groupAnagrams(strs){

    const groups = {};

    for(let i=0; i<strs.length; i++){

        let word = strs[i];

        let key = word.split("").sort().join("");

        if(!groups[key]){
            groups[key] = [];
        }

        groups[key].push(word);
    }

    return Object.values(groups);

}

const strs = ["eat", "tea", "ate", "silent", "listen", "tan", "nat", "bat"];

console.log(groupAnagrams(strs));