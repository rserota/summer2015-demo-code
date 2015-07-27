var mongoose = require('mongoose');

// Now we need to connect to our DB
mongoose.connect('mongodb://localhost/foods');

// Model takes 2 arguments
// 1. Name of collection
// 2. Schema
var Plate = mongoose.model('plate', {
	name     : {type : String},
	calories : {type : Number},
	region   : {type : String},
	texture  : {type : String}
});


var sushi = new Plate({
	name     : 'Sushi',
	calories : 300,
	region   : 'Asia',
	texture  : 'Fishy',
});

sushi.save();

// db.collectionname.find()
// Plate.find({}, function(err, plates){
// 	console.log('Error : ', err);
// 	console.log('Plates : ', plates);
	
	
// } )
