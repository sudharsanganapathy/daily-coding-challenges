// Approach:
// 1. Create an empty object to store the frequency of each number.
// 2. Traverse the array one element at a time.
// 3. Store the current element in a variable.
// 4. If the element already exists in the object, increment its count.
// 5. Otherwise, initialize its count as 1.
// 6. Return the object containing each number and its occurrence count.


function numberOccurance(arr){

    const result = {};

    for(let i=0; i<arr.length; i++){

        let element = arr[i];

        if(result[element]){
            result[element]++;
        }
        else{
            result[element] = 1;
        }

    }
    return result;
}

console.log(numberOccurance([1, 2, 0, 5, 1, 3, 5, 4, 0]));