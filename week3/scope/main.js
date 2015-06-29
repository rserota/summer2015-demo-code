
// scope 
// a zone in memory where names are defined

// var fullName = 'Steve Stevenson'; // this global fullName is hidden in the getFullName function, because a local variable is defined with the same name.
myArray = []
// Javascript has lexical scope : functions create a new scope
var getFullName = function(first, last){
    var fullName = first + ' ' + last
    myArray.push(fullName) // second reference to fullName : myArray[0]
    console.log(fullName)
    // return fullName
}

// var myName = getFullName('Raphael', 'Serota')
// console.log(fullName) // not accessible in this scope. Throws an error
// console.log(myName)

// garbage collection : delete variables that we have no references to

// closure : exception to garbage collection
var counterConstructor = function(){
    var start = 0;
    var counter = function(){
        console.log(start++)
    }
    return counter
}

// the inner counter function has CLOSURE over the start variable, which prevents start from being garbage collected
var myCounter = counterConstructor()
myCounter()
myCounter()
myCounter()
myCounter()
var yourCounter = counterConstructor()