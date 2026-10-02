// Create an array containing product objects
// Group the products based on their category property
// Use Object.groupBy() with the category as the grouping key
// Store the grouped products in a new object
// Display the grouped result


const products = [
  { name: "iPhone", category: "Mobile" },
  { name: "Samsung", category: "Mobile" },
  { name: "Dell", category: "Laptop" },
  { name: "HP", category: "Laptop" }
];

const result = Object.groupBy(products, (product) => product.category);

console.log(result);