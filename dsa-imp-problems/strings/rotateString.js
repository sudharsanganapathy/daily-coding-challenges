// Approach:
// 1. Check whether s and goal have the same length.
// 2. If lengths are different, they cannot be rotations.
// 3. Concatenate s with itself.
// 4. All possible rotations of s will appear inside s + s.
// 5. Use includes() to check whether goal exists inside s + s.
// 6. Return the result.


function rotateString(s, goal){

    if(s.length!==goal.length){
        return false;
    }

    return (s+s).includes(goal);

}

console.log(rotateString("abcde", "bcdea"));
console.log(rotateString("abcde", "acdeb"));

