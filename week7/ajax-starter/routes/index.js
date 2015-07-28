var express = require('express');
var router  = express.Router();
var app     = require('../app');
var db      = require('../models/tasks')

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');
});


app.use('/', router);
