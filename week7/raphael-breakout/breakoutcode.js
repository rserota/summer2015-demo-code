var foo = function(){
    console.log(this) // this is still the global object
}

var bar = {}
bar.foo = foo // in this case, this is bar.
foo()
bar.foo()

car.outer = function(){
    console.log(this) // bar
    var thatCar = this
    setTimeout(function(){
        console.log(that) // that is bar
    }, 1000)
}

[].forEach.call( $('div'), function(elem){
    console.log(elem)
})

// functions
// two components: function declaration/definition, and the function call/invocation

var foo = function(input){
    return input
}
console.log(foo)

