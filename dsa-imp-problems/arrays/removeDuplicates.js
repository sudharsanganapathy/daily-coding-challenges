// Approach:
// 1. Create an empty result array to store unique elements.
// 2. Traverse the original array from left to right.
// 3. Check whether the current element already exists in result using includes().
// 4. If the element does not exist, add it to result using push().
// 5. If it already exists, skip it.
// 6. Continue until all elements are processed.
// 7. Return or print the result array containing only unique elements.


const names = ["sudharsan", "Karthick", "abi", "abi", "dinesh", "dinesh"];

let result = [];

for(let i=0; i<names.length; i++){
    if(!result.includes(names[i])){
        result.push(names[i]);
    }
}

console.log(result);