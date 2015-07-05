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


// The function returned from bind has its arguments bound, so it ignores new arguments. 'hi' does nothing here. 
carlosIsHappyToMeetYou('hi')