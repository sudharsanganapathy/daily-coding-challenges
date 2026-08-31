// Approach:
// 1. Create an empty object to store the frequency of each element.
// 2. Traverse the array and count the occurrence of every element.
// 3. Traverse the array again in its original order.
// 4. Check whether the current element has a frequency greater than 1.
// 5. Return the first repeating element found.
// 6. If no element repeats, return -1.


function firstRepeatingElement(arr){

    const result = {};

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

        if(result[element]>1){
            return element;
        }
    }
    return -1;
}

console.log(firstRepeatingElement([1, 2, 4, 3, 2, 5, 4]));
console.log(firstRepeatingElement([1, 2, 3, 4, 5, 6]));

