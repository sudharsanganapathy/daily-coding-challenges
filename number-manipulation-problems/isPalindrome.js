// Approach:
// 1. Store the original number in org because num will be modified.
// 2. Initialize rev as 0 to store the reversed number.
// 3. Extract the last digit using num % 10.
// 4. Add the digit to rev after shifting the existing digits left.
// 5. Remove the last digit from num using Math.floor(num / 10).
// 6. Repeat until num becomes 0.
// 7. Compare the reversed number with the original number.
// 8. If both are equal, return true; otherwise return false.


function isPalindrome(num){

    let org = num;
    let rev = 0;

    while(num>0){  
        let digit = num%10;
        rev = rev*10 + digit;
        num = Math.floor(num/10);
    }
    return rev===org;
}

console.log(isPalindrome(121));
console.log(isPalindrome(927));
console.log(isPalindrome(333));
