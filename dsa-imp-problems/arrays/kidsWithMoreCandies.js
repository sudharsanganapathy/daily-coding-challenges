// ==================================================
// Problem:
// ==================================================

// Kids With the Greatest Number of Candies

// ==================================================
// Approach:
// ==================================================

// 1. Find the maximum number of candies currently held
//    by any kid.

// 2. Create an empty result array.

// 3. Traverse the candies array again.

// 4. For each kid, add `extraCandies` to their current
//    number of candies.

// 5. Check whether:

//    candies[i] + extraCandies >= maxCan

// 6. If true, push `true` into the result array.

// 7. Otherwise, push `false`.

// 8. Return the result array.


function kidsWithMoreCandies(candies, extraCandies){

    let maxCan = candies[0];

    // finding maxCandies that kids currently has:
    for(let i=1; i<candies.length; i++){
        if(candies[i]>maxCan){
            maxCan=candies[i];
        }
    }

    let result = [];

    // check each kids:
    for(let i=0; i<candies.length; i++){
        result.push(candies[i] + extraCandies >= maxCan );
    }

    return result;

}

console.log(kidsWithMoreCandies([2, 3, 5, 1, 3], 3));