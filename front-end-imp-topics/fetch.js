async function fetchData() {

    try{
        const response = await fetch("url",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                name:"Sudharsan",
                age:23
            })
        });
        const result = await response.json();
        console.log(result);
    }
    catch(err){
        console.error("Error :", err);
    }
    
}

fetchData();