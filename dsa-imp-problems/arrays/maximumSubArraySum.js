// Approach:
// 1. Initialize currentSum with the first element.
// 2. Initialize maxSum with the first element.
// 3. Traverse the array starting from index 1.
// 4. For each element, decide whether to start a new subarray or extend the existing subarray.
// 5. Use Math.max(arr[i], currentSum + arr[i]) to make this decision.
// 6. Update maxSum with the maximum value between maxSum and currentSum.
// 7. Continue until all elements are processed.
// 8. Return maxSum as the maximum subarray sum.


function kadane(arr){

    let currentSum = arr[0];
    let maxSum = arr[0];

    for(let i=1; i<arr.length; i++){

        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;

}

const arr = [-2, 1, 3, 4, -1, 2, 1, -5, 4];

console.log(kadane(arr));