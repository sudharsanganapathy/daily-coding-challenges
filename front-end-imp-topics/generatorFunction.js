// Create a generator function using the function* syntax
// Pause the generator and return 1 using yield
// Resume the generator and return 2 using yield
// Resume again and return 3 using yield
// Create a generator object by calling the generator function
// Call next() to execute the generator until the next yield
// Call next() again to resume execution from where it stopped
// After all yield statements are completed, next() returns done: true


function* numbers(){
    yield 1;
    yield 2;
    yield 3;
}

const gen = numbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
