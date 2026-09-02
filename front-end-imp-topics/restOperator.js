// Rest with Object:

const user = {
    name: "Sudharsan",
    age: 23,
    role: "Developer",
    city: "Bangalore"
};

const {name, ...otherDetails} = user;

console.log(name);
console.log(otherDetails);


// Rest with Array:

function collects(...numbers){
    console.log(numbers);
}

collects(1, 2, 3, 4, 5);