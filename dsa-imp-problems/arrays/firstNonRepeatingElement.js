// Approach:
// 1. Create an empty object to store the frequency of each element.
// 2. Traverse the array and count how many times each element occurs.
// 3. Traverse the array again in the original order.
// 4. Check whether the current element has a frequency of 1.
// 5. Return the first element whose frequency is 1.
// 6. If no non-repeating element exists, return -1.


function firstNonRepeatingElement(arr){

    let result = {};

    for(let i=0; i<arr.length; i++){

        let element = arr[i];

        if(result[element]){
            result[element]++;
        }else{
            result[element] = 1;
        }

    }

    for(let i=0; i<arr.length; i++){

        let element = arr[i];

        if(result[element]===1){
            return element;
        }
    }

    return -1;

}

console.log(firstNonRepeatingElement([1, 2, 4, 2, 1, 5, 4]));
console.log(firstNonRepeatingElement([1, 2, 1, 3, 4, 3, 2, 4]));