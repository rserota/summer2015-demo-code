// hoisting


// console.log(whatever)
// var whatever = 'hello!'

// // var foo = function(){
// //     console.log(whatever)
// //     var whatever = 'nope.'
// // }

// // function actually executes like this:
// var foo = function(){
//     console.log(whatever);
//     var whatever = function(){}
//     function whatever(args){}
// }
// foo()


// var foo = function(){
//     // this variable gets deleted when 
//     var x = 10
//     console.log(x)
// }
// foo()
// foo()

// closure is an exception to garbage collection

// var counterConstructor = function(){
//     var x = 0
//     var counter = function(){
//         console.log(++x)
//     }
//     return counter
// }

// // myCounter has closure over the variable x, which prevents x from being garbage collected.
// var myCounter = counterConstructor()
// myCounter()

// var yourCounter = counterConstructor()

// the definition of map probably looks like this. It doesn't really need an array, just numerical indexes.
// Array.prototype.map = function(callback){
//     var output = []
//     for ( var i = 0; i < this.length; i++ ){
//         output[i] = callback(this[i])
//     }
//     return output
// }

// var hello = 'hello';
// var result = [].map.call(hello, function(element){
//     return element.toUpperCase()
// }).join('')

// console.log(result)

// // don't actually do this in real code. Just trying to show how objects/arrays are similar
// var numbers = [1, 2, 3]
// for ( var key in numbers ){
//     console.log(key, typeof key) // The keys are all strings!
// }

// var steve = {
//     name : 'Steve',
//     length : 400,
// };

// [].push.call(steve, 'hi!')