// Approach:
// 1. Merge both arrays into a single array.
// 2. Sort the merged array in ascending order.
// 3. Find the middle index using Math.floor(length / 2).
// 4. If the length is odd, return the middle element.
// 5. If the length is even, take the two middle elements.
// 6. Add the two middle elements and divide by 2.
// 7. Return the median.


function medianOfTwoArray(arr1, arr2){

    let merged = [...arr1, ...arr2];

    merged.sort((a, b)=> a-b); //[1, 2, 3, 5, 6, 7, 8, 9]

    const mid = Math.floor(merged.length/2);

    if(merged.length%2!==0){
        return merged[mid];
    }

    return (merged[mid-1] + merged[mid])/2;

}

const arr1 = [5, 3, 2, 1];
const arr2 = [9, 6, 8, 7];

console.log(medianOfTwoArray(arr1, arr2));