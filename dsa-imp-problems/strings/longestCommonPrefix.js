function longestCommonPrefix(strs){

    let result = "";

    for(let i=0; i<strs[0].length; i++){

        let char = strs[0][i]; // flower --> 0 1 2 3 4 5 

       for(let j=1; j<strs.length; j++){

            if(i>=strs[j].length || strs[j][i]!==char){
                return result;
            }

        }

        result+=char;
    }

    return result;

}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));