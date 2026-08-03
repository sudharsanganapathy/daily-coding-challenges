function flattenArray(arr){

    let result = [];

    for(let i=0; i<arr.length; i++){

        if(Array.isArray(arr[i])){
            result = result.concat(flattenArray(arr[i]));
        }else{
            result.push(arr[i]);
        }
    }

    return result;

}

const arr = [1,[2,[2,3],4],5];

console.log(flattenArray(arr));

// we can also flatten the array using in-build method like .flat();

// const arr = [1,[2,[2,3],4],5].flat(Infinity);

// console.log(arr);
