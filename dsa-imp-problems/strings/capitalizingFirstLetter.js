// Create an empty string to store the final result
// Traverse through each character of the string
// Check if the character is the first character or comes after a space
// Convert that character to uppercase
// Otherwise, keep the character unchanged
// Add each character to the result string
// Return the capitalized string


function captilaizeFirstLetter(str){

  let result = "";

  for(let i=0; i<str.length; i++){

    if(i===0 || str[i-1]===" "){
      result+=str[i].toUpperCase();
    }else{
      result+=str[i];
    }
    
  }
  return result;
}

console.log(captilaizeFirstLetter("dsa is important"));