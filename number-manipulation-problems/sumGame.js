// Approach:
// 1. Split the string into left and right halves.
// 2. Calculate the digit sum of the left half.
// 3. Calculate the digit sum of the right half.
// 4. Count the number of '?' on both sides.
// 5. If the total number of '?' is odd, Alice wins because she gets one extra move.
// 6. If the number of '?' is even, compare the existing sum difference with the possible contribution of '?' digits.
// 7. Multiply the sum difference by 2 and the question-mark difference by 9.
// 8. If 2 * (leftSum - rightSum) is not equal to 9 * (rightQuestion - leftQuestion), Alice wins.
// 9. Otherwise, Bob can make the two sums equal, so Alice loses.


function sumGame(num){

    let leftSum = 0;
    let rightSum = 0;

    let leftQuestion = 0;
    let rightQuestion = 0;

    let mid = num.length / 2;

    for (let i = 0; i < mid; i++) {
        if (num[i] === "?") {
            leftQuestion++;
        } else {
            leftSum += Number(num[i]);
        }
    }

    for (let i = mid; i < num.length; i++) {
        if (num[i] === "?") {
            rightQuestion++;
        } else {
            rightSum += Number(num[i]);
        }
    }

    if ((leftQuestion + rightQuestion) % 2 === 1) {
        return true;
    }

    return (
        2 * (leftSum - rightSum) !==
        9 * (rightQuestion - leftQuestion)
    );

}

console.log(sumGame("2552"));
console.log(sumGame("92?3"));