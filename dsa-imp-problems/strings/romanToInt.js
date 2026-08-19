// Approach:
// 1. Store the value of each Roman numeral in an object.
// 2. Traverse the string from left to right.
// 3. Compare the current Roman numeral with the next numeral.
// 4. If the current value is smaller than the next value, subtract it.
// 5. Otherwise, add the current value.
// 6. Continue until all Roman numerals are processed.
// 7. Return the final result.


function romanToInt(s){

    const values = {

        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }

    let result = 0;

    for(let i=0; i<s.length; i++){

        if(i + 1 < s.length && values[s[i]] < values[s[i+1]]){
            result-=values[s[i]];
        }else{
            result+=values[s[i]];
        }
    }
    return result;
}

console.log(romanToInt("MCMXCIV"));