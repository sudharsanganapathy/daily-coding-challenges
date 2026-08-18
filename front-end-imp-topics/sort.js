// Create an array of numbers
const arr = [9, 4, 2, 8, 6, 7 , 1, 3, 5];

// Sort the array in ascending order (smallest to largest)
// The compare function subtracts b from a
arr.sort((a, b) => a - b);

// Sort the array in descending order (largest to smallest)
// The compare function subtracts a from b
arr.sort((a, b) => b - a);

// Print the final sorted array to the console
console.log(arr);
