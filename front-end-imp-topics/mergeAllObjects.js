// Approach:
// 1. Create an empty object as the initial accumulator.
// 2. Traverse the configuration array using reduce().
// 3. Spread the existing accumulator into a new object.
// 4. Spread the current object into the same object.
// 5. If duplicate keys exist, the current object's value overwrites the previous value.
// 6. Return the newly merged object as the accumulator.
// 7. After all objects are processed, return the final merged configuration.


const config = [
  { theme: "dark", color: "blue", fontsize: "20px" },
  { theme: "dark", color: "white" },
  { theme: "light", fontsize: "12px" }
];

const result = config.reduce((acc, curr) => {
  return { ...acc, ...curr };
}, {});

console.log(result);
