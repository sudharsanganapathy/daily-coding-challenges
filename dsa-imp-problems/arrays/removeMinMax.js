function removeMinMax(arr){

    let min = Math.min(...arr); // 1
    let max = Math.max(...arr); // 9

    let result = [];

    for(let i=0; i<arr.length; i++){

        if(arr[i]!==min && arr[i]!==max){
            result.push(arr[i]);
        }

    }
    return result;
}

const arr = [5, 4, 2, 1, 7, 8, 9, 3, 6];

console.log(removeMinMax(arr));