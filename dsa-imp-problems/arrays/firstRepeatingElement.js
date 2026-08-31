function firstRepeatingElement(arr){

    const result = {};

    for(let i=0; i<arr.length; i++){

        let element = arr[i];

        if(result[element]){
            result[element]++;
        }else{
            result[element] = 1;
        }
    }

    for(let i=0; i<arr.length; i++){

        let element = arr[i];

        if(result[element]>1){
            return element;
        }
    }
    
    return -1;
    
}

console.log(firstRepeatingElement([1, 2, 4, 3, 2, 5, 4]));
console.log(firstRepeatingElement([1, 2, 3, 4, 5, 6]));

