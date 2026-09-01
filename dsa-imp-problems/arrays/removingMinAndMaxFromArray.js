function removingMinAndMaxFromArray(nums){

    let n = nums.length;

    // Find minimum and maximum values
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    // Find their indexes
    let minIndex = nums.indexOf(min);
    let maxIndex = nums.indexOf(max);

    // 1. Remove both from the left
    let fromLeft = Math.max(minIndex, maxIndex) + 1;

    // 2. Remove both from the right
    let fromRight = Math.max(
        n - minIndex,
        n - maxIndex
    );

    // 3. Remove minimum from left and maximum from right
    let option1 = (minIndex + 1) + (n - maxIndex);

    // 4. Remove maximum from left and minimum from right
    let option2 = (maxIndex + 1) + (n - minIndex);

    // Return the minimum number of deletions
    return Math.min(
        fromLeft,
        fromRight,
        option1,
        option2
    );

}

console.log(removingMinAndMaxFromArray([2, 10, 7, 5, 4, 1, 8, 6]));