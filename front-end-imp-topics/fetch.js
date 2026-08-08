// ==================================================
// Topic:
// ==================================================

// Fetch API with Async/Await

// ==================================================
// Approach:
// ==================================================

// 1. Create an `async` function called `fetchData()`.

// 2. Use `try...catch` to handle possible errors.

// 3. Use `fetch()` to send an HTTP request to the API.

// 4. Set the request method to `POST`.

// 5. Set `Content-Type` to `application/json` so the server
//    knows that we are sending JSON data.

// 6. Create the request data inside the `body`.

// 7. Use `JSON.stringify()` to convert the JavaScript object
//    into a JSON string before sending it to the server.

// 8. Use `await` to wait for the server response.

// 9. Use `response.json()` to convert the JSON response into
//    a JavaScript object.

// 10. Store the parsed response in `result`.

// 11. Print the result.

// 12. If any error occurs, the `catch` block handles it.

// ==================================================
// Key Learning:
// ==================================================

// - `async` → allows the use of `await` inside a function.
// - `await fetch()` → waits for the HTTP response.
// - `method: "POST"` → sends data to the server.
// - `headers` → provides information about the request.
// - `JSON.stringify()` → JavaScript object → JSON string.
// - `response.json()` → JSON response → JavaScript object.
// - `try...catch` → handles errors.


async function fetchData() {

    try {
        const response = await fetch("url", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: "Sudharsan",
                age: 23
            })
        });

        const result = await response.json();

        console.log(result);
    }
    catch (err) {
        console.error("Error:", err);
    }
}

fetchData();