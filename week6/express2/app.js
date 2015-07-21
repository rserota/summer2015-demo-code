var express = require('express');

// we need this to receive data from post requests
// You can only transmit strings over HTTP. Body parser automatically parses form data from strings into javascript objects or arrays or numbers. Body parser attaches the form data, the body of the post request, on to req.body.
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// app.use indicates that we're declaring MIDDLEWARE. app.use is application-level middleware.
// app.use runs on every request.

// static middleware sets up routes for every file in our public folder, so that they can be requested by name.
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index); // app.js should be a high level overview of what your application does.

// colon indicates a URL parameter. We're not looking for a literal request to '/:page', but we're expecting a dynamic value, and we'll call it page.
app.get('/:page/:order', function(req, res){
    console.log(req.params)
    res.render('index')
})



// we are expecting a POST request at /contact
// /contact is a ROUTE that we are prepared to recive requests at. The callback function is our route HANDLER that describes what we do when we receive a request at that route.
app.post('/contact', function(req, res){
    // the name attribute in our HTML form becomes the key in req.body. If an input in your form does NOT have a name attribute, it will not be sent.
    console.log(req.body)
    // we have to give SOME response to any request, even posts. res.send, res.render, and res.redirect are common. 
    res.redirect('/')

})

app.get('/about', function(req,res){

})

var server = app.listen(7277, function() {
	console.log('Express server listening on port ' + server.address().port);
});
