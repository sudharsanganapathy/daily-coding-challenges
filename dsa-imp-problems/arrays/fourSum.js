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