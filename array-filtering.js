var Animals = [
    { name: 'Fluffykins', species: 'dog' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'dog' },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" }
];
//Create a Function that takes an array for a parameter and returns an array of just the dogs from the animals array.
var dogArray = [];
function dogFilter(arrayAnimals) {
    for (var i = 0; i < 10; i++) {
        if (arrayAnimals[i].species == 'dog') {
            var person = arrayAnimals[i];
            //return arrayAnimals[i].name;
            dogArray.push(person);
            //console.log(dogArray);
        }
    }
}
//console.log(Animals);
dogFilter(Animals);
console.log(dogArray);
//-----------------------------------------------
// const dogFilter = function(animalArray) {
//   return animalArray.filter(animal => animal.species == 'dog');
// }
//console.log(dogFilter(Animals));
//---------------------------------------------bfoken down filter method 
// const dogFilter = function(Animals) {
//   return Animals.species == 'dog';
// } 
// let isDog = Animals.filter(dogFilter);
// console.log(isDog);
