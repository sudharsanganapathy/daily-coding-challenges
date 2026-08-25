const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve("Resolved-1"), 2000)
});

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=> reject("Reject"), 5000)
});

const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve("Resolved-2"), 1000)
});

Promise.any([p1, p2, p3]).then((value)=> console.log(value)).catch((err)=> console.log(err));