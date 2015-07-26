
var indexController = {
	index: function(req, res) {
		var indexData = {
			title : 'best website ever',
			user  : {
				name : 'Frederick',
				age  : 104
			}
		}
		res.render('index', indexData);
	},



};

module.exports = indexController;