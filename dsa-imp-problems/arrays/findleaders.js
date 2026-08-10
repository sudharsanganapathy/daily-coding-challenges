// Approach:
// 1. Start from the right side of the array.
// 2. Keep track of the maximum element seen on the right using maxRight.
// 3. Initialize maxRight with -Infinity so the last element can become a leader.
// 4. Traverse the array from right to left.
// 5. If the current element is greater than maxRight, it is a leader.
// 6. Add the current element to the leaders array.
// 7. Update maxRight with the current element.
// 8. Since leaders are collected from right to left, reverse the result.
// 9. Return the leaders array.


function findLeaders(arr){

    let maxRight = -Infinity;
    let leaders = [];
    
    for(let i=arr.length-1; i>=0; i--){
        
        if(arr[i]>maxRight){
            leaders.push(arr[i]);
            maxRight = arr[i];
        }
    }
    return leaders.reverse();
}

const leaders = [16, 17, 9, 5, 1, 2];

console.log(findLeaders(leaders));