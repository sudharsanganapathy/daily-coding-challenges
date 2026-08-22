// Approach:
// 1. Create an empty Set to store elements we have already seen.
// 2. Traverse the array from left to right.
// 3. For each element, check whether it already exists in the Set.
// 4. If it exists, a duplicate is found, so return true.
// 5. If it does not exist, add the element to the Set.
// 6. Continue until all elements are checked.
// 7. If no duplicate is found, return false.


function containsDuplicate(arr){

    const set = new Set();

    for(let i=0; i<arr.length; i++){

        if(set.has(arr[i])){
            return true;
        }
        set.add(arr[i]);
    }
    return false;
}

console.log(containsDuplicate([1, 2, 3 ,4]));
console.log(containsDuplicate([1, 2, 3 ,4, 1]));
