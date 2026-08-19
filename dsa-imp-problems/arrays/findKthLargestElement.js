

function kthLargestElement(arr, k){

    arr.sort((a, b)=> b - a );

    return arr[k-1];
    
}

const arr = [3, 2, 1, 5, 6, 4];

console.log(kthLargestElement(arr, 3));