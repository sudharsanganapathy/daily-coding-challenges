let arr = [1, 2, 3, 5, 8, 9];

let result = [];

for(let i=arr.length-1; i>=0; i--){
    result.push(arr[i]);
}

console.log(result);


// using in-build method:

const newArr = arr.reverse();

console.log(newArr);

