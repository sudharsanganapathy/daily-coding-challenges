// Create a function that accepts the array and k
// Traverse through every index from left to right
// Initialize the maximum value for the left portion
// Initialize the minimum value for the right portion
// Find the maximum element from index 0 to the current index
// Find the minimum element from the current index to the last index
// Calculate the instability score using the left maximum and right minimum
// Check if the instability score is less than or equal to k
// If the current index is stable, return that index
// If no stable index is found, return -1


function smallestStableIndex(nums, k) {

    for (let i = 0; i < nums.length; i++) {

        let maxLeft = nums[0];
        let minRight = nums[i];

        // Find maximum from index 0 to i
        for (let j = 0; j <= i; j++) {
            maxLeft = Math.max(maxLeft, nums[j]);
        }

        // Find minimum from index i to the end
        for (let j = i; j < nums.length; j++) {
            minRight = Math.min(minRight, nums[j]);
        }

        // Calculate instability score
        let score = maxLeft - minRight;

        // Check whether current index is stable
        if (score <= k) {
            return i;
        }
    }

    return -1;
}

console.log(smallestStableIndex([5, 0, 1, 4], 3)); 
console.log(smallestStableIndex([3, 2, 1], 1));   
console.log(smallestStableIndex([0], 0));           