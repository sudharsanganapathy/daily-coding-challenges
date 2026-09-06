// Create a function to calculate the factorial of a number
// Initialize the factorial value as 1
// Loop from 1 up to the given number
// Multiply the current factorial value by each number
// Return the final factorial value
// Call the function and display the result


function factorial(n){

  let fact = 1;

  for(let i=1; i<=n; i++){
    fact*=i;
  }
  return fact;
}

console.log(factorial(5));