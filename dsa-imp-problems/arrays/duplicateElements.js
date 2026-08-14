function findDuplicates(arr){

    const result = {};
    const duplicates = [];

    for(let i=0; i<arr.length; i++){

        let current = arr[i];

        if(result[current]){
            result[current]++;
        }
        else{
            result[current] = 1;
        }
    }

    for(let i=0; i<arr.length; i++){

        let current = arr[i];

        if(result[current]>1){
            duplicates.push(current);
            result[current] = 0;
        }
    }

    return duplicates;

}

const arr = [1, 2, 1, 3, 2, 4, 5];

console.log(findDuplicates(arr));