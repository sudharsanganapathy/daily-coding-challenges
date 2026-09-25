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