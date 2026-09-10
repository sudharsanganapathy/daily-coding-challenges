// Check if the given number is less than 1000
// Return 0 because numbers below 1000 do not contain commas
// For numbers 1000 and above, subtract 999 to count the comma-containing numbers
// Return the calculated count
// Test the function with values below and above 1000


function countCommas(n){

    if(n<1000){
        return 0;
    }

    return n-999;
}

console.log(countCommas(1000));
console.log(countCommas(997));