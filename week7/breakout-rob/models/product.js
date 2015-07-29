var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
	
	name         : {type : String},
	proof        : {type : Number, default : 50},
	region       : {type : mongoose.Schema.ObjectId, ref : 'Region'},
	price        : {type : Number},
	age          : {type : Number},
	liquorType   : {type : String}
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product