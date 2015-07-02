// var first = 'George'
// var middle = 'Washington'
// var last = 'Carver'

// var fullname = function(){
//     return first + ' ' + middle[0] + ' ' + last;
// }

// console.log(fullname())

// namespace collisions 


// var app = {}

// app.first = 'George'
// app.middle = 'Washington'
// app.last = 'Carver'
// app.fullname = function(){
//     return app.first + ' ' + app.middle[0] + ' ' + app.last;
// }

// console.log(app.fullname())


// revealing module pattern - one of many design patterns.
// var appBuilder = function(){
//     // other developers working with this code should not need to care about these local variables
//     var first = 'George'
//     var middle = 'Washington'
//     var last = 'Carver'

//     var app = {}
//     app.fullname = function(){ // only the properties on app are revealed. all other variables are private.
//         return first + ' ' + middle[0] + ' ' + last;
//     }
//     return app
// }

// var app = appBuilder()

// console.log(app.fullname())

// IIFE - Immediately Invoked Function Expression

// (function(){})();
// We define a function without a name, and in the same breath, invoke it immediately. 
// (function(name){
//     console.log(name)
// })('Steve');

// You know that if I wanted to call this function twice, I would have given it a name
// revealing module pattern using an IIFE
// var app = (function(){
//     // other developers working with this code should not need to care about these local variables
//     var first = 'George'
//     var middle = 'Washington'
//     var last = 'Carver'

//     var app = {}
//     app.fullname = function(){ // only the properties on app are revealed. all other variables are private.
//         return first + ' ' + middle[0] + ' ' + last;
//     }
//     return app
// })()

// This is NOT a self-invoking function

// by the time the first setTimeout runs, the for loop has finished, so all the setTimeouts see i === 10
// for ( var i = 0; i < 10; i++ ){
//     (function(loopI){
//         setTimeout(function(){
//             console.log(loopI)
//         },(i*100) )
//     })(i)
// }
// primitive types (numbers, strings, booleans, etc) are passed by value
// when we call a function and pass in a value, does the function have access to the value itself, or just a copy?

// var hi = 'hello';
// var mutate = function(string){
//     string = 'hi!' // this was passed by value, so it's a copy of the string, not the original
// }

// mutate(hi)


// non-primitive types are passed by reference. We're modifying the original array inside this function!
var myArray = [1,2,3]
var mutate = function(array){
    array.push('hi!')
}
mutate(myArray)

