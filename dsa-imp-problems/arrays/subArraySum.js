// Approach:
// 1. Initialize left pointer at 0.
// 2. Initialize sum as 0 to maintain the current window sum.
// 3. Traverse the array using the right pointer.
// 4. Add the current element to sum.
// 5. If sum becomes greater than target, shrink the window from the left.
// 6. Remove arr[left] from sum and move left forward.
// 7. Continue shrinking until sum becomes less than or equal to target.
// 8. If sum becomes equal to target, return true.
// 9. If the entire array is processed without finding the target sum, return false.


function subArraySum(arr, target){

    let left = 0;
    let sum = 0;

    for(let i=0; i<arr.length; i++){

        sum+=arr[i];

        while(sum>target){
            sum = sum-arr[left];
            left++;
        }

        if(sum===target){
            return true;
        }
    }
    return false;
}

console.log(subArraySum([1, 2, 3, 7, 5], 12));