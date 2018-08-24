var Animals = [
    { name: 'Fluffykins', species: 'dog' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'dog' },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" }
];
//--------------------------------------------------------map using for loop
//const animalNames = [];
// function nameFunct(animalsArray) {
//     for(let i = 0; i < animalsArray.length; i++) {
//           animalNames.push(animalsArray[i].name);     
//     }
// }
// nameFunct(Animals);
// console.log(animalNames);
//---------------------------------------------------------map method
function nameFunct(animalsArray) {
    return animalsArray.map(function (name) {
        return name.name;
    });
}
;
console.log(nameFunct(Animals));
