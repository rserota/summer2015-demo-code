var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
var myMiddleware = function(req, res, next){
    // console.log('in the middle!')
    req.howdoyado = 'hello'
    next()
}
app.get('/', myMiddleware, function(req, res){
    console.log(req.howdoyado)
    res.send('hi!')
});

var server = app.listen(4198, function() {
	console.log('Express server listening on port ' + server.address().port);
});
