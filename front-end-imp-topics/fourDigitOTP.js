// Approach:
// 1. Generate a random decimal using Math.random().
// 2. Scale it to the 4-digit range using 9000.
// 3. Add 1000 so the minimum value is 1000.
// 4. Use Math.floor() to remove the decimal part.
// 5. Return the generated 4-digit OTP.



function fourDigitOTP(){

    return Math.floor(1000 + Math.random() * 9000);

}

console.log(fourDigitOTP());
console.log(fourDigitOTP());

