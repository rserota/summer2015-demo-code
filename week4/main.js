// var whatsMyName = function(){
//     console.log('My name is ' + this.name + '.')
// }
var context = {
    name : 'Alice',
}
// // whatsMyName() // My name is .

// // Functions are also objects, and therefore they can have properties.
// whatsMyName.call(context)


var whatsMyName = function(excited){
    var ending = excited ? '!!' : '.'
    console.log('My name is ' + this.name + ending)
}

// whatsMyName.call(context, true)


// just like call, but takes an array for arguments
// whatsMyName.apply(context, [true])



// Apply is most useful when the value you need to pass an unknown number of values.  

// what if we didn't know ahead of time how big this arrayw would be?
var numbers = [15, -2, .999, 0]
// console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3]))

// this is much nicer. 
// console.log(Math.max.apply(null, numbers))

var bob = {
    name : 'Bob',
}

var bobSaysHi = whatsMyName.bind(bob)

// Bind returns a function. 
// bobSaysHi()

var carlos = {
    name : 'Carlos',
}

var carlosIsHappyToMeetYou = whatsMyName.bind(carlos, true)


// Bound arguments cannot be overridden. 'hi' does nothing here, because we bound true as the first argument. 
carlosIsHappyToMeetYou('hi')


// first deal with browser prefixes
var getUserMedia = navigator.getUserMedia || 
    navigator.mozGetUserMedia || 
    navigator.webkitGetUserMedia;
// Now `this` no longer refers to navigator.


// make sure it's supported and bind to navigator
if (getUserMedia) {
    getUserMedia = getUserMedia.bind(navigator);
} else {
    console.log('Get user media is not supported.')
}