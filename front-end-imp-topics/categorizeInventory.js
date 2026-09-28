function categorizeInventory(products, currentDate){

  let result = {
    expired : [],
    warning : [],
    critical : [],
    unknown : [],
    safe : []   
  }

let today = new Date(currentDate);

for(let i=0; i<products.length; i++){

  let expiry = new Date(products[i].expiryDate);

  // Check for invalid or missing expiry date
  if(!products[i].expiryDate || isNaN(expiry.getTime())){
    result.unknown.push(products[i].name);
    continue;
  }
  
  // Find difference in days
  let difference = expiry - today; //JavaScript converts both Date objects into milliseconds
  let daysLeft = difference / (1000*60*60*24); // Converting ms into days

  if(daysLeft < 0){
    result.expired.push(products[i].name);
  }
  else if(daysLeft <= 7){
    result.critical.push(products[i].name);
  }
  else if(daysLeft <= 30){
    result.warning.push(products[i].name);
  }
  else{
    result.safe.push(products[i].name);
  }
  
}
  return result;
}

let products = [
    {
        name: "Milk",
        batchId: "B001",
        quantity: 50,
        expiryDate: "2026-09-20"
    },
    {
        name: "Bread",
        batchId: "B002",
        quantity: 30,
        expiryDate: "2026-09-25"
    },
    {
        name: "Curd",
        batchId: "B003",
        quantity: 20,
        expiryDate: "2026-10-10"
    },
    {
        name: "Rice",
        batchId: "B004",
        quantity: 100,
        expiryDate: "2026-12-25"
    },
    {
        name: "Oil",
        batchId: "B005",
        quantity: 40,
        expiryDate: ""
    }
];

console.log(categorizeInventory(products, "2026-09-21"));