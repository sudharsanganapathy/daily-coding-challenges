// Create an array containing multiple numbers
// Use the spread operator to pass array elements to Math.min()
// Store the smallest element in the min variable
// Use the spread operator to pass array elements to Math.max()
// Store the largest element in the max variable
// Display the minimum and maximum values


const arr = [5, 3, 1, 4, 2, 9, 8, 7];

const min = Math.min(...arr);
const max = Math.max(...arr);

console.log(min);
console.log(max);
