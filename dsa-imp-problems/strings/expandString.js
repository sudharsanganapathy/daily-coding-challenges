function expandString(str){

    let result = "";
    let count = 0;

    for(let i=0; i<str.length; i++){

        if(!isNaN(str[i])){
            count = Number(str[i]);
        }
        else{
            result+=str[i].repeat(count);
        }
    }

    return result;

}

console.log(expandString("2a3b4c"));