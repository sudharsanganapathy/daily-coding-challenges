let person = {
    name : "Sudharsan",
    age: 23
}

function greeting(city){

    console.log(`Hello My Name is ${this.name} from, ${city}`);

}

greeting.call(person, "Bangalore");
greeting.apply(person, ["Tanjore"]);
const bound = greeting.bind(person, "Chennai");
bound();
