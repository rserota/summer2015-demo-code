var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	template : function(req, res){
		res.render('templates/' + req.params.templateName)
	}
};

module.exports = indexController;