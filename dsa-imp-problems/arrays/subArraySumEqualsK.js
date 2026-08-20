// Approach:
// 1. Initialize count as 0 to store the number of valid subarrays.
// 2. Use the outer loop to choose the starting index of the subarray.
// 3. Initialize sum as 0 for each starting index.
// 4. Use the inner loop to extend the subarray from the current starting index.
// 5. Add each element to sum.
// 6. If sum equals k, increment count.
// 7. Continue checking all possible subarrays.
// 8. Return count.


function subArraySum(nums, k){

    let count = 0;

    for(let i=0; i<nums.length; i++){

        let sum = 0;

        for(let j=i; j<nums.length; j++){

            sum+=nums[j];

            if(sum===k){
                count++
            }

        }
    }
    return count;
}

const nums = [1, 2, 3];
const k = 3;

console.log(subArraySum(nums, k));