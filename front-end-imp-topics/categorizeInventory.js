// Create an object to store products in different expiry categories
// Convert the current date string into a Date object
// Traverse through every product
// Convert the product expiry date into a Date object
// Check whether the expiry date is missing or invalid
// Add products with invalid or missing dates to the unknown category
// Calculate the difference between the expiry date and current date in milliseconds
// Convert the time difference from milliseconds into days
// Categorize the product as expired when fewer than zero days remain
// Categorize the product as critical when seven or fewer days remain
// Categorize the product as warning when thirty or fewer days remain
// Categorize the product as safe when more than thirty days remain
// Return the categorized inventory.


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