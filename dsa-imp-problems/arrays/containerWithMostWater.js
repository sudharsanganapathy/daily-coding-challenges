// Approach:
// 1. Use two pointers: left at the beginning and right at the end.
// 2. Calculate the width between the two bars.
// 3. The container height is determined by the shorter bar.
// 4. Calculate the current area using width × shorter height.
// 5. Update mostWater with the maximum area found so far.
// 6. Move the pointer pointing to the shorter bar because the shorter bar limits the current area.
// 7. Continue until the two pointers meet.
// 8. Return the maximum area.


function containerWithMostWater(height){

    let left = 0;
    let right = height.length-1;
    let mostWater = 0;

    while(left < right){

        let width = right - left;  // distance between two bars

        let currentHeight = Math.min(height[left], height[right]);

        let area = width * currentHeight; 

        mostWater = Math.max(mostWater, area);

        if(height[left] < height[right]){
            left++;
        }
        else{
            right--;
        }
    }

    return mostWater;

}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(containerWithMostWater(height));