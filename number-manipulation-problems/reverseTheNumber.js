// Approach:
// 1. Initialize rev as 0 to store the reversed number.
// 2. Extract the last digit using num % 10.
// 3. Add the extracted digit to rev after shifting the existing digits left.
// 4. Remove the last digit from num using Math.floor(num / 10).
// 5. Repeat the process until num becomes 0.
// 6. Return the reversed number.


function reverseNumber(num){

    let rev = 0;

    while(num>0){
        let digit = num%10;
        rev = rev*10 + digit;
        num = Math.floor(num/10);
    }

    return rev;

}

console.log(reverseNumber(789));
console.log(reverseNumber(1234));