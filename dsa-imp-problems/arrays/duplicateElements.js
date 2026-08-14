// Approach:
// 1. Create an empty object to store the frequency of each element.
// 2. Create an empty array to store duplicate elements.
// 3. Traverse the array and count how many times each element appears.
// 4. Traverse the array again to check the frequency of each element.
// 5. If an element's frequency is greater than 1, it is a duplicate.
// 6. Push the duplicate element into the duplicates array.
// 7. Set its frequency to 0 after pushing so the same duplicate is not added again.
// 8. Return the duplicates array.


function findDuplicates(arr){

    const result = {};
    const duplicates = [];

    for(let i=0; i<arr.length; i++){

        let current = arr[i];

        if(result[current]){
            result[current]++;
        }
        else{
            result[current] = 1;
        }
    }

    for(let i=0; i<arr.length; i++){

        let current = arr[i];

        if(result[current]>1){
            duplicates.push(current);
            result[current] = 0;
        }
    }

    return duplicates;

}

const arr = [1, 2, 1, 3, 2, 4, 5];

console.log(findDuplicates(arr));