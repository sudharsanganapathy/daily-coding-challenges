// Approach:
// 1. Calculate the sum of the first k elements.
// 2. Store this sum as the initial maximum sum.
// 3. Start sliding the window from index k.
// 4. Add the new element entering the window.
// 5. Remove the element leaving the window using arr[i - k].
// 6. Update maxSum with the current window sum.
// 7. Continue until the window reaches the end of the array.
// 8. Return maxSum.


let arr = [2, 1, 5, 1, 3, 2];

let k = 3;

let windowSum = 0;

for(let i=0; i<k; i++){
    windowSum+=arr[i];
}

let maxSum = windowSum;

for(let i=k; i<arr.length; i++){
    windowSum = windowSum + arr[i] - arr[i-k];
    maxSum = Math.max(maxSum, windowSum);
}

console.log(maxSum);
