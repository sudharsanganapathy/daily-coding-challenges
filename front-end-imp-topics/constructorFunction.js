// 1. Create a new empty object
//         ↓
// 2. Link that object to student.prototype
//         ↓
// 3. Call student() with this = new object
//         ↓
// 4. Return the new object


function student(name, age, city){

    this.name = name;
    this.age = age;
    this.city = city;

}

const student1 = new student("Ilan", 4, "Bangalore");
const student2 = new student("Guhan", 3, "Tanjore");
const student3 = new student("Karthick", 6, "Coimbatore");


console.log(student1);
console.log(student2);

