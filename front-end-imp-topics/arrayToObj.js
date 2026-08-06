const arr = ["a", 1, "b", 2, "c", 3]; // {a:1, b:2, c:3}

let result = {};

for(let i=0; i<arr.length; i+=2){

    result[arr[i]] = arr[i+1];

}

console.log(result);

// Object to Array : [ 'a', 1, 'b', 2, 'c', 3 ]

let obj = { a: 1, b: 2, c: 3 };

let res = Object.entries(obj).flat();

console.log(res);