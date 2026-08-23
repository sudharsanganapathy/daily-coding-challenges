// 1. Identify the common parent

// 2. Attach one event listener to the parent

// 3. Wait for a child event

// 4. Event bubbles from child → parent

// 5. Use event.target to identify the clicked child

// 6. Perform the required operation on that child


// =========================================================================================================================


// Let say suppose we have:

// <ul id="users">
//   <li>Sudharsan</li>
//   <li>Mukilan</li>
//   <li>Harish</li>
// </ul>

// Without event delegation --> We could attach a listener to every li:

const usersAll = document.querySelectorAll("li");

users.forEach((user) => {
  user.addEventListener("click", () => {
    console.log(user.textContent);
  });
});


// With Event Delegation --> Instead, attach one listener to the parent:

const users = document.getElementById("users");

users.addEventListener("click", (event) => {
  console.log(event.target.textContent);
});

