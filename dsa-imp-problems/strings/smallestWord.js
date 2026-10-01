// Split the sentence into individual words
// Assume the first word is the smallest word initially
// Traverse through the remaining words
// Compare each word's length with the current smallest word
// Update the smallest word when a shorter word is found
// Return the smallest word


function smallestWord(string){

  let str = string.split(" "); // ["what", "can", "i", "do"]
  let smallestWord = str[0]; // "what"

  for(let i=1; i<str.length; i++){
    
    if(str[i].length < smallestWord.length){
      smallestWord = str[i];
    }
    
  }
  return smallestWord;
}

console.log(smallestWord("what can i do"));