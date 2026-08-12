// Approach:
// 1. Create a Set to store unique characters in the current window.
// 2. Initialize left pointer at 0 and maxLength at 0.
// 3. Traverse the string using the right pointer.
// 4. If the current character already exists in the Set, shrink the window from the left.
// 5. Remove str[left] from the Set and move left forward.
// 6. Continue shrinking until the duplicate character is removed.
// 7. Add the current character to the Set.
// 8. Calculate the current window length using right - left + 1.
// 9. Update maxLength if the current window is longer.
// 10. Return maxLength.



let str = "abcabcdbb";

let set = new Set();

let left = 0;

let maxLength = 0;

for(let right=0; right<str.length; right++){

    while(set.has(str[right])){
        set.delete(str[left]);
        left++;
    }

    set.add(str[right]);

    if(right - left + 1 > maxLength){
        maxLength = right - left + 1
    }

}

console.log(maxLength);