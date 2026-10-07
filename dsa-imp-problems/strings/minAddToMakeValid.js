// Initialize open to track unmatched opening parentheses
// Initialize ans to track opening parentheses needed before unmatched closing parentheses
// Traverse through each character in the string
// If the character is an opening parenthesis, increment open
// If the character is a closing parenthesis and an opening parenthesis exists, match them by decrementing open
// If no opening parenthesis exists, increment ans because an opening parenthesis is needed
// After traversal, add remaining unmatched opening parentheses to ans
// Return the total number of parentheses that need to be added


function minAddToMakeValid(s){

    let open = 0;
    let ans = 0;

    for(let i=0; i<s.length; i++){

        let char = s[i];

        // If we find an opening parenthesis,
        // increase the number of unmatched openings
        if(char==="("){
            open++;
        }

        // If we find a closing parenthesis
        else{

            // If an opening parenthesis is available, use it to match the current closing parenthesis
            if(open > 0){
                open--;
            }
            
            // Otherwise, we need to insert an opening parenthesis
            else{
                ans++;
            }

        }
    }

    // Any remaining opening parentheses need closing parentheses
    ans+=open;

    return ans;
}

console.log(minAddToMakeValid(")()"));
console.log(minAddToMakeValid(")()()(()"));
console.log(minAddToMakeValid("()))(("));

