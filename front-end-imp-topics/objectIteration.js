// Approach:
// 1. Use Object.keys() to get all the keys of the object.
// 2. Use a classic for loop to iterate through the keys.
// 3. Access each value using product[keys[i]].
// 4. Use a for...in loop to directly iterate through the object's keys.
// 5. Access each value using product[key].


const product = {
    name: "iPhone",
    price: 70000,
    category: "Mobile",
    stock: 10
};

// Using classic for loop:
let keys = Object.keys(product);

for(let i=0; i<keys.length; i++){
    console.log(keys[i],":", product[keys[i]]);
}

// Using for in loop:
for(let key in product){
    console.log(key, product[key]);
}
