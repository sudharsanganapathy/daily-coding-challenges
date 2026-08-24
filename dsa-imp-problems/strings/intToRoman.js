// Store Roman numeral values from largest to smallest

// Initialize an empty string to store the Roman numeral result

// Loop through all Roman numeral values

// Check if the current number is greater than or equal to the current Roman value

// Add the corresponding Roman symbol to the result

// Subtract the Roman value from the number

// Continue until the current Roman value can no longer be used

// Return the final Roman numeral


function intToRoman(num){

    const values = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];

    let result = "";

    for(let i=0; i<values.length; i++){

        while(num>=values[i][0]){

            result+=values[i][1];

            num-=values[i][0];

        }
    }
    return result;
}

console.log(intToRoman(3749));