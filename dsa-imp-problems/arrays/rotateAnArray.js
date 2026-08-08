// ==================================================
// Problem:
// ==================================================

// Rotate Array to the Right by K Positions

// ==================================================
// Approach:
// ==================================================

// 1. Find the length of the array.

// 2. Use `k = k % n` to handle cases where k is greater
//    than the array length.

// 3. Reverse the entire array.

// 4. Reverse the first `k` elements.

// 5. Reverse the remaining elements from index `k`
//    to the end.

// 6. Return the rotated array.

// ==================================================
// Example:
// ==================================================

// Input:
// [10, 20, 30, 40, 50], k = 2

// Step 1: Reverse entire array

// [50, 40, 30, 20, 10]

// Step 2: Reverse first 2 elements

// [40, 50, 30, 20, 10]

// Step 3: Reverse remaining elements

// [40, 50, 10, 20, 30]

// Final Answer:

// [40, 50, 10, 20, 30]

// ==================================================
// Time Complexity:
// ==================================================

// O(n)

// ==================================================
// Space Complexity:
// ==================================================

// O(1)

// ==================================================
// Key Learning:
// ==================================================

// - Use the reversal algorithm to rotate an array.
// - `k % n` handles rotations larger than the array size.
// - The algorithm modifies the array in-place.
// - Two pointers are used inside the `reverse()` function.



function rotateArray(arr, k){

    let n = arr.length;
    k = k%n;

    function reverse(start, end){
        while(start<end){
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    reverse(0, n-1);
    reverse(0, k-1);
    reverse(k, n-1);

    return arr;
}

console.log(rotateArray([10, 20, 30, 40, 50], 2));