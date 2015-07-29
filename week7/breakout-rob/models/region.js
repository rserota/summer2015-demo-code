var mongoose = require('mongoose');

var regionSchema = mongoose.Schema({
	
	name         : {type : String},
	productList  : [ {type : mongoose.Schema.ObjectId, ref : 'Product'} ]
});

var Region = mongoose.model('Region', regionSchema);

module.exports = Region