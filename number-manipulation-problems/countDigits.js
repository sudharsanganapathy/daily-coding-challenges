// Approach:
// 1. Initialize count as 0.
// 2. Extract the last digit using num % 10.
// 3. Increment count for every digit.
// 4. Remove the last digit using Math.floor(num / 10).
// 5. Repeat until the number becomes 0.
// 6. Return the total digit count.


function countDigits(num){

    let count = 0;

    while(num>0){
        let digit = num%10;
        count++;
        num = Math.floor(num/10);
    }
    return count;
}

console.log(countDigits(4567));
console.log(countDigits(123));
