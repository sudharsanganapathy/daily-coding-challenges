// Approach:
// 1. Numbers less than or equal to 1 are not prime.
// 2. Start checking divisibility from 2.
// 3. Only check divisors up to the square root of n.
// 4. If n is divisible by any number in this range, return false.
// 5. If no divisor is found, return true because n is prime.


function primeNumber(n){

    if(n<=1){
        return false;
    }

    for(let i=2; i<=Math.sqrt(n); i++){

        if(n%i===0){
            return false;
        }
    }

    return true;

}

console.log(primeNumber(3));
console.log(primeNumber(29));
console.log(primeNumber(36));