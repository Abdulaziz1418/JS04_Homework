/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

let Monkeys = {
    name: ["monkey_1","monkey_2","monkey_3"],
    species: ["Howler","Baboon","chimpanzee"] ,
    foodsEaten: []
}

function eatSomething(eat){
    Monkeys.foodsEaten.push(eat);
}
eatSomething("Apple");
eatSomething("Banana");
eatSomething("Orange");


function introduce(){
    for(let i = 0; i<3; i++){
        console.log("Name :"+Monkeys.name[i]+", species is: "+Monkeys.species[i]+", foods Eaten is: "+Monkeys.foodsEaten[i]);

    }
}
introduce();
