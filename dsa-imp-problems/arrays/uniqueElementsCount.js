// Create an empty object to store the frequency of each element
// Traverse the array and count how many times each element occurs
// Traverse the array again to find elements whose frequency is exactly one
// Increment the unique element count for every non-repeating element
// Return the total number of unique elements


function uniqueElementCount(arr){

    const result = {};
    let uniqCount = 0;

    for(let i=0; i<arr.length; i++){

        let current = arr[i];

        if(result[current]){
            result[current]++;
        }else{
            result[current] = 1;
        }
    }

    for(let i=0; i<arr.length; i++){

        let element = arr[i];
        
        if(result[element]===1){
            uniqCount++;
        }

    }
    return uniqCount;
}

console.log(uniqueElementCount([1, 3, 4, 2, 1, 3, 5, 4]));