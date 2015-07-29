var Product = require('../models/product.js');
var Region = require('../models/region.js');

var indexController = {
	index: function(req, res) {
		Region.find({}, function(err, regions){
			res.render('index', {regions : regions});
		})
		
	}
};

module.exports = indexController;