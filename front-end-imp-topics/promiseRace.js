// Approach:
// 1. Create multiple promises with different completion times.
// 2. Pass all promises into Promise.race().
// 3. Promise.race() waits for the first promise to settle.
// 4. A promise is settled when it either fulfills or rejects.
// 5. If the first settled promise fulfills, the race resolves.
// 6. If the first settled promise rejects, the race rejects.
// 7. In this example, p2 rejects after 1 second.
// 8. Therefore, p2 wins the race and the catch block executes.


const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve("Resolved-1"), 3000)
})

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=> reject("Rejected"), 1000)
})

const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve("Resolved-2"), 2000)
})

Promise.race([p1, p2, p3]).then( value => console.log(value)).catch( err=> console.log(err));