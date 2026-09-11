const obj = {a:1, b:2, c:3};

const result = Object.entries(obj).flat();

console.log(result); // [ 'a', 1, 'b', 2, 'c', 3 ]