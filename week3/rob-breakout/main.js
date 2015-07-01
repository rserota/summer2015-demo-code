// Approaching Functions with Pseudocode
// printObject expects one object argument
// var printObject = function(printableObject){

// 	// 1. Iterate over obj
// 	for (i in printableObject) {

// 		// 2. For each iteration
		
// 		// 2a. Grab the key
// 		var currentKey = i;

// 		// 2b. Grab the value
// 		var currentValue = printableObject[currentKey];

// 		// 3. Console log a formatted string using key / value
// 		var printableString = currentKey + ' is ' + currentValue;
// 		console.log(printableString);
						
// 	}

// }

// printObject({
// 	name  : 'Mutton',
// 	type  : 'Kitty',
// 	age   : 17,
// 	color : 'Tabby'

// });


// Anonymous vs Named Functions

var buttonHandler = function(event) {
	// console.log(event)
	console.log(arguments)
	$('#header').text( Math.random() )
}

// $(function(){

// 	$('#datButton').on('click', function(e){
// 		// console.log(arguments)
// 		$('#header').text( Math.random() )

// 	})

// 	$('#datButton').on('click', buttonHandler)
// });

// // under the hood
// // var on = function(eventType, eventHandler) {
// // 	var eventObj = 'event stuff from browser'

// // 	eventHandler(eventObj)
// // }


// var myFunc = function(){
// 	console.log(arguments)
// 	// console.log('yeah!');
// }

// myFunc('dog', 1, true, [0], {name : 'George'}, 15.6);

// var timeOut = function() {
// 	console.log('timeout');
// }

// setTimeout( timeOut, 2000 )

// var counter = 0

// for (var i = 1; i < 20; i*=counter) {
	
// 	counter++
// 	console.log(counter)
// 	console.log(i)
// 	console.log('------')
// };


// var playerConstructor = function() {
// 	var score = 0
// 	var health = 100

// 	var tradeHealth = function(){
// 		score+=20
// 		health-=5

// 		if (health <= 0) {
// 			console.log('Score : brraaaaiinnnss')
// 			console.log('ZOMBIE....')

// 		}
// 		else {
// 			console.log('Score : ', score)
// 			console.log('Health : ', health)
// 		}

// 	}

// 	return tradeHealth

// }

// var playerOne = playerConstructor()
// console.log('P1', playerOne)
// playerOne()

// var isItTrue;
// if (itIs){
// 	isItTrue = true
// }
// else {
// 	isItTrue = false
// }


// var isItTrue = itIs ? 
// 	someFunc() ? 'something' : 'else' :
// 		someVar ? : otherVar : yetAnotherVar ?
// 			true : false




var cheeses = [
	'Cheddar', 
	'Havarti', 
	'Brie', 
	'Goat', 
	'Gorgonzola', 
	'Herman Muenster'
]


var cheeseSort = function(cheeseOne, cheeseTwo) {
	// 1, 0, -1

	if (cheeseOne.length < cheeseTwo.length){
		return -1
	}

	else if (cheeseOne.length > cheeseTwo.length){
		return 1
	}

	else {
		return 0
	}


}

// Sort
console.log( cheeses.sort( cheeseSort ) );

// Map
var partyCheese = cheeses.map( function(currentCheese, cheeseIndex){
	return currentCheese + '!'
} ) 

console.log('party cheeses', partyCheese)


var sortedCheeses = cheeses.map(function(cheese){
	return cheese
}).sort(cheeseSort)













