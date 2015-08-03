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

	// model.query()
	// model.$save()
	// model.$delete()

	return {
		model   : model,
		animals :
	}


});


// cryptAnimalList Controller
cryptApp.controller('cryptAnimalList', function($scope){
	console.log('I AM THE CONTROLLER');
});
