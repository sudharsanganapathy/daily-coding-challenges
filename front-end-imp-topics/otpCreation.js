// Approach:
// 1. Generate a random decimal using Math.random().
// 2. Scale it to the 6-digit range using 900000.
// 3. Add 100000 so the minimum value is 100000.
// 4. Use Math.floor() to remove the decimal part.
// 5. Return the generated 6-digit OTP.


function generateOTP(){

    return Math.floor( 100000 + Math.random() * 900000 );

}

console.log(generateOTP());
console.log(generateOTP());
console.log(generateOTP());
