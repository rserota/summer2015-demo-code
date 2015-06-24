// var setI = function(){
//     var i = 0;
// }

// // var incrementI = function(){
// //     console.log('Lets do it again!')
// //     i = i + 1; // exactly the same as i++
// // }

// var incrementI = function(){
//     var rand = Math.random()
//     if ( rand > .5 ) {
//         i++
//     }
//     else {
//         i--
//     }
// }

// var shallWeContinue = function(){
//     // console.log('Shall we continue?')
//     return i < 10
// }
// // the first part is the INITIALIZER
// // the second part is the loop conditional, which tells us if we should continue

// for ( setI(); shallWeContinue(); incrementI() ){
//     console.log(i)
// }

// // 1: initializer
// // 2: loop conditional
// // 3: loop body
// // 4: loop incrementer
// // 5: go to step 2


// Nested for-loop
// for ( var hour = 1; hour <= 12; hour++ ){
//     for ( var minute = 0; minute < 60; minute++ ){
//         console.log(hour + ' : ' + minute)
//     }
//     console.log('ring ring ring!')
// }

// top-down programming
// var hipBoneConnectedToTheThighBone = function(){

// }

// var setUpSkeletalSystem = function(){
//     hipBoneConnectedToTheThighBone();
//     neckBoneConnectedToTheHeadBone();
// }

// setUpCirculatorySystem();
// setUpSkeletalSystem();
// setUpDigestiveSystem();


// // bottom-up programming
// var hydrogen = 'proton' + ' ' + 'electron';
// var oxygen = 'bunch of protons and electons and neutrons';

// var water = hydrogen + hygrogen + oxygen;

// var innerFunction = function(){

// }
// var outerFunction = function(){
//     var something = innerFunction()
// }
// // function definition
// var capitalize = function(string) {
//     console.log(string)
//     var result = string.toUpperCase()
//     return result;
// }
// var input = 'hello...'
// console.log(input)
// var result = capitalize(input);
// console.log(result)

// function call

// arrays - ordered list of values
// access values by numerical indexes
// arrays typically have values that are all the same type
var letters = ['a', 'b', 'c', 4];
var b = letters[1]

// objects - unordered key:value pairs
// access values by named keys
// object represents a single thing
// var greet = function(){console.log('hi')};
// var steve = { 
//     age   : 30, 
//     name  : 'Steve', 
//     sayHi : greet, 
// };

// var jeff = {
//     age   : 25,
//     name  : 'Jeff',
//     sayHi : greet,
// }

// var people = [steve, jeff]



// var people = [
//     {
//         name : 'Steve',
//         age  : 25,
//     },
//     {
//         name : 'Jeff',
//         age  : 44,
//     },
// ];
// var carrol = {name : 'carrol'}
// splice
// first argument: index to insert/delete at
// second argument: number of elements to delete
// any number of additional arguments: value to insert
// people.splice(1, 0, carrol, 4, 'hi!')


// console.log(people)
// dot notation works for properties that are valid variable names. 
// javascript variables MUST start with a letter, $, or _. They may contain only letters, numbers, $, and _.
// var 1 = 'hello'; // variables cannot start with numbers


// var $ = function(args){
// // 9,200 lines of code
// }


// Did you check your console?
// sometimes the error occurs on a line before the one the console tells you about
// stack 
var number = 10

var garbage = function(){
    var output = '';
};


garbage();