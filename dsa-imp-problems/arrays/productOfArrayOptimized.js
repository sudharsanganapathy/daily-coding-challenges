// Create the result array with the same length as the input array
// Traverse from left to right and store the product of all elements before the current index
// Update the left product by multiplying it with the current element
// Initialize the right product as 1
// Traverse from right to left and multiply the result with the product of all elements after the current index
// Update the right product by multiplying it with the current element
// Return the result array containing the product of all elements except itself


function productOfArrayOptimized(nums){

    let n = nums.length; // 4

    let result = new Array(n).fill(1); // [1, 1, 1, 1]

    let leftProduct = 1;

    for(let i=0; i<n; i++){
        result[i] = leftProduct;
        leftProduct*=nums[i];
    }

    let rightProduct = 1;

    for(let i=n-1; i>=0; i--){
        result[i]*= rightProduct;
        rightProduct*=nums[i];
    }
    return result;
}

console.log(productOfArrayOptimized([1, 2, 3, 4]));