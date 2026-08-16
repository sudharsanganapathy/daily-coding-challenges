// Approach:
// 1. Use two pointers: left at the beginning and right at the end.
// 2. Maintain leftMax and rightMax to store the tallest bars seen from each side.
// 3. Compare height[left] and height[right].
// 4. If height[left] is smaller or equal, process the left side.
// 5. If height[left] is greater, process the right side.
// 6. When processing a side, update its maximum height if the current bar is taller.
// 7. Otherwise, calculate trapped water using maxHeight - currentHeight.
// 8. Move the processed pointer inward.
// 9. Continue until the two pointers meet.
// 10. Return the total amount of trapped water.


function trappingRainWater(height){

    let left = 0;
    let right = height.length-1;

    let leftMax = 0;
    let rightMax = 0;
    let water = 0;

    while(left<right){

        if(height[left] <= height[right]){

            if(height[left] >= leftMax){
                leftMax = height[left];
            }else{
                water+= leftMax - height[left];
            }
            left++;
        }
        else{
            if(height[right] >= rightMax){
                rightMax = height[right];
            }else{
                water+= rightMax - height[right];
            }
            right--;
        }
    }
    return water;
}

const height = [4, 1, 0, 2, 3];

console.log(trappingRainWater(height));