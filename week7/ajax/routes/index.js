var express = require('express');
var router  = express.Router();
var app     = require('../app');
var db      = require('../models/tasks')

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');
});


router.post('/tasks', function(req, res){
    console.log(req.body)
    var newTask = new db.Task(req.body)
    newTask.save(function(){
        res.send('got it!') 
    })
})
router.get('/tasks', function(req, res){
    db.Task.find({}, function(err, data){
        res.send(data)
    })
})

router.delete('/tasks/:whichTask', function(req, res){
    db.Task.remove({ _id : req.params.whichTask }, function(err){
        db.Task.find({}, function(err, data){
            res.send(data)
        })
    })
})
app.use('/', router);
