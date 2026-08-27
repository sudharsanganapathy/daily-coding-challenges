// Approach:
// 1. Store the original number because num will be modified.
// 2. Count the number of digits in the original number.
// 3. Initialize sum as 0.
// 4. Extract the last digit using num % 10.
// 5. Raise the digit to the power of the total number of digits.
// 6. Add the result to sum.
// 7. Remove the last digit using Math.floor(num / 10).
// 8. Repeat until all digits are processed.
// 9. Compare the calculated sum with the original number.
// 10. If both are equal, the number is an Armstrong number.


function armstrong(num){

    let org = num;
    let sum = 0;
    let digits = num.toString().length;

    while(num>0){

        let digit = num%10;
        sum+= digit**digits;
        num = Math.floor(num/10);

    }
    return org===sum ? "Armstrong" : "Not Armstrong";
}

console.log(armstrong(153));
console.log(armstrong(121));