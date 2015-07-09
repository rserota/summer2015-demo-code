var Monkey = function(name, color){
    this.name  = name 
    this.color = color
}
Monkey.prototype.climb = function(tree){
    console.log(this.name + ' climbs the ' + tree + ' tree.')
}

var george = new Monkey('George', 'green')
george.climb('oak')

var FlyingMonkey = function(name, color, wingspan){
    Monkey.call(this, name, color)
    // Monkey.apply(this, arguments) // It's easier with apply
    this.wingspan = wingspan
}
FlyingMonkey.prototype = new Monkey()
FlyingMonkey.prototype.constructor = FlyingMonkey
FlyingMonkey.prototype.fly = function(){
    console.log(this.name + ' is flying!')
}

var evilGeorge = new FlyingMonkey('George', 'black', 'Enormous')
console.log(evilGeorge)
console.log(Object.getPrototypeOf(evilGeorge))
console.log(evilGeorge.__proto__.__proto__.__proto__) // Object
