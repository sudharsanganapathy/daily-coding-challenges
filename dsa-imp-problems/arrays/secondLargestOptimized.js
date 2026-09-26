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