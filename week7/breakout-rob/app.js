var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var indexController = require('./controllers/index.js');
var API = require('./controllers/api.js');

mongoose.connect('mongodb://localhost/liquorstore');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/api/getbooze', API.Products.getProducts);
app.post('/api/addbooze', API.Products.createProduct);

var server = app.listen(4115, function() {
	console.log('Express server listening on port ' + server.address().port);
});
