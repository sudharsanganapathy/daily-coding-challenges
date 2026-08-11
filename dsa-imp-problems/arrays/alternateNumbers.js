// Approach:
// 1. Create separate arrays for positive and negative numbers.
// 2. Traverse the input array and store positive numbers in pos.
// 3. Store negative numbers in neg.
// 4. Create an empty result array.
// 5. Use two pointers, i for pos and j for neg.
// 6. Add one positive and one negative number alternately to result.
// 7. Continue until either pos or neg is completely processed.
// 8. If positive numbers are remaining, add them to result.
// 9. If negative numbers are remaining, add them to result.
// 10. Return the final result array.


function alternate(arr){

    let pos = [];
    let neg = [];

    for(let i=0; i<arr.length; i++){

        if(arr[i]>0){
            pos.push(arr[i]);
        }
        else{
            neg.push(arr[i]);
        }
    }

    let result = [];

    let i=0;
    let j=0;

    while(i<pos.length && j<neg.length){

        result.push(pos[i]);
        i++;

        result.push(neg[j]);
        j++;

    }

    while(i<pos.length){
        result.push(pos[i]);
        i++;
    }

    while(j<neg.length){
        result.push(neg[j]);
        j++;
    }

    return result;

}

console.log(alternate([1, -2, 3, -4, -1, 1]));