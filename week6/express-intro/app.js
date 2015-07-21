// app.js is the entry point to the application


var express = require('express');

// calling express returns an app object. Calling methods on the app object configures our application
var app = express();

// app.set sets configuration settings. These lines run ONCE each, when I start the web application
// app.set('view engine', 'jade') tells express we're using jade templates
app.set('view engine', 'jade');

//this tells express where our jade templates are at
app.set('views', __dirname + '/views');


// This route is prepared to accept GET requests. For example, typing URL into the URL bar in your browser, that sends a GET request to that URL. 
// app.get needs two arguments: where are we expecting the get request? '/' means root of our application.
// www.thisisawebsite.com/about

// second argument: what do we do when we receive a request at this route?
app.get('/', function(req, res) {
    // we already told express that we're using jade, and we told express where the templates are.

	res.render('index'); // internally, express will res.send() the rendered html. In any route, render (or send) will typically be the last thing you do. 
});

app.get('/about', function(req, res) {
    res.render('about')
})

var server = app.listen(6215, function() {
	console.log('Express server listening on port ' + server.address().port);
});
