// typeof operator - tells us what type a variable is

// $('#myID').text() // argument is undefined, thus .text() is a getter
// $('#myID').text('hello!') // argument is a string, thus .text('...') is a setter
// $('...').on('event', 'selector', callback)
// using typeof operator to enable polymorphic behavior
// var steve = {
//     name : 'Steve',
//     myNameIs : function(name){ // if no argument is passed, name is undefined
//         if ( typeof name === 'undefined' ) {
//             return steve.name;
//         }
//         else if ( typeof name === 'string' ) {
//             steve.name = name;
//         }
//     }
// }

// console.log(steve.myNameIs()) // logs "Steve"

// steve.myNameIs('Jeff') // Does not console.log or return anything
// console.log(steve.myNameIs())

// typeof {} // 'object'
// typeof [] // 'object'
// [].constructor === Array // true
// falsey values 0, '', null, undefined, false. All other values are truthy
// var myNameIs = function(firstName, height){
//     height.feet = height.feet || 5
//     height.inches = height.inches || 6

//     name = ( firstName || lastName || 'Steve' ); // this expression evaluates to the first truthy value, or the last value, if none are truthey
//     console.log(name);
// }

// myNameIs('', null)


// var whosYourDaddy = function(person){ // function signature is much cleaner now!
//     // string of && evaluates to the first falsey value, or last value
//     if ( person && person.parents && person.parents.dad ){ 
//         var dad = person.parents.dad
//     }
//     else {
//         var dad = 'No dad ... so sad =/'
//     }
//     return dad
// }
// + is a binary operator
// typeof is a unary operator

// ternary operator () ? () : ()
// var whosYourDaddy = function(person){ // function signature is much cleaner now!
//     // string of && evaluates to the first falsey value, or last value
//     return ( person && person.parents && person.parents.dad ) ? person.parents.dad : 'No dad ... so sad =/' 

// }

// var steve = {
//     name : 'Steve',
//     // parents : {
//     //     dad : 'Jeff',
//     //     mom : 'Alice',
//     // },
//     siblings : ['carol', 'Carlos', 'Dan']
// }

// ternary expressions are more portable than if-else statements because they are expressions, not statements.
// for (var i=0; ('ternary expression goes here')  ; i++){

// }

// console.log(whosYourDaddy(steve))

// functions are value

// imagine that I didn't write this function, it was provided to me as-is.
// var caller = function(callback){
//     callback()
// }


// var myNameIs = function(name){
//     return name
// }

// var name = caller(myNameIs); // this doesn't work. I have no control over the return value

// var myCallback = function(){
//     console.log('now!')
// }
// setTimeout(myCallback, 2000)

// setTimeout(function(){
//     console.log('this is a callback!')
// }, 1500)

// I never call myCallback. You never see myCallback()

// var again = function(){
//     console.log('again!')
// }

// again()
// var intervalID = setInterval(function(){
//     again()
// }, 400)

// setInterval(function(){
//     clearInterval(intervalID)
// }, 2000)

// sort is a destructive array method

// var people = [1, 8, 11, 234, 92]
// // people.sort() // sorts alphabetically, no good!

// people.sort(function(a, b){
//     return a - b
// })


var people = [
    {
        name : 'Steve',
        age  : 12,
    },
    {
        name : 'Alice',
        age  : 44,
    },
    {
        name : 'Bob',
        age  : 32
    }
]
people.sort(function(a, b){
    if ( a.age > b.age ) {
        return 1
    }
    else if ( a.age < b.age ) {
        return -1
    }
    else if ( a.age === b.age ) {
        return 0
    }
})
console.log(people)



