// ==================================================
// Problem:
// ==================================================

// Check whether two strings are anagrams.

// ==================================================
// Approach:
// ==================================================

// 1. Remove spaces from both strings using `replace()`.

// 2. Convert both strings to lowercase so the comparison
//    becomes case-insensitive.

// 3. Check whether both strings have the same length.
//    If lengths are different, return false.

// 4. Convert both strings into arrays using `split("")`.

// 5. Sort both arrays alphabetically.

// 6. Join the sorted characters back into strings.

// 7. Compare the two sorted strings.

// 8. If they are equal → both strings contain the same
//    characters with the same frequencies.

// 9. Otherwise → they are not anagrams.


function isAnagram(str1, str2){

    str1 = str1.replace(/\s/g,"").toLowerCase();
    str2 = str2.replace(/\s/g,"").toLowerCase();

    if(str1.length !== str2.length){
        return false;
    }

    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

const strOne = "listen";
const strTwo = "silent";

const strThree = "hello";
const strFour = "worLD";

console.log(isAnagram(strOne, strTwo));
console.log(isAnagram(strThree, strFour));