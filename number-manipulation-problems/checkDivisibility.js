// Approach:
// 1. Initialize sum as 0 to store the sum of all digits.
// 2. Initialize prod as 1 to store the product of all digits.
// 3. Store the original number in temp so that n remains unchanged.
// 4. Extract the last digit using temp % 10.
// 5. Add the digit to sum.
// 6. Multiply the digit with prod.
// 7. Remove the last digit using Math.floor(temp / 10).
// 8. Repeat until all digits are processed.
// 9. Check whether n is divisible by (sum + prod).
// 10. Return true if divisible, otherwise return false.


function checkDivisibility(n){

    let sum = 0;
    let prod = 1;
    let temp = n;

    while(temp!==0){
        let digit = temp%10;
        sum+=digit;
        prod*=digit;
        temp = Math.floor(temp/10);
    }

    return n%(sum+prod)===0;

}

console.log(checkDivisibility(19));
console.log(checkDivisibility(99));
console.log(checkDivisibility(23));