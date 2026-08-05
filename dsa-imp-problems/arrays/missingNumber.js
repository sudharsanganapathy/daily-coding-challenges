let arr = [1,3,4,5,6];

let n = arr.length+1;

let actualSum = 0;

let expectedSum = (n*(n+1)/2);

for(let i=0; i<arr.length; i++){
    actualSum+=arr[i];
}

let missing = expectedSum - actualSum;

console.log(missing);