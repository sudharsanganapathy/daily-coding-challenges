// ==================================================
// Problem:
// ==================================================

// Check whether two strings are isomorphic.

// ==================================================
// Approach:
// ==================================================

// 1. First compare the lengths of both strings.
//    If the lengths are different, return false.

// 2. Create two empty objects/maps:

//    mapST → stores mapping from s → t
//    mapTS → stores mapping from t → s

// 3. Traverse both strings using one loop.

// 4. Take the current characters:

//    ch1 = s[i]
//    ch2 = t[i]

// 5. Check `mapST`.

//    If `ch1` already exists in mapST and its existing
//    value is different from ch2, return false.

// 6. Check `mapTS`.

//    If `ch2` already exists in mapTS and its existing
//    value is different from ch1, return false.

// 7. Store both mappings:

//    mapST[ch1] = ch2
//    mapTS[ch2] = ch1

// 8. Continue until all characters are processed.

// 9. If no mapping conflict is found, return true.

// ==================================================
// Why Two Maps?
// ==================================================

// mapST checks:

// s → t

// Example:
// e → a

// mapTS checks:

// t → s

// Example:
// a → e

// This guarantees a one-to-one mapping.

// ==================================================
// Example:
// ==================================================

// s = "egg"
// t = "add"

// e → a
// g → d
// g → d

// No conflict.

// Result:
// true

// ==================================================
// Complexity:
// ==================================================

// Time  → O(n)
// Space → O(n)



function isIsomorphic(s, t){

    if(s.length !== t.length){
        return false;
    }

    let mapST = {};
    let mapTS = {};

    for(let i=0; i<s.length; i++){

        let ch1 = s[i];
        let ch2 = t[i];

        if(mapST[ch1] && mapST[ch1]!==ch2){
            return false;
        }

        if(mapTS[ch2] && mapTS[ch2]!==ch1){
            return false;
        }

        mapST[ch1] = ch2;
        mapTS[ch2] = ch1;
    }
    return true;
}

console.log(isIsomorphic("egg","add"));
console.log(isIsomorphic("gas","mam"));
