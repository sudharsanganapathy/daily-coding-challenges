// Create a function that accepts the input array
// Create an empty array to store the final products
// Traverse through each element of the array
// Initialize the product as 1 for the current element
// Traverse through the entire array again
// Skip the current element using i !== j
// Multiply all other elements with the product
// Add the calculated product to the result array
// Return the result array.


function productOfArrayExceptSelf(nums){

    let result = [];

    for(let i=0; i<nums.length; i++){

        let product = 1;

        for(let j=0; j<nums.length; j++){

            if(i!==j){
                product*=nums[j];
            }

        }
        result.push(product);
    }
    return result;
}

console.log(productOfArrayExceptSelf([1, 2, 3, 4]));