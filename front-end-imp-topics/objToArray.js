// Create an object with key-value pairs
// Convert the object into an array of key-value pairs using Object.entries()
// Flatten the nested key-value pairs into a single array using flat()
// Store the flattened result in a new variable
// Display the final array


const obj = {a:1, b:2, c:3};

const result = Object.entries(obj).flat();

console.log(result); // [ 'a', 1, 'b', 2, 'c', 3 ]