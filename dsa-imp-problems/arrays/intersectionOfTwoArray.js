function arrayIntersection(arr1, arr2){

    let result = [];

    for(let i=0; i<arr1.length; i++){

        for(let j=0; j<arr2.length; j++){

            if(arr1[i]===arr2[j] && !result.includes(arr1[i])){
                result.push(arr1[i]);
            }

        }
    }

    return result;
}

const arr1 = [1,2,2,3,4,5];
const arr2 = [2,3,3,4,4,9];

console.log(arrayIntersection(arr1, arr2));