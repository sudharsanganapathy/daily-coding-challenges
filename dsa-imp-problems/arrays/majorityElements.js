function majorityElements(nums){

    let candidate = 0;
    let count = 0;

    for(let i=0; i<nums.length; i++){

        if(count===0){
            candidate = nums[i];
        }

        if(nums[i]===candidate){
            count++;
        }else{
            count--;
        }

    }
    return candidate;
}

console.log(majorityElements([2,2,1,1,1,2,2]));