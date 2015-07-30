var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

// Add DB connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/characters');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

// Create Hero route
app.post('/create-hero', indexController.createHero)

var trans = require('google-translate')('AIzaSyDd_6YVD5_TxKGKYnf5-j7R1BxcySFUXX4')

var server = app.listen(3689, function() {
	console.log('Express server listening on port ' + server.address().port);
});
