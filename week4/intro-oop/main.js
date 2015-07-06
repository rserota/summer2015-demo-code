// Object Oriented Programming

// Constructor Functions

// We are calling this class Cat and defining our constructor function
var Cat = function(name, color, smell, whiskers){
	// properties
	// whiskers - true / false
	// smell
	// color
	// name

	// methods
	// sleep
	// eat

	this.name     = name;
	this.color    = color;
	this.smell    = smell;
	this.whiskers = whiskers;

	// this.sleep    = function(){
	// 	console.log('This cat is sleeping');
	// }
	// this.eat      = function(){
	// 	console.log('nom nom nom...');
	// }

}

// Use the new keyword to create a new instance of our class
var blackCat = new Cat('Purrkins', 'black', 'bad', true);
// console.log(blackCat);

// blackCat.sleep()

var tabbyCat = new Cat('Paul', 'orange', 'good', false);


Cat.prototype.sleep = function(){

	console.log('This ' + this.color + ' cat is sleeping. zzzzz');

}


// The THIS

// this is an arbitrary object that lives in the scope created by a function
// Every scope has a this

// var myFunc = function(firstName, lastName){
// 	// Under the hood
// 	// var firstName = 
// 	// var lastName =  

// 	// with new keyword
// 	// var this = {}



// 	// Under the hood
// 	// return undefined

// 	// with new keyword
// 	// return this

// }

// new myFunc()




// CHALLENGE

// 1. Create a class of Quotes with 2 properties

	// a. Text of the quote
	// b. Author of the quote

// 2. create a new instance of the Quote class, store in a variable

// Bonus : Have default values for text / author if none are passed

var Quote = function(text, author){
	// Using the OR operator to set default values if none are passed in
	this.text = text || 'no text here';
	this.author = author || 'anonymous';

}
// Create 2 instances of our Quote class
var greatQuote = new Quote('All you need is love', 'Da Beatles')
var notSoGreatQuote = new Quote()

// CHALLENGE 2

// 1. Update the Quote class to include 2 methods
	// Attach to Prototype

	// a. countWords -> return the # of words in your quote
	// b. create     -> return a new DOM element via jquery for the quote

// 2. Log the word count
// 3. Append the DOM element to the page using create() method

Quote.prototype.countWords = function(){
	// We have access to this inside of our prototype methods
	return this.text.split(' ').length
}

Quote.prototype.create = function(){
	// Create DOM element with JQuery
	var quoteEl = $('<div class="my-quote"></div>')
	// Add Text to this DOM element
	quoteEl.text(this.text + ' - ' + this.author)

	// We can use prototype methods to create new properties or affect existing ones
	// on our instances
	this.el = quoteEl

	// Returning the newly set property on our object that contains our newly
	// created DOM element
	return this.el

}

// Append the return value of the create call
$('body').append( greatQuote.create() )







