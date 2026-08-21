// Approach:
// 1. Create an empty result array to store valid quadruplets.
// 2. Use the first loop to select the first element.
// 3. Use the second loop to select the second element after the first.
// 4. Use the third loop to select the third element after the second.
// 5. Use the fourth loop to select the fourth element after the third.
// 6. Calculate the sum of the four selected elements.
// 7. If the sum equals the target, store the four elements as a quadruplet.
// 8. Continue checking all possible combinations.
// 9. Return the result.


function fourSum(nums, target){

    const result = [];

    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                for(let l=k+1; l<nums.length; l++){

                    let sum = nums[i] + nums[j] + nums[k] + nums[l];

                    if(sum===target){
                        result.push([nums[i], nums[j], nums[k], nums[l]]);
                    }

                }
            }
        }
    }
    return result;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));