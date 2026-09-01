// Array - Merging Using Spread:

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9 ,10];
const merged = [...arr1, ...arr2];

console.log(merged);


// Object - Merging Using Spread:

const obj1 = {a:1, b:2};
const obj2 = {a:3, c:4};
const mergedObj = {...obj1, ...obj2};

console.log(mergedObj);