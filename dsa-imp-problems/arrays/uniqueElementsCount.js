function uniqueElementCount(arr){

    const result = {};
    let uniqCount = 0;

    for(let i=0; i<arr.length; i++){

        let current = arr[i];

        if(result[current]){
            result[current]++;
        }else{
            result[current] = 1;
        }
    }

    for(let i=0; i<arr.length; i++){

        let element = arr[i];
        
        if(result[element]===1){
            uniqCount++;
        }

    }
    return uniqCount;
}

console.log(uniqueElementCount([1, 3, 4, 2, 1, 3, 5, 4]));