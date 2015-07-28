var Person = require('../models/person.js');



var indexController = {
	index: function(req, res) {
		
		// Basic FIND query that passes our returned documents back to jade
		// Person.find({}, function(err, documents){
		// 	res.render('index', {characters : documents});	
		// });
	
		// FIND query with a SORT method chained onto it.
		// EXEC gives us access to the callback after ALL methods have executed
		Person.find({}).sort('name').exec(function(err, documents){
			console.log(err)
			res.render('index', {characters : documents})
		})
		
		
		// console.log('hello');
		// ....
				
	},
	
	createHero : function(req, res){
		
		// Access form data from the body
		// req.body
		
		var hero = {
			name : req.body.name,
			costume : req.body.costume,
			catchPhrase : req.body.catchPhrase,
			powers : req.body.powers.split(', ')
		}
		
		// Create a new Person
		var newHero = new Person(hero);
		
		// Save that Person
		newHero.save(function(err, doc){
			console.log("Save Err : ", err);
			if (err) {
				
				// Simple Error handling by sending raw text to client
				res.send("can't add hero - " + err.message)
			}
			else {
				
				// If no error, we want to redirect the user to the home page.
				res.redirect('/');
			}
		});
		
	}
	
};

module.exports = indexController;