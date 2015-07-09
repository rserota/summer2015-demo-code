var Person = (function(){
    var people = [];
    var Person = function(first, middle, last){
        this.first  = first 
        this.middle = middle 
        this.last   = last
        people.push(this)
    }

    // This is a static method, since it concerns all of our people, not a specific person. 
    Person.listAllPeople = function(){
        console.log(people)
    }
    // fullName is a private method
    var fullName = function(thatPerson){
        return thatPerson.first + ' ' + thatPerson.middle[0] + ' ' + thatPerson.last
    }
    Person.prototype.myNameIs = function(){
        console.log(fullName(this))
    }

    return Person
})()

var jfk = new Person('John', 'Eff', 'Kennedy')
var gwc = new Person('George', 'Washington', 'Carver')
jfk.myNameIs()