const Animals = [    
	{name:'Fluffykins', species: 'dog' },
	{name: 'Caro' , species: 'dog' },
	{name: 'Hamilton', species: 'dog'},
	{name: 'Harold', species: 'dog'},
	{name: "Ursula" , species: "cat"},
	{name: "Jimmy", species: "fish"}
]
const dogArray =  Animals.filter(animal => 
	{animal.species == 'dog'});
console.log(dogArray);