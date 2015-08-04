// Create a module
var cryptApp = angular.module('cryptApp', ['ngResource', 'ngRoute']);

// Route provider to control what controllers / views are used at a specific route
cryptApp.config(function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl : '/templates/cryptanimallist',
			controller  : 'cryptAnimalList'
		})

});

cryptApp.factory('animalFactory', function($resource){
	var model = $resource('/api/animals/:id', {id : '@_id'})
	// this._id
	// @_id

	// model.query() // GET - /api/animals
	// model.get()
	// model.$save() // POST - /api/animals
	// model.$delete()
	// model.get({id : ObjectId('5483292394823')}) // GET - /api/animals/5483292394823
	return {
		model   : model,
		animals : model.query() // GET - /api/animals
	}


});

// $.ajax({
// 	url : '/api/animals',
// 	method : 'GET',
// 	success : function(returnData){}
// })

// $.ajax({
// 	url : '/api/animals',
// 	method : 'POST',
// 	data : {asasdad}
// })


// cryptAnimalList Controller
cryptApp.controller('cryptAnimalList', function($scope, animalFactory){
	console.log('I AM THE CONTROLLER', animalFactory);

	$scope.animals = animalFactory.animals;

	$scope.addAnimal = function(){
		console.log(this.newAnimal);
		var newCryptAnimal = new animalFactory.model(this.newAnimal);

		newCryptAnimal.$save(function(returnData){
			// console.log('return', returnData)
			animalFactory.animals.push(returnData);
		});

		this.newAnimal = {};

	}

});
