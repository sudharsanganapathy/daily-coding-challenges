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
