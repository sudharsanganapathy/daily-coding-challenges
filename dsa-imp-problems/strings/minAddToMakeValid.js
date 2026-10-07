function minAddToMakeValid(s){

    let open = 0;
    let ans = 0;

    for(let i=0; i<s.length; i++){

        let char = s[i];

        if(char==="("){
            open++;
        }

        else{

            if(open > 0){
                open--;
            }else{
                ans++;
            }

        }
    }
    ans+=open;
    return ans;
}

console.log(minAddToMakeValid(")()"));
console.log(minAddToMakeValid(")()()(()"));
console.log(minAddToMakeValid("()))(("));


