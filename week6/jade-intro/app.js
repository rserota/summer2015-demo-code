var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// Foods array we will pass to the view
var foods = [
	{name : 'pineapple'},
	{name : 'haggis'},
	{name : 'saag'}
]

// Site counter we will pass to the view
var siteCounter = 1
fs = require('fs');
// Home route
app.get('/', function(req, res) {
	// Render can take 2 arguments
	// 1- name of template
	// 2- object that contains data for template
	fs.readFile('data.txt', function(err, data){
		console.log(err, data)
	})
	// res.render('index', {
	// 	counter : siteCounter,
	// 	foods   : foods 
	// });

	// Increment our site counter - should stay incremented until server restarts
	siteCounter++

});

// POST route handler for /submit
app.post('/submit', function(req, res){
	// req.query - GET requests
	// req.params - dynamic routes - /:page
	// req.body - POST requests (also PUT and DELETE)
	console.log('Body - ', req.body)
	// Our data is contained within the request body

	// Adding a new food to our foods array
	// This is coming from the client and will stay in our foods array until the server restarts
	foods.push({ name : req.body.food })

	// All requests must come to an end
	// Can do this with res.send / render / redirect
	res.redirect('/')
	// Redirecting to our home route apllies a GET request to that route
	// This initiates its route handler again and re-renders our view


});


var server = app.listen(7257, function() {
	console.log('Express server listening on port ' + server.address().port);
});
