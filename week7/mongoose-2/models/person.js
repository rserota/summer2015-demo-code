var mongoose = require('mongoose');

// Schema structure for our Person model
var personSchema = mongoose.Schema({
	name        : {type : String, required : true},
	powers      : {type : Array, default : []},
	costume     : {type : String},
	catchPhrase : {type : String, default : '...'},
	deleted     : {type : Boolean, default : false}
});

// This instantiates the collection
var Person = mongoose.model('person', personSchema);


// OR in one step : 
// var Person = mongoose.model('person', {
// 	name        : {type : String},
// 	powers      : {type : Array, default : []},
// 	costume     : {type : String},
// 	catchPhrase : {type : String, default : '...'}
// });


// IMPORTANT - we want to export this model so we can use it in other files
module.exports = Person;