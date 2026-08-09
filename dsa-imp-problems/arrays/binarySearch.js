// ==================================================
// Problem:
// ==================================================

// Search for a target element in a sorted array using
// Binary Search.

// ==================================================
// Approach:
// ==================================================

// 1. Make sure the array is sorted.

// 2. Initialize two pointers:

//    low = 0
//    high = arr.length - 1

// 3. Continue searching while:

//    low <= high

// 4. Find the middle index:

//    mid = Math.floor((low + high) / 2)

// 5. Compare arr[mid] with the target.

// 6. If:

//    arr[mid] === target

//    The target is found.
//    Return `mid`.

// 7. If:

//    target < arr[mid]

//    The target must be on the LEFT side.

//    So eliminate the right half:

//    high = mid - 1

// 8. Otherwise:

//    target > arr[mid]

//    The target must be on the RIGHT side.

//    So eliminate the left half:

//    low = mid + 1

// 9. Repeat the process until the target is found
//    or `low > high`.

// 10. If the loop ends without finding the target,
//     return `-1`.

// ==================================================
// Example:
// ==================================================

// Array:
// [10, 20, 30, 40, 50]

// Target:
// 30

// low = 0
// high = 4

// mid = 2

// arr[2] = 30

// 30 === 30

// Therefore:
// return 2

// ==================================================
// Key Learning:
// ==================================================

// Binary Search works by repeatedly eliminating half
// of the search space.

// target < arr[mid]
//         ↓
// Search LEFT
// high = mid - 1

// target > arr[mid]
//         ↓
// Search RIGHT
// low = mid + 1

// ==================================================
// Complexity:
// ==================================================

// Time  → O(log n)
// Space → O(1)
// ==================================================



function binarySearch(arr, target){

    let low = 0;
    let high = arr.length-1;

    while(low<=high){

        let mid = Math.floor((low+high)/2);

        if(arr[mid]===target){
            return mid;
        }

        else if(target<arr[mid]){
            high = mid-1;
        }

        else{
            low = mid+1;
        }
    }
    return -1;
}

console.log(binarySearch([10, 20, 30, 40, 50], 30));