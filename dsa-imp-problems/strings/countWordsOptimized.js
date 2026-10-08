function countWords(str){

    let count = 0;
    let inWord = false;

    for(let i=0; i<str.length; i++){

        if(str[i]!==" " && inWord===false){
            count++;
            inWord = true;
        }

        else if(str[i]===" "){
            inWord = false;
        }

    }
    return count;
}

console.log(countWords("I love JavaScript"));
console.log(countWords("I   love   JavaScript"));
console.log(countWords("   I love JavaScript   "));