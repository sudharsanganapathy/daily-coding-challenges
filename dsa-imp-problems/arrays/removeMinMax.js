// Approach:
// 1. Find the minimum element in the array using Math.min().
// 2. Find the maximum element in the array using Math.max().
// 3. Create an empty array to store the remaining elements.
// 4. Traverse the original array.
// 5. Skip elements that are equal to the minimum or maximum value.
// 6. Add all other elements to the result array.
// 7. Return the result array.


function removeMinMax(arr){

    let min = Math.min(...arr); // 1
    let max = Math.max(...arr); // 9

    let result = [];

    for(let i=0; i<arr.length; i++){

        if(arr[i]!==min && arr[i]!==max){
            result.push(arr[i]);
        }

    }
    return result;
}

const arr = [5, 4, 2, 1, 7, 8, 9, 3, 6];

console.log(removeMinMax(arr));