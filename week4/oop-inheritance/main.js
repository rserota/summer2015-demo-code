// a restaurant 'has a ' menu.  A menu 'has a' plate. Restaurant UI is full of 'has a' relationships. 

// 'is a'.  A golden retriever 'is a' dog. A dog 'is a' animal. 


var Monkey = function(name, color){
    this.name  = name;
    this.color = color;
};
Monkey.prototype.climb = function(tree){
    console.log(this.name + ' climbs the '  + tree + ' tree.')
};

var george = new Monkey('George', 'red');
// george.climb('oak');

// This code is not very DRY: Don't Repeat Yourself
// var FlyingMonkey = function(name, color, wingspan){
//     this.name = name;
//     this.color = color;
//     this.wingspan = wingspan
// }
// FlyingMonkey.prototype.climb = function(tree){
//     console.log(this.name + ' climbs the '  + tree + ' tree.')
// };
// FlyingMonkey.prototype.fly = function(){
//     console.log(this.name + ' flew ' + this.wingspan * 10 + ' feet.')
// }

// The point of inheritance is to prevent duplicating code. 
var FlyingMonkey = function(name, color, wingspan){
    // var this = {}
    // We execute the monkey constructor to assign properties to `this`.
    Monkey.call(this, name, color) // The monkey constructor adds name and color to our newly created flying monkey. 
    // Monkey.apply(this, arguments)
    this.wingspan = wingspan; // here we do flyingMonkey-specific logic
}
// Using the Monkey constructor gives our FlyingMonkey all the Monkey properties, but not methods.

// FlyingMonkey.prototype = Monkey.prototype; // This is not inheritance. We're sharing methods both ways (parent to child, and child to parent).
FlyingMonkey.prototype = new Monkey();
FlyingMonkey.prototype.constructor = FlyingMonkey;
// We do flyingMonkey-specific things AFTER assigning a new monkey to the flyingMonkey prototype.
FlyingMonkey.prototype.fly = function(){
    console.log(this.name + ' flew ' + this.wingspan * 10 + ' feet.')
}

// This method would override the climb method from the parent.
// FlyingMonkey.prototype.climb = function(){
//     console.log('flying monkeys are way better at climbing.')
// }
// A child class is always 'bigger' than it's parent. 

var evilGeorge = new FlyingMonkey('EvilGeorge', 'black', 150) // 150 monkey-units.
console.log(evilGeorge)

evilGeorge.climb('pine')
evilGeorge.fly()

console.log(Object.getPrototypeOf(evilGeorge))
console.log(evilGeorge.__proto__.__proto__.__proto__) // Object
