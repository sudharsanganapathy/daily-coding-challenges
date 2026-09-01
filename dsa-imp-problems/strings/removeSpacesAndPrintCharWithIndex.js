let str = "My Name is Sudharsan";

let updated = str.replace(/\s/g, "");

for(let i=0; i<updated.length; i++){
    console.log("Letter : " + updated[i] + " | " + "Index : " + i);
}