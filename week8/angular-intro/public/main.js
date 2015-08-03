// console.log('hello there!')

// Create a new module with NO dependencies
var App = angular.module('App', []);

// Create a controller
App.controller('foodController', function($scope, foodService, foodFactory){
	$scope.bestFood = 'Watermelon';
	$scope.worstFood = 'Tofu';

	$scope.lookAtFood = function(val){
		console.log('!!', val);
	}

	// console.log('Food', foodService)

	$scope.foodService = foodService;
	$scope.foodFactory = foodFactory;
	$scope.foods = [
		{
			name : 'Chicken Nuggets',
			price : '$4.00'
		},
		{
			name : 'Buffalo Jerky',
			price : '$3.75'
		}
	]
	// res.render('index', {})

	// setTimeout(function(){	
	// 	$scope.$apply(function(){
	// 		$scope.bestFood = 'Chicken Nuggets'
	// 	});
	// }, 3000)
});


App.service('foodService', function(){

	this.message = 'Welcome to the Food Service Station!';

});

App.factory('foodFactory', function(){

	var message = 'Thanks for stopping by!  Y`all come back';
	var private = 'haha';

	return {
		message : message
	}
});


App.directive('title', function(){

	return function(scope, element){
		element.bind("mouseenter", function(){
			console.log('I AM IN THE TITLE');
		});
	}

});


App.directive('food', function(){

	return {
		restrict    : 'E', // E for custom elements, A for custom attributes, C for custom class
		// template    : '<h1>Hello there, I`m a food tag!</h1>'
		templateUrl : '/templates/food'

		// LOOK AT THE BACKEND CODE - The jade file is being served up from the views/templates folder
		// In APP.js, there is a dynamic route handler which utilizes a method on the index controller
		
	}

});




