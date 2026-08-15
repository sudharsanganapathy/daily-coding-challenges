// Approach:
// 1. Create two variables: first for the largest and second for the second largest.
// 2. Compare the first two elements and initialize first and second accordingly.
// 3. Traverse the remaining elements starting from index 2.
// 4. If the current element is greater than first, move first into second and update first.
// 5. Otherwise, if the current element is greater than second and different from first, update second.
// 6. Continue until all elements are processed.
// 7. Return second as the second largest distinct element.


function secondLargestElement(arr){

    let first;
    let second;

    if(arr[0]>arr[1]){
        first = arr[0];
        second = arr[1];
    }
    else{
        first = arr[1];
        second = arr[0];
    }

    for(let i=2; i<arr.length; i++){

        if(arr[i]>first){
            second = first;
            first = arr[i];
        }
        else if(arr[i]>second && arr[i]!==first){
            second = arr[i];
        }
    }

    return second;
}

const arr = [10, 5, 35, 54, 76, 65];

console.log(secondLargestElement(arr));