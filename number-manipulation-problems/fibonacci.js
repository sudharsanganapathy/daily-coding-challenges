// Approach:
// 1. Initialize the first two Fibonacci numbers as a = 0 and b = 1.
// 2. Print the first two numbers.
// 3. Start the loop from index 2 because the first two numbers are already handled.
// 4. Calculate the next number by adding a and b.
// 5. Print the next Fibonacci number.
// 6. Move a to b and b to next for the next iteration.
// 7. Continue until n Fibonacci numbers are generated.


function fibonacci(n){

    let a = 0;
    let b = 1;

    console.log(a);
    console.log(b);

    for(let i=2; i<n; i++){

        let next = a + b;

        console.log(next);

        a = b;
        b = next;

    }

}

fibonacci(7);