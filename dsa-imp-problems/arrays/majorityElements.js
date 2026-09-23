// Initialize a candidate element and its count
// Traverse through every element in the array
// If the count becomes zero, choose the current element as the new candidate
// Increase the count when the current element matches the candidate
// Decrease the count when the current element differs from the candidate
// Return the final candidate as the majority element


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