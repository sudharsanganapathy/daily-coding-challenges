// Create an array of users with their name and role

// Create a table element

// Loop through each user

// Create a table row

// Create a table cell for the user's name

// Add the user's name to the cell

// Create a table cell for the user's role

// Add the user's role to the cell

// Add the name cell and role cell to the row

// Add the row to the table

// Add the table to the body


const users = [
    {name: "Sudharsan", role: "MERN Developer"},
    {name: "Harishwar", role: "JAVA Developer"},
    {name: "Mukilan", role: "C++ Developer"},
];

const table = document.createElement("table");

users.forEach((user)=>{

    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = user.name;

    const roleCell = document.createElement("td");
    roleCell.textContent = user.role;

    row.appendChild(nameCell);
    row.appendChild(roleCell);

    table.appendChild(row);

});

document.body.appendChild(table);