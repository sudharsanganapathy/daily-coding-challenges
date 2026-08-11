let str = "Hello Programmer";
let result = "";
let word = "";

for(let i=str.length-1; i>=0; i--){

    if(str[i]===" "){
        result+=word+" ";
        word="";
    }
    else{
        word = str[i]+word;
    }
    
}
result+=word;

console.log(result);
