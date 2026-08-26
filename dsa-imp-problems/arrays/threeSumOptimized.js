// Approach:
// 1. Sort the array in ascending order.
// 2. Fix one element using the outer loop.
// 3. Skip duplicate values for the fixed element.
// 4. Use two pointers: left and right.
// 5. Calculate the sum of the three selected elements.
// 6. If the sum is 0, store the triplet.
// 7. Skip duplicate values from both left and right pointers.
// 8. Move both pointers inward after finding a valid triplet.
// 9. If the sum is less than 0, move left forward to increase the sum.
// 10. If the sum is greater than 0, move right backward to decrease the sum.
// 11. Continue until left and right pointers meet.
// 12. Return all unique triplets.


function threeSumOptimized(nums){

    let result = [];

    nums.sort((a,b)=> a-b);

    for(let i=0; i<nums.length-2; i++){

        if(i>0 && nums[i]===nums[i-1]){
            continue;
        }

        let left = i+1;
        let right = nums.length-1;

        while(left<right){

            let sum = nums[i] + nums[left] + nums[right];

            if(sum===0){

                result.push([nums[i], nums[left], nums[right]]);

                while(left < right && nums[left]===nums[left+1]){
                    left++;
                }

                while(left < right && nums[right]===nums[right-1]){
                    right--;
                }

                left++;
                right--;

            }
            else if(sum<0){
                left++;
            }
            else{
                right--;
            }

        }
    }

    return result;

}

console.log(threeSumOptimized([-1, 0, 1, 2, -1, -4]));