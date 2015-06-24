// In english, we write SENTENCES, composed of WORDS, which have TYPES, (noun, verb)
// in Javascript, we write STATEMENTS, composed (mostly) of VALUES, which have TYPES (number, or string)

// Number
// 4
// 10
// 3.14159
// -10

// combine a value with an operator to produce a new value
// +, -, *, /

// Variable assignment: variable is a NAME that refers to a value
// var result = 10 / 3;
// alert(result)
// result is NOT a literal number, it is a number reference
// 3.3333333 IS a literal number


// String literals
'Hello'
"A witty saying proves nothing."

// String operators
var greeting = 'Hello ' + 'world.'; // Between strings, + performs concatenation
// alert(greeting);
var eleven = '1' + '1';
// alert(eleven)
var math = '1 + 1';
// alert(math);

// Strings have properties
// bracket notation
// alert( greeting['length'] );

// dot-notation. Sometimes doesn't work.
// alert( greeting.length )

// strings are zero-indexed
// alert( greeting[1] );
// alert( greeting[greeting.length - 1] )


// Boolean literal
true
false

// Boolean operators
// the not operator is a unary operator: it modifies one operand.
// alert( !!true )
// alert( !!false )
// Binary boolean operators: && and ||
// alert( true && false ) // true only if BOTH operands are true
// alert(true && true && true && false && true) // if there is at least one false, the whole expression is false

// alert(false || false || false || true || false) // this expression is false only if ALL operands are false

// alert(10 > 1)
// alert( 5 <= 5 )
// alert('steve' === 'stEve')
// alert('steve' !== 'jeff')
// var myVar = null;
// if ( myVar === null || myVar === undefined ){

// }
// if-else chain
"Isn't that nice?"
var age = 19;
var canDrink;
var country = 'Texas';
// an if-else chain must have exactly 1 if
if ( age >= 21 ) {
    canDrink = true;
}
// an if-else chain can have 0 - infinity
else if ( age >= 18 && (( country === 'Ireland' ) || ( country === 'Norway' )) ){
    canDrink = true;
}
// else if ( false ) {

// }
// else if ( false ) {

// }
// an if-else chain can have 0 or 1 else.
// else {
//     canDrink = false;
// }
// type coercion
// alert('Will you be served? ' + canDrink);

// Array literal
// var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// console.log(days.length)

// access individual elements with bracket notation
// console.log(days[1]);
// i++
// i+=1
// i = i + 1
// for ( var i = 0; i < days.length; i++ ) {
//     if ( days[i] === 'Saturday' ) {
//         alert('Party!')
//     }
//     else if ( days[i] === 'Sunday' ) {
//         alert('Take a nap.')
//     }
//     else {
//         alert('work work work...')
//     }
// }

// days[0] = 'moooonnnddaaaaayyyy';
// days.push('RaphaelDay', 2);
// days[7] = 'RaphaelDay' // this is kind of confusing

// days.pop(2);

// console.log(days);

// Object literal
// name:value pair.  or key:value pair.
// var sharkNado = {
//     title  : 'Sharknado II',
//     genre  : 'Science Fiction',
//     rating : 8,
// };
// var HTTM = {
//     title  : 'Hot Tub Time-Machine',
//     genre  : 'Historical autiobiography',
//     rating : 11,
// }
// var movies = [];
// movies.push(sharkNado);
// movies.push(HTTM);

// console.log(movies)
// HTTM['title']

// var property = prompt('Which property do we want to check?');
// console.log(HTTM.property) // this won't work

// bracket notation is the only way to look up dynamic properties on an object
// console.log(HTTM[property]);

// movie.year = 2013;
// HTTM['ye' + 'ar'] = 2013;
// console.log(movie);

// for ( var key in HTTM ){
//     console.log('The ' + key + ' of the movie is ' + HTTM[key] + '.');
// }


// A function is a reusable block of code ( set of instructions ) that takes inputs, and produces outputs

// Function another non-primitive type

// Function literal
var calculateArea = function(height, width){ // inputs are called arguments, or parameters
    var area = height * width; // return defines the outputs of a function
    return area
}

// console.log(calculateArea(4, 3)) // PASSING 4 and 3 into the function

calculateArea(4, 3) // function call. we're invoking the function.
calculateArea // function reference

var anotherReference = calculateArea // this creates a second sign-post pointing to the same function
var squareFeet = anotherReference(100,200) // the return statement lets us know what is ultimately assigned to squareFeet

// myFunction = function(){

// }

// var steve = {}
// var janet = {}

// steve.doSomething = myFunction
// janet.alsoDoSOmething = myFunction

// steve.doSomething() // calling a method
// var pluralize = function(word, number){
//     if ( number === 1 ) {
//         return [word, 'hello']; // use an array or object to return multiple values
//         console.log('You will never see this.') // you can't see this if it's after the return statement
//     }
//     else {
//         return word + 's'; // only one of these return statements will run
//     }
// }
// console.log(pluralize('chair', 1))

// console.log(pluralize('mongeese', 2))
// var hello = 'hello!'
// console.log(hello.toUpperCase()) // toUpperCase is both a function and a property, therefore it is also called a method

// var weekString = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday';
// var weekArray = weekString.split(' ');
// console.log(weekArray);

// weekString = weekArray.join(', ')
// console.log(weekString);

// functions create scope
var concat = function(word1, word2){
    var output = word1 + ' ' + word2;
    return output;
};

var sentence = concat('Write', 'code!');
console.log(sentence);
console.log(output)
// console.log(word1) // word1 is NOT defined here
// console.log(output) // also not defined

// var globalVariable = 5;
// var whatsGlobal = function(){
//     return globalVariable;
// }
// console.log(whatsGlobal()); // functions can see values defined outside of themselves, but code outside of a function cannot see into the function.

'hello'.toUpperCase()