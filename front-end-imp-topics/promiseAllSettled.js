// Approach:
// 1. Create multiple promises that may either resolve or reject.
// 2. Pass all promises into Promise.allSettled().
// 3. allSettled() waits until every promise is either fulfilled or rejected.
// 4. It does not stop when one promise rejects.
// 5. Each result contains a status property.
// 6. Fulfilled promises contain a value property.
// 7. Rejected promises contain a reason property.
// 8. The final result array maintains the same order as the input promises.


const p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Success")
    }, 2000);
})

const p2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        reject("Failed due to some error!")
    }, 1000)
})

Promise.allSettled([p1, p2]).then(result => console.log(result)).catch(err => console.log(err));