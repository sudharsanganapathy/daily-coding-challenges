// Store the first array element as the initial minimum and maximum
// Traverse through the array and compare each element with the current maximum
// Update the maximum value when a larger element is found
// Compare each element with the current minimum
// Update the minimum value when a smaller element is found
// Calculate the difference between the maximum and minimum values
// Display the final difference


function diffBtwMinAndMax(arr){

    let minVal = arr[0];
    let maxVal = arr[0];

    for(let i=1; i<arr.length; i++){

        if(arr[i] < minVal){
            minVal = arr[i];
        }

        if(arr[i] > maxVal){
            maxVal = arr[i];
        }
    }
    return maxVal - minVal;
}

console.log(diffBtwMinAndMax([5, 4, 2, 3, 1]));
console.log(diffBtwMinAndMax([5, 9, 2, 4, 1]));

