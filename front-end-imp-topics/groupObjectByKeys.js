const arr = [
  { name: "Ram", Age: 21, DEPT: "HR" },
  { name: "Barani", Age: 22, DEPT: "Engineering" },
  { name: "Ravi", Age: 24, DEPT: "HR" },
  { name: "Arun", Age: 25, DEPT: "Engineering" }
];

const result = arr.reduce((acc, employee) => {
  const { DEPT, name, Age } = employee;

  if (!acc[DEPT]) {
    acc[DEPT] = [];
  }

  acc[DEPT].push({ name, Age });

  return acc;
}, {});

console.log(result);