// Approach:
// 1. Create a calculate function that accepts two numbers and a callback function.
// 2. Pass the two numbers to the callback function.
// 3. Create separate functions for addition, subtraction, and multiplication.
// 4. Pass the required operation function as the callback.
// 5. The calculate function executes the callback with the given numbers.
// 6. Return the result produced by the callback function.

// ---> Callback function is a function which passed as an argument to the another function to execute it later.

function calculate(a, b, callback){
    return callback(a, b);
}

function sum(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

function mul(a, b){
    return a*b;
}

console.log(calculate(5, 10, sum));
console.log(calculate(5, 10, sub));
console.log(calculate(5, 10, mul));
