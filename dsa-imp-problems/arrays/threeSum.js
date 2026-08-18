// Approach:
// 1. Create an empty result array to store valid triplets.
// 2. Use the first loop to select the first element.
// 3. Use the second loop to select the second element after the first.
// 4. Use the third loop to select the third element after the second.
// 5. Calculate the sum of the three selected elements.
// 6. If the sum is 0, store the three elements as a triplet.
// 7. Continue checking all possible combinations of three elements.
// 8. Return all valid triplets.



function threeSum(nums){

    let result = [];

    for(let i=0; i<nums.length; i++){

        for(let j=i+1; j<nums.length; j++){

            for(let k=j+1; k<nums.length; k++){

                let sum = nums[i] + nums[j] + nums[k];

                if(sum === 0){
                    result.push([nums[i], nums[j], nums[k]]);
                }

            }

        }

    }

    return result;

}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));