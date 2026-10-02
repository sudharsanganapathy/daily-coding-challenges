const products = [
  { name: "iPhone", category: "Mobile" },
  { name: "Samsung", category: "Mobile" },
  { name: "Dell", category: "Laptop" },
  { name: "HP", category: "Laptop" }
];

const result = Object.groupBy(products, (product) => product.category);

console.log(result);