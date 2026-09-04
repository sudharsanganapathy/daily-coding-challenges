// class Student → creates a blueprint for student objects.
// constructor(name, age) → initializes each object's properties.
// this.name / this.age → stores values in the newly created object.
// new Student(...) → creates separate Student objects.
// s1 to s5 → each object has its own name and age.


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

