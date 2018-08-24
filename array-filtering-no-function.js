var Animals = [
    { name: 'Fluffykins', species: 'dog' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'dog' },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" }
];
var dogArray = Animals.filter(function (animal) { return animal.species == 'dog'; });
console.log(dogArray);
