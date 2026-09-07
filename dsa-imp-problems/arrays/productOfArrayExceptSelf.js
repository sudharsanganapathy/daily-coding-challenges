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