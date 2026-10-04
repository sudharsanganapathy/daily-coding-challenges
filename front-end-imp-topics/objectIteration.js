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
