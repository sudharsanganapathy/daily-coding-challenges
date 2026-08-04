function occuranceFinding(str){
    
    let result = {};

    for(let i=0; i<str.length; i++){

        let char = str[i];

        if(result[char]){
            result[char]++;
        }
        else{
            result[char]=1;
        }
    }

    return result;
}

let str = "sudharsan";

console.log(occuranceFinding(str));