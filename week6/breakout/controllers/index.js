var fs = require('fs')
var readFileCallback = function(err, data){
    fs.readfile(data, function(err, data){
        fs.readfile(data, function(err, data){
            res.render(data);
        })
    })
}
var indexController = {
	index: function(req, res) {
        fs.readfile('somefile.txt', readFileCallback)
	}
};

module.exports = indexController;