var express       = require('express');
var path          = require('path');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var debug         = require('debug')('expressApp');
var session       = require('express-session');
var multer        = require('multer');

var app = module.exports = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.sessionMiddleware = session({ secret: 'ilovescotchscotchyscotchscotch', saveUninitialized: true, resave: true })
app.use(app.sessionMiddleware);
app.use(express.static(path.join(__dirname, 'public')));


require('./routes/index');


app.set('port', process.env.PORT || 3000);
app.server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + app.server.address().port);
});
