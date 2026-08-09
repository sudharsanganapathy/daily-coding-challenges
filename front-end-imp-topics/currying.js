// Approach:
// 1. Create an outer function that accepts the first argument.
// 2. Return another function to accept the second argument.
// 3. Return one more function to accept the third argument.
// 4. The innermost function uses all the previously received values.
// 5. Call the functions one by one using add(10)(20)(30).
// 6. Closures allow the inner functions to remember previous arguments.

// Basic Example:

function add(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

const addTwo = add(10)(20);

console.log(addTwo(30));


// Real-Time Example:

// Approach:
// 1. Accept the ticket price first.
// 2. Return a function that accepts GST.
// 3. Return another function that accepts the discount.
// 4. Calculate the final price using price + GST - discount.
// 5. Pass the values one by one using function chaining.

function ticketBooking(price){
    return function(gst){
        return function(discount){
            return price + gst - discount;
        }
    }
}

console.log(ticketBooking(1900)(150)(100));