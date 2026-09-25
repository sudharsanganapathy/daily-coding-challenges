// Create an empty object to store the frequency of each element
// Initialize variables to track the element with the highest frequency
// Traverse through each element of the array
// Increment the frequency of the current element
// Store the current frequency if the element becomes the most frequent
// Update the maximum frequent element
// Return the element with the highest frequency.


function maxFrequent(arr){

  let result = {};
  let maxCount = 0;
  let frequency = 0;

  for(let i=0; i<arr.length; i++){

    let num = arr[i];

    if(result[num]){
      result[num]++;
    }else{
      result[num] = 1;
    }

    if(result[num] > frequency){
      frequency = result[num] // Storing frequency
      maxCount = num; // Updating num
    }
    
  }
  return maxCount;
}

console.log(maxFrequent([1, 2, 3, 2, 1, 2]));