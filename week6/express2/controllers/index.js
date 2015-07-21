
var indexController = {
    // this is where we would read information from the request, look up data in our database, organize that data, and feed it into our template.
	index: function(req, res) {
        // the query string is the only way to attach data to a GET request. They're useful for bookmarking dynamic pages.
        console.log(req.query.page)
		res.render('index');
	}
};

module.exports = indexController;