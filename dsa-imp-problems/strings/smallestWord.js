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