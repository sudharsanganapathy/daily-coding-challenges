function firstNonRepeatingElement(arr){

    let result = {};

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

        if(result[element]===1){
            return element;
        }
    }

    return -1;

}

console.log(firstNonRepeatingElement([1, 2, 4, 2, 1, 5, 4]));
console.log(firstNonRepeatingElement([1, 2, 1, 3, 4, 3, 2, 4]));