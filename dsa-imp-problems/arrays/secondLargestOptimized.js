// Create a function that accepts an array
// Initialize first as -Infinity to find the largest element
// Initialize second as -Infinity to find the second largest element
// Loop through every element in the array
// If the current element is greater than first
// Move the current first value to second
// Update first with the current element
// Otherwise, check if the current element is greater than second
// Also make sure the current element is not equal to first
// If true, update second with the current element
// After the loop, check if second is still -Infinity
// If it is, there is no second largest distinct element
// Otherwise, return second


function secondLargest(arr){

    let first = -Infinity;
    let second = -Infinity;

    for(let i=0; i<arr.length; i++){

        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if(arr[i] > second && arr[i]!==first){
            second = arr[i];
        }

    }

    if(second === -Infinity){
        return "No second Largest";
    }
    return second;
}

console.log(secondLargest([10, 5, 2, 10, 15, 20]));
// 15

console.log(secondLargest([10, 15]));
// 10

console.log(secondLargest([5, 5, 5]));
// No second largest

console.log(secondLargest([10, 10, 5]));
// 5

console.log(secondLargest([5, 10, 10]));
// 5

console.log(secondLargest([20, 10, 5, 20, 15]));
// 15

console.log(secondLargest([-5, -10, -2, -8]));
// -5

console.log(secondLargest([5]));
// No second largest