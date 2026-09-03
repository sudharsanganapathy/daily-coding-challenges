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