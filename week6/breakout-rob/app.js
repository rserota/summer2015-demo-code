var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var middleware = require("./modules/middleware.js")


var app = express();
app.set('view engine', 'jade'); // Set our view engine as JADE
app.set('views', __dirname + '/views'); // Tell express where we keep our views


// 'C:/Users/Rob/Projects/Summer2015-democode/week6/app/views' // dirname
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));


app.get('/admin', function(req, res){
	res.render('admin', {title : 'Admin'})
});


app.get('/', indexController.index);

app.get('/admin', middleware.isAdmin, indexController.index) //Using middleware to gate route completion

app.get('/failure', function(req, res){
	res.send('Log in son')
})
// app.get('/', function(req, res){
// 	console.log('This is the home route');

	// var indexData = {
	// 	title : 'best website ever',
	// 	user  : {
	// 		name : 'Frederick',
	// 		age  : 104
	// 	}
// 	}

// 	res.render('index', indexData)
// 	// res.render(view, data)
// 	// res.redirect('/')
// 	// res.header('Content-Type', 'application/json')
// 	// res.send({name : 'Billy bob'})

// });

var server = app.listen(3000, function() {
	console.log('Express server listening on port ' + server.address().port);
});


// 'http://google.com/?q=mysearchterm&something=else'
// "q=mysearchterm&something=else&lt;"
// q : mysearchterm
// something : else

