const Animals = [    
	{name:'Fluffykins', species: 'dog' },
	{name: 'Caro' , species: 'dog' },
	{name: 'Hamilton', species: 'dog'},
	{name: 'Harold', species: 'dog'},
	{name: "Ursula" , species: "cat"},
	{name: "Jimmy", species: "fish"}
];

//Create a Function that takes an array for a parameter and returns an array of just the dogs from the animals array.
 var dogArray = [];

function dogFilter(arrayAnimals) {
    for( var i = 0; i< 10; i++) {
        if(arrayAnimals[i].species == 'dog') {
            var person = arrayAnimals[i].name;
            //return arrayAnimals[i].name;
          return dogArray.push(person);
          //console.log(dogArray);
        }
    }
    
}


dogFilter(Animals);
//console.log(Animals);

console.log(dogArray);
//console.log(Animals[1]);