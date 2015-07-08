// With no host object, `this` refers to the window
// var whatsMyName = function(){
//     console.log('My name is ' + this.name + '.')
// }
var whatsMyName = function(excited, arg2, arg3){
    var ending = excited ? '!!' : '.'
    console.log('My name is ' + this.name + ending)
    console.log(arguments)
}

var alice = {
    name : 'Alice',
}

// Functions in javascript are objects, so they can have properties and methods

// minimally, call takes one argument: a new `this` value
// whatsMyName.call(alice)

// call can also take any number of arguments, and pass them to the original function

// whatsMyName.call(alice, false)


// apply is very similar to call. Apply has at most 2 arguments
// whatsMyName.apply(alice, [true, 'arg2', 'arg3'])

var numbers = [ 1, 5, -2, 3.14159, 2000 ]
// This is extremely clumsy, and does not work at ALL if we don't know ahead of time how big the array is. 
// var result = Math.max(numbers[0], numbers[1], numbers[2], numbers[3])

// We don't actually care what the context is in this case, so we set it to null. All that matters here is that we can pass in arguments as an array.
var result = Math.max.apply(null, numbers)
// console.log(result)


// call and apply are just different ways of calling a function (with a forced `this` value)
// bind does NOT call the function immediately, but it returns a new function with a bound `this` value (and possibly also bound arguments)
var bob = {
    name : 'Bob',
}
// bind returns a function, which is assigned to bobSaysHi
var bobSaysHi = whatsMyName.bind(bob)

// calling bobSaysHi is the same as calling whatsMyName, except that `this` is bound to the object bob. 
// bobSaysHi(true)

var carlos = {
    name : 'Carlos',
}

var carlosIsHappyToMeetYou = whatsMyName.bind(carlos, true)

carlosIsHappyToMeetYou(false)

// we lose our context for `this` when we assign this function to a new variable.
var getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;

if ( getUserMedia ) {
    // we need  `this` to refer to the navigator object.
    getUserMedia = getUserMedia.bind(navigator)
}
else {
    console.log('Get user media is not supported.')
}

getUserMedia() // getUserMedia actually requires 3 arguments. This code won't work as-is.