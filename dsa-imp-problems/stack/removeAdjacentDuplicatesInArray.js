// Approach:
// 1. Create an empty stack to store the remaining elements.
// 2. Traverse the array from left to right.
// 3. Store the current element in a variable.
// 4. Check whether the stack is not empty and the top element equals the current element.
// 5. If they are equal, remove the top element using pop().
// 6. Otherwise, push the current element into the stack.
// 7. Continue until all elements are processed.
// 8. Return the stack containing the remaining elements.


function arrayAdjacentDuplicate(arr){

    let stack = [];

    for(let i=0; i<arr.length; i++){

        let ele = arr[i];

        if(stack.length>0 && stack[stack.length-1]===ele){
            stack.pop();
        }
        else{
            stack.push(ele);
        }
    }
    return stack;
}
console.log(arrayAdjacentDuplicate([1, 2, 2, 1]));