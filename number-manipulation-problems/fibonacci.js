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