// Flatten the nested array completely
// Traverse the flattened array using its index
// Square the number when the index is even
// Cube the number when the index is odd
// Traverse the transformed array
// Check whether each number is divisible by 5
// Add the divisible numbers to the sum
// Return the final sum


function processArray(arr){

    let flatArray = arr.flat(Infinity);

    let result = [];

    for(let i=0; i<flatArray.length; i++){

        if(i%2===0){
            result.push(flatArray[i]**2);
        }else{
            result.push(flatArray[i]**3);
        }

    }

    let sum = 0;

    for(let i=0; i<result.length; i++){

        if(result[i]%5===0){
            sum+=result[i];
        }

    }
    return sum;
}

console.log(processArray([1, 2, [3, 4], [5, [6, 7]], 8]));