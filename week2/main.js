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