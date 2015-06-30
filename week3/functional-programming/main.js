//-----//
// MAP //
//-----//
// Map takes 1 args (optional additional) in its callback
// 1.  Current element in the array

// var myNumbers = [2, 12, 3, 17, 233, 21];

// Traditional For Loop
// var doubleNumbers = []
// for (var i = 0; i < myNumbers.length; i++) {
	// doubleNumbers.push(myNumbers[i] * 2);
// };
// console.log(doubleNumbers)


// // Map callback function
// var doubleDown = function(number, index){
// 	// index is an optional argument
// 	// console.log('Index : ', index)
// 	return number * 2
// }

// // console.log(doubleDown(4);
// var doubleNumbers = myNumbers.map(doubleDown);



//-------//
// FITER //
//-------//
// Filter takes 1 args (optional additional) in its callback
// 1.  Current element in the array

// var fruits = [
// 	{
// 		name : 'Pineapple',
// 		growsOnTree : false
// 	},
// 	{
// 		name : 'Banana',
// 		growsOnTree : true
// 	},
// 	{
// 		name : 'Cantaloupe',
// 		growsOnTree : false
// 	}
// ]

// Tradtional for loop
// var treeFruits = []
// for (var i = 0; i < fruits.length; i++) {
// 	if (fruits[i].growsOnTree){
// 		treeFruits.push(fruits[i])
// 	}
// };

// Filter callback function
// var treeGrower = function(fruit) {
	// Best - most concise return statement
// 	return fruit.growsOnTree

	// Better
// 	// fruit.growsOnTree ? true : false
	
	// Good
// 	// if (fruit.growsOnTree) {
// 	// 	return true
// 	// }
// 	// else {
// 	// 	return false
// 	// }
// }

// var partyFruit = function(fruit){
// 	return fruit.name + '!!!!'
// }

// console.log( fruits.filter(treeGrower).map(partyFruit)[0] );

//--------//
// REDUCE //
//--------//
// Reduce takes 2 args(optional additional) in its callback
// 1.  Running Total of the reduction
// 2.  Current element in the array


// var myNumbers = [2, 12, 3, 17, 233, 21];

// // simple addition to our running total
// var summer = function(runningTotal, currentNumber) {
// 	return runningTotal + currentNumber
// }
// // remove numbers less than 20
// var removeLessThanTwenty = function(number) {
// 	return number > 20
// }

// Can pass in function references in Jquery like we do with map / filter / etc
// $('.my-class').on('click', removeLessThanTwenty)

// We can also pass in anonymous functions as well
// myNumbers.filter(function(number){
// 	return number > 20
// })

// console.log('Filter : ', myNumbers.filter(removeLessThanTwenty))

// console.log( myNumbers.filter(removeLessThanTwenty).reduce(summer, 0) );


