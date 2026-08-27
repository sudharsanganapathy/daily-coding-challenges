// Approach:
// 1. Store multiple configuration objects inside an array.
// 2. Use the spread operator (...) to pass each object separately.
// 3. Use Object.assign() to copy properties from all objects into a new object.
// 4. When the same key exists in multiple objects, the later object's value overwrites the previous value.
// 5. Return the final merged configuration object.


const config = [
  { theme: "dark", color: "blue", fontsize: "20px" },
  { theme: "dark", color: "white" },
  { theme: "light", fontsize: "12px" }
];

const result = Object.assign({}, ...config);

console.log(result);