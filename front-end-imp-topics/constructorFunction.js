function student(name, age, city){
    
    this.name = name;
    this.age = age;
    this.city = city;

}

const student1 = new student("Ilan", 4, "Bangalore");
const student2 = new student("Guhan", 3, "Tanjore");

console.log(student1);
console.log(student2);

