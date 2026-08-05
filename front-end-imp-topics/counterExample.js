function createCounter(){

    let count = 0; 

    return function(){

        count++;
        return count; // inner function remember outer function variable even after outer function execution is completed --> closure

    }

}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
