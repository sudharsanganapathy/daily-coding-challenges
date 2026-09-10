function countCommas(n){

    if(n<1000){
        return 0;
    }

    return n-999;
}

console.log(countCommas(1000));
console.log(countCommas(997));