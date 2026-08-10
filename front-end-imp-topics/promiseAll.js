// Approach:
// 1. Create a new Promise to control the final result.
// 2. Create an empty array to store the results.
// 3. Create a counter to track completed promises.
// 4. If the input array is empty, immediately resolve with an empty array.
// 5. Loop through all the promises using forEach().
// 6. Use Promise.resolve() to handle both Promises and normal values.
// 7. Use .then() when a promise is successfully resolved.
// 8. Store the resolved value at its original index.
// 9. Increment the completed counter.
// 10. Check if all promises are completed.
// 11. If all are completed, resolve the results array.
// 12. If any promise is rejected, immediately reject with the error.


function myPromiseAll(promises){

    return new Promise((resolve, reject) => {
        
        let result = [];

        let completed = 0;

        if(promises.length === 0){
            resolve([]);
            return;
        }

        promises.forEach((promise, index)=>{

            Promise.resolve(promise)

            .then((value)=>{

                result[index] = value;

                completed++;

                if(promises.length===completed){
                    resolve(result);
                }
            })

            .catch((err)=>{
                reject(err)
            })
        })

    })

}

const p1 = new Promise(resolve=>
    setTimeout(()=> resolve("first"), 3000)
)

const p2 = new Promise(resolve =>
    setTimeout(()=> resolve("second"), 2000)
)

const p3 = new Promise(resolve =>
    setTimeout(()=> resolve("third"), 1000)
)

myPromiseAll([p1, p2, p3])
    .then(value => console.log(value))
    .catch(err => console.log(err))