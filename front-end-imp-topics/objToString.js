const user = {
    name: "Sudharsan",
    age: 23,
    role: "Developer"
};

const jsonString = JSON.stringify(user);   // Obj --> Json String

const jsObject = JSON.parse(jsonString);   // Json String --> Obj

console.log(jsonString);
console.log(jsObject);