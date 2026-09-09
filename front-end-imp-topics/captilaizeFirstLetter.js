let str = "dsa is important";

let result = str
            .split(" ")
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join(" ");

console.log(result);