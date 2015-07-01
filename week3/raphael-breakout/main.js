// parentheses hold function signature
var add5 = function(number, string){
    // var number = 8;
    return 5 + number; // return value tells us what a function call is worth, what it evaluates to. 
    return 10 + number; // this statement will never execute
}

// return 10 + number; // you cannot return outside of a function. Return tells us what a function evaluates to, so it makes no sense to use it outside of a function. 


// this just creates a second reference to the same function
// var result = add5
// var realResult = result(11) // this would equal 16

// javascript uses positional arguments to determine which argument matches which parameter
// var result = add5(8, 'hi!')
// console.log(result)

// $(document).on('ready', function() {
  
// });

// functions like caller would be written for you.
// var caller = function(callback){
//     callback() // calling the argument, so there is a STRONG expectation that the argument is a function
// }

// You would have to write doSomething
// var doSomething = function(){
//     console.log('I did something!')
//     // if there is no explicit return statement, functions implicitly return undefined
//     return doSomething
// }
// // caller(doSomething()) // undefined is passed into caller
// // caller(doSomething)

// // signature for setTimeout is (callback, duration)
// // pure functions aren't useful to pass to setTimeout
// setTimeout(doSomething, 2500)

var people = [
    'Alice',
    'bob',
    'Carlos',
    'Dan',
    'Eve',
]

// forEach is NOT functional because it does not return a value. We must use side
// people.forEach(function(element){
//     console.log(element)
// })

// var peopleObjects = people.map(function(element, index){
//     // console.log(index)
//     return { 
//         name : element,
//         // age  : index * 3
//     }
// }).map(function(element){
//     return {
//         name : element.name.toUpperCase()
//     }
// })
// console.log(peopleObjects)

// filter returns an array that is at most the same size as the input array, but is mostly likely smaller.
// var vowels = {
//     a : null,
//     e : null,
//     i : null,
//     o : null,
//     u : null,
// }
// var fewerPeople = people.filter(function(element){

//     // 'in' is a binary operator
//     // write `string` in `object`, and it will evaluate to true if that object has a key that equals `string`.
//     if ( element[0].toLowerCase() in vowels ){
//         return false
//     }
//     else {
//         return true
//     }
// })
// console.log(fewerPeople)


// var hi = 'hello world'
// hi[2]
// hi[hi.length-1]
// hi[0] = 'H' // assigning to a string index does nothing. Strings are immutable.

// split takes a string, and returns an array
// var hiArray = hi.split(' ')
// var capHiArray = hiArray.map(function(element){ // convert the string to an array so we can map over it
//     return element.toUpperCase() // not really the most useful thing to do here, but you get the idea.
// })
// // console.log(hiArray)
// // console.log(capHiArray)

// // while split takes strings and returns arrays, join takes an array, and returns a string
// var backToString = capHiArray.join(' ') // we split on space, so I'll also join on space
// console.log(backToString)

var numbers = [2, 1.6, 4, 5.9, -2]

var sum = numbers.reduce(function(runningTotal, current){
    return runningTotal / current
}, 100000)

// console.log(sum) // it's not really a sum anymore. We should use a more semantic name. 


// var foo = 10

var doSomething = function(){
    var foo = 5;
    return foo; // what is foo? first, check the local scope
}

// executing a function creates a new scope, local to that function
console.log(doSomething())

console.log(foo)