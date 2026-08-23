// Approach:
// 1. Merge both arrays into a single array using the spread operator.
// 2. Use nested loops to compare every element with the elements after it.
// 3. If the current element is greater than the next selected element, swap them.
// 4. Continue swapping until the elements are arranged in ascending order.
// 5. Return the sorted merged array.


function mergeAndSort(arr1, arr2){

    let merged = [...arr1, ...arr2];

    for(let i=0; i<merged.length; i++){

        for(let j=i+1; j<merged.length; j++){

            if(merged[i]>merged[j]){

                let temp = merged[i];
                merged[i] = merged[j];
                merged[j] = temp;

            }

        }

    }
    return merged;
}

const arr1 = [9, 8, 7, 6, 5];
const arr2 = [4, 3, 2, 1, 0];

console.log(mergeAndSort(arr1, arr2));