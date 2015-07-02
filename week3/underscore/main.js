// console.log(_);
// var myObj = {name : 'Isaac'}
// myObj.name
// Use dot notation to access methods in underscore

var numbers = [2, 6, 87];

// numbers.map(function(){})

var doubleNumbers = _.map(numbers, function(val){
	return val * 2

});

// console.log(doubleNumbers);

numbers.reduce(function(){}, 0)

// // Reduce

// var str = 'Mobile Army Surgery Hospital'
// // Intented result is  "M.A.S.H."
// var results = _.reduce(
// 	str.split(' '), 

// 	function(acronym, currentWord){
// 		// console.log('Current AC : ', acronym)
// 		// console.log('Current Word :', currentWord)
// 		// console.log('----------')
// 		return acronym + currentWord[0].toUpperCase() + '.'



// 	}, 

// 	'');

// console.log(results)


// Find
// var treasures = [
// 	{
// 		type     : 'wood',
// 		treasure : 'gold'
// 	},
// 	{
// 		type     : 'wood',
// 		treasure : 'booty'
// 	},
// 	{
// 		type     : 'metal',
// 		treasure : 'booty'
// 	}

// ]

// // GOAL - find and return the first chest with booty
// var result = _.find(treasures, function(currentEl){
// 	return currentEl.treasure === 'booty'
// });

// console.log('Found it : ', result)

// Pluck
// Create a list of Chest TYPES
// var result = _.pluck(treasures, 'type');
// console.log(result);


// Uniq
// console.log( _.uniq([1 , 5 ,5, 5, 5, 5, 5, 9]) )

// console.log( _.uniq(result) )


// Chaining
// var chainResult = _.chain(treasures)
// 	.pluck('type')
// 	.uniq()
// 	.value()

// console.log('Chain Result : ', chainResult)




var treasureChests = [
	{
		type     : 'wood',
		treasure : ['gold', 'booty', 'doubloons', 'javascripties']
	},
	{
		type     : 'wood',
		treasure : ['booty', 'doubloons', 'weapons']
	},
	{
		type     : 'metal',
		treasure : ['booty', 'javascripties', 'breakfast ceral']
	}

]

// Goal - Get a unique list of all the treasures
// Flatten!
var uniqueTreasures = _.chain(treasureChests)
	.pluck('treasure')
	.flatten()
	.uniq()
	.value()

console.log('Treasures so far : ', uniqueTreasures)

