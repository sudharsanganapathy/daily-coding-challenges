// Step 1: Create a variable to store the longest palindrome found so far.

// Step 2: Create a helper function called expand.
// This function takes two positions: left and right.

// Step 3: Start expanding from the given left and right positions.

// Step 4: While left and right are inside the string
// and the characters at left and right are equal,
// continue expanding outward.

// Step 5: Move left one position backward
// and right one position forward.

// Step 6: When the characters don't match
// or we reach the boundary of the string,
// stop expanding.

// Step 7: Return the palindrome found during the expansion.

// Step 8: Loop through every character in the string.

// Step 9: For every character, consider it as the center
// of an odd-length palindrome.
// Example: "aba" → center is "b".

// Step 10: Expand from the same index on both sides
// to find the longest odd-length palindrome.

// Step 11: Also consider the gap between the current character
// and the next character as the center of an even-length palindrome.
// Example: "abba" → center is between the two "b"s.

// Step 12: Expand from the current index and the next index
// to find the longest even-length palindrome.

// Step 13: Compare the odd palindrome with the current longest palindrome.
// If it is longer, update the longest palindrome.

// Step 14: Compare the even palindrome with the current longest palindrome.
// If it is longer, update the longest palindrome.

// Step 15: Continue this process for every character in the string.

// Step 16: Finally, return the longest palindrome found.



function longestPalindrome(s){

    let result = "";

    function expand(left, right){

        while(left>=0 && right<s.length && s[left]===s[right]){
            left--;
            right++;
        }

        return s.substring(left+1, right);
    }

    for(let i=0; i<s.length; i++){

        const odd = expand(i, i);
        const even = expand(i, i+1);

        if(odd.length > result.length){
            result = odd;
        }

        if(even.length > result.length){
            result = even;
        }
    }
    return result;
}

console.log(longestPalindrome("mycarisracecar"));
console.log(longestPalindrome("babad"));