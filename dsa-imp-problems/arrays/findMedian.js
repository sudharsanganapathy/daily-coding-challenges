// Approach:
// 1. Sort the array in ascending order.
// 2. Find the middle index using Math.floor(arr.length / 2).
// 3. If the array length is odd, return the middle element.
// 4. If the array length is even, take the two middle elements.
// 5. Add the two middle elements and divide by 2.
// 6. Return the median.


function findMedian(arr){

    arr.sort((a, b)=> a-b);

    const mid = Math.floor(arr.length/2);

    if(arr.length %2 !== 0){
        return arr[mid];
    }

    return(arr[mid-1] + arr[mid]) / 2;
}

console.log(findMedian([7, 2, 5, 1, 3]));
console.log(findMedian([9,4,3,1]));