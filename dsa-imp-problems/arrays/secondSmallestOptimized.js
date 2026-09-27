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
