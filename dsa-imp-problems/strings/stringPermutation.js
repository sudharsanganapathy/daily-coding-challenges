/*
==================================================
Problem:
==================================================

Generate all possible permutations of a given string.

Input:
"abc"

Output:
abc
acb
bac
bca
cab
cba

==================================================
Approach:
==================================================

1. Pick one character from the string.
2. Remove the selected character from the remaining string.
3. Append the selected character to the answer.
4. Recursively generate permutations for the remaining characters.
5. When the remaining string becomes empty,
   print the accumulated answer.

==================================================
Time Complexity:
==================================================

O(n × n!)

Reason:
There are n! permutations, and each permutation
takes O(n) time to construct.

==================================================
Space Complexity:
==================================================

O(n)

Reason:
Recursion stack depth is at most n.

==================================================
Key Learning:
==================================================

- Understand recursion and backtracking.
- Break the problem into smaller subproblems.
- Build the answer while reducing the input.
- Base case:
  str.length === 0

==================================================
*/

function permutation(str, ans = "") {

    if (str.length === 0) {
        console.log(ans);
        return;
    }

    for (let i = 0; i < str.length; i++) {

        const char = str[i];

        const remaining = str.slice(0, i) + str.slice(i + 1);

        permutation(remaining, ans + char);

    }
}

permutation("abc");