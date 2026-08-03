function deepClone(obj){

    if( obj === null || typeof obj !== "object" ){
        return obj;
    }

    let clone = Array.isArray(obj) ? [] : {};

    // get all keys of obj
    let keys = Object.keys(obj);

    for(let i=0; i<keys.length; i++){

        let key = keys[i];

        clone[key] = deepClone(obj[key]);
        
    }

    return clone;

}

let cloned = {
    name: "sudharsan",
    age: 23,
    address:{
        city: "Bangalore",
        street: "Btm Layout"
    }
}

console.log(deepClone(cloned));