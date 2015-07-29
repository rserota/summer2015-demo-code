var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var voterModel = require('./models/voter-model.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get('/vote', function (req, res) {

  // Request Data (server)
  // req.query (GET)
  // req.body (POST)
  var value = req.query.value;

  voterModel.vote(value);
  var winner = voterModel.getWinner();

  // Response Data (server)
  res.send(winner);
});

// Here is what express.static is doing for everything in /public:
// app.get('/scripts/main.js', function (req, res) {
//   fs.readFile(__dirname + '/scripts/main.js', function (err, data) {
//     res.header('Content-Type', 'text/html');
//     res.send(data);
//   }
// });

var server = app.listen(4972, function() {
	console.log('Express server listening on port ' + server.address().port);
});
