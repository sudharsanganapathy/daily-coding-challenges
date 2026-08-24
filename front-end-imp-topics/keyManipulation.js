// Approach:
// 1. Use map() to create a new array.
// 2. Destructure name and age from each object.
// 3. Create a new object for each user.
// 4. Store name in the new "Name" key.
// 5. Store age in the new "Age" key.
// 6. Return the new array.


const users = [
    {name: "Sudharsan", age:23},
    {name: "Karthi", age:24},
    {name: "Abi", age:22}
];

const result = users.map(user=>{

    const{name, age} = user;

    return{
        Name:name,
        Age:age
    }
});

console.log(result);
console.log(users);