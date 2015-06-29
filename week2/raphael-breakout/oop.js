
var Person = (function(){

    var Person = function(first, last){
        this.firstName = first;
        this.lastName = last;
    }
    var fullName = function(thatPerson){
        return thatPerson.firstName + ' ' + thatPerson.lastName;
    }
    Person.prototype.greet = function(){
        console.log(fullName())
    }
    return Person
})()

var jeff = new Person('jeff')
jeff.greet()