// Initialize first and second smallest values as Infinity
// Traverse through each element of the array
// If the current element is smaller than the first smallest value, update both values
// Store the previous first smallest value as the second smallest
// Otherwise, check whether the current element is between the first and second smallest values
// Update the second smallest value when a smaller distinct value is found
// Return null if a second distinct smallest element does not exist
// Otherwise, return the second smallest value


function secondSmallest(arr){

  let first = Infinity;
  let second = Infinity;

  for(let i=0; i<arr.length; i++){

    if(arr[i] < first){
      second = first;
      first = arr[i];
    }
    else if(arr[i] > first && arr[i] < second){
      second = arr[i];
    }
    
  }
  return second === Infinity ? null : second;
}

console.log(secondSmallest([4, 2, 5, 3, 1]));
console.log(secondSmallest([4, 4, 4]));
console.log(secondSmallest([-5, -2, -1, -3]));
