/*
==================================================
Topic:
==================================================

Throttling

==================================================
Definition:
==================================================

Throttling ensures a function executes at most
once within a specified time interval, even if
it's called multiple times.

==================================================
Approach:
==================================================

1. Store the time of the last function execution.
2. Every time the function is called, get the
   current time using Date.now().
3. Compare the current time with the last execution time.
4. If the difference is greater than or equal to
   the delay, execute the function.
5. Otherwise, ignore the call.

==================================================
Time Complexity:
==================================================

O(1)

==================================================
Space Complexity:
==================================================

O(1)

==================================================
Key Learning:
==================================================

- Uses Closure
- Uses Date.now()
- Limits function execution frequency
- Commonly used in scroll, resize and mousemove events

==================================================
*/

function throttle(fn, delay) {

    let lastCall = 0;

    return function () {

        const now = Date.now();

        if (now - lastCall >= delay) {

            lastCall = now;

            fn();

        }

    }

}

function greet() {
    console.log("Hello", Date.now());
}

const throttledGreet = throttle(greet, 3000);

setInterval(() => {
    throttledGreet();
}, 500);