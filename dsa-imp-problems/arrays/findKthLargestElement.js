// Approach:
// 1. Sort the array in descending order.
// 2. The largest element will be at index 0.
// 3. Since arrays use zero-based indexing, the kth largest element is at index k - 1.
// 4. Return arr[k - 1].


function kthLargestElement(arr, k){

    arr.sort((a, b)=> b - a );

    return arr[k-1];
    
}

const arr = [3, 2, 1, 5, 6, 4];

console.log(kthLargestElement(arr, 3));