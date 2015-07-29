var Product = require('../models/product.js');
var Region = require('../models/region.js');

// db.products.find
// Product.find

var Products = {
	
	getProducts : function(req, res){
		
		Product.find({}).populate('region').exec(function(err, products){
			res.send( {data : products} );
		});
		
	},
	
	createProduct : function(req, res){
		
		// Data comes from req.body
		var prod = new Product(req.body)
		
		prod.save(function(err, doc){
			res.send( {data : doc} );
		});
		
	}
	
	
}

module.exports = {
	Products : Products
	// Regions  : Regions
}


