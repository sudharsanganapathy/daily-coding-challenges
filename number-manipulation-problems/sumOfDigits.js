// Approach:
// 1. Initialize sum as 0.
// 2. Extract the last digit using num % 10.
// 3. Add the extracted digit to sum.
// 4. Remove the last digit using Math.floor(num / 10).
// 5. Repeat until all digits are processed.
// 6. Return the sum of all digits.


function sumOfDigits(num){

    let sum = 0;

    while(num>0){
        let digit = num%10;
        sum += digit;
        num = Math.floor(num/10);
    }

    return sum;

}

console.log(sumOfDigits(555));
console.log(sumOfDigits(352));