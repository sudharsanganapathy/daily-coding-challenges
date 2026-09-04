//Create a class → define constructor → assign properties using this → create objects using new → print the objects.


class Student{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

const s1 = new Student("Sudharsan", 23);
const s2 = new Student("Karthick", 24);
const s3 = new Student("Abi", 23);
const s4 = new Student("Mukilan", 23);
const s5 = new Student("Harish", 23);

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);

