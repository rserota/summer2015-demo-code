// Magma Chambers// Sacrificed Virgins

// Volcano - Mt. Vesuvius

	// - Height
	// - Age
	// - Active / Inactive

	// --Erupt
	// --Earthquake

// Volcano Constructor 
// @param  height    Number
// @param  age       Number
// @param  activity  Boolean
// @param  name      String
// @param  evilLair  Lair
var Volcano = function(height, age, activity, name, evilLair){

	this.height = height;
	this.age = age;
	this.active = activity;
	this.name = name;
	this.evilLair = evilLair;

}

// Erupt prototype method
Volcano.prototype.erupt = function(){

	return this.active ? this.name + ' has erupted... BOOM!' : this.name + ' is inactive.'
}

// Earthquake prototype method
Volcano.prototype.earthquake = function(){
	// We can access the evilLair property like any other property
	// Even though it's an instance of another class!
	var missiles = this.evilLair.launchMissiles()
	return this.name + ' has caused a rumble in the earth. ' + this.evilLair.name + ' is jumbling around. ' + missiles
}
// Evil Lairs

	// - Fortified / Unfortified
	// - Lunch Buffet / No

	// --Launch Missiles
	// --Trapped

// Lair Constructor
// @param  fortitied  Boolean
// @param  lunch      Boolean
// @param  name       String
// @param  villain    Villain
var Lair = function(fortified, lunch, name, villain){
	this.fortified = fortified;
	this.lunchBuffet = lunch;
	this.name = name;
	this.evilVillain = villain;
}

// Launch missile method
Lair.prototype.launchMissiles = function(){
	return 'Missiles launched from ' + this.name
}

// Self Destruct method
Lair.prototype.selfDestruct = function(){
	return 'SelfDestruct imminent!'
}

// Villain - Dr. Evil

	// - Name
	// - Bald / Not
	// - saying

	// --Long-winded speeches
	// --Demand money - $1 million

// Villain Constructor
// @param  name    String
// @param  bald    Boolean
// @param  saying  String
var Villain = function(name, bald, saying){
	this.name = name;
	this.bald = bald;
	this.saying = saying;
}

// Speech Method
// @param  lair  Lair
Villain.prototype.speech = function(lair){
	// console.log(this)
	// Passing in a Lair object as param lair
	// We can access properties and methods on it!
	var destruct = lair.selfDestruct()

	return this.saying + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \n' + destruct
}


// Creating instances of our classes

// Villain Instance
var evilVillain = new Villain('Dr. Evil', true, 'How about no?');

// Lair Instance - passing in Villain instance
var evilLair = new Lair(true, true, 'Mordor', evilVillain);

// Volcano Instance - passing in Lair instance
var vesuvius = new Volcano(800, 2000000000, true, 'Mt. Vesuvius', evilLair);














