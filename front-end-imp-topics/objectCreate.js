const person = {

    name: "Badang",
    greet: function(){
        console.log("Hello Badang!");
    }

}

const player = Object.create(person);

console.log(player.name);
player.greet();