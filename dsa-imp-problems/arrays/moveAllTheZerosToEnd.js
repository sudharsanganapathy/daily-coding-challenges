let arr = [1, 0, 3, 0, 2, 5, 0, 6];

let index = 0;

for(let i=0; i<arr.length; i++){

    if(arr[i]!==0){
        arr[index]=arr[i];
        index++;
    }
}

while(index < arr.length){
    arr[index] = 0;
    index++;
}

console.log(arr);