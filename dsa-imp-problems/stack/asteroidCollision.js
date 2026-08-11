// Approach:
// 1. Create an empty stack to store surviving asteroids.
// 2. Traverse the asteroid array from left to right.
// 3. Store the current asteroid in a variable.
// 4. Use a destroyed flag to track whether the current asteroid gets destroyed.
// 5. A collision is possible only when the stack top is positive and the current asteroid is negative.
// 6. Compare the absolute sizes of the two colliding asteroids.
// 7. If the stack top is smaller, remove it and continue checking for another collision.
// 8. If both asteroids have equal size, remove the stack top and destroy the current asteroid.
// 9. If the stack top is larger, destroy the current asteroid.
// 10. If the current asteroid survives, push it into the stack.
// 11. Return the stack containing the surviving asteroids.


function asteroidCollision(asteroids){

    let stack = [];

    for(let i=0; i<asteroids.length; i++){

        let current = asteroids[i];
        let destroyed = false;

        while(stack.length>0 && stack[stack.length-1]>0 && current<0){

            let top = stack[stack.length-1]

            if(Math.abs(top) < Math.abs(current)){
                stack.pop();
            }
            else if(Math.abs(top)===Math.abs(current)){
                stack.pop();
                destroyed = true;
            }
            else{
                destroyed = true;
            }
        }

        if(!destroyed){
            stack.push(current);
        }

    }

    return stack;

}

console.log(asteroidCollision([5, 10, -7]));
console.log(asteroidCollision([10, 2, -7]));
