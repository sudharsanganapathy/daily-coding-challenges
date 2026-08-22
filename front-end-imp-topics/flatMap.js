const users = [
    {
        name: "Sudharsan",
        skills: ["JavaScript", "React"]
    },
    {
        name: "Harish",
        skills: ["Node", "MongoDB"]
    },
    {
        name: "Mukilan",
        skills: ["Express", "SQL"]
    }
];

const result = users.flatMap(user => user.skills);

console.log(result);