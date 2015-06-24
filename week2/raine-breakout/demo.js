types (primitive, numbers, coercion, isNaN)

  - literal notation: special syntax that provides a convenient way to create new instances of values of specific types (e.g. 10, 'hello', [1,2,3])
  - typeof: returns a string that represents the type of the given operand ('number', 'boolean', 'string', 'undefined', 'object'; *does not work for null)
  - Number('10') or Number(input)
    Strict conversion of a value to its equivalent number (will fail if format is not perfect; returns NaN)
  - +'10' is the same as Number('10')
  - NaN IS NOT equivalent to NaN; you have to use the built-in global function isNaN
  - parseInt and parseFloat are looser conversions for numbers (they will not fail if there are some extraneous characters)
    - You should always pass a radix (of 10) as the second argument to parseInt

function basics
object basics

> data modeling with objects and arrays

[
  {
    name: 'George',
    age: 50,
    volcano: 'Pinatubo',
    killedByLava: false,
    location: { lat: 12345, long: 67890 }
  },
  {
    name: 'Larry',
    age: 8,
    volcano: 'St. Helen',
    killedByLava: false,
    location: { lat: 12345, long: 67890 }
  },
  {
    name: 'Rosalind',
    age: 62,
    volcano: 'Vesuvius',
    killedByLava: true,
    location: { lat: 12345, long: 67890 }
  }
]

victims[1]['location']['lat']
victims[1].location.lat

// loop through all victims
for(var i=0; i<victims.length; i++) {
  // for each one, check if current victim is larry
  if(victims[i].name === 'Larry') {
    // if it is, print the latitude of the current victim
    console.log(victims[i].location.lat);
  }
}

// How to abstract functionality (i.e. make it generic and reusable)
// 1. wrap it in a function
// 2. parameterize the inputs (decide what values are dynamic; i.e. need to be passed in to the function)
// 3. return the result
var getLatitude = function(personName, optional) {

  // var victimLat = null;

  // loop through all victims
  for(var i=0; i<victims.length; i++) {
    // for each one, check if current victim is larry
    if(victims[i].name === personName) {
      // if it is, print the latitude of the current victim
      return victims[i].location.lat;

      // victimLat = victims[i].location.lat;
    }
  }

  // return victimLat;
}

console.log( getLatitude('Larry') )
var lat = getLatitude('Larry')
console.log(lat)
new Google.map(lat)

> accessing nested data and object data
program design (and pseudocode)