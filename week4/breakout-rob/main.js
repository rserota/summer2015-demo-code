$(function(){


	// Create a DOM element with Jquery (Virtual)
	// var $mainContainer = $('<div class="main-container"></div>')
	// $('body').append($mainContainer)
	// $('body').prepend($mainContainer)
	// Append then Prepend MOVES the element, does not create an additional one
	// This is because when we set it to a variable, we are referencing the same element


	// By passing in the DOM element creation, we will see each one appended to the page
	// NO variable makes them unique, not a reference to a single DOM element
	// $('body').append($('<div class="main-container"></div>'))
	// $('body').append($('<div class="main-container"></div>'))
	// $('body').append($('<div class="main-container"></div>'))

	// Since Functions create scope, when a variable is created in a function
	// It exists only in the function execution
	// This will create a NEW $mainContainer each time the function is called
	// setInterval( function(){
	// 	var $mainContainer = $('<div class="main-container"></div>')
	// 	$('body').prepend($mainContainer)

	// }, 2000)

	// Selecting a template we created in HTML
	var $template = $('#my-template')
	// var counter = 0
	$('#make-more').on('click', function(){
		// console.log(counter++)
		// We need to CLONE the template so we are not moving it
		// Want to create NEW copies of this template
		$('body').append( $template.clone() 
			.attr('id', null)
			.attr('class', 'classy')
			// Remove the ID and add a Class
			// NEVER have multiple elements with the same ID
		)
		// Can select the lastly appended template copy
		// Traverse -> find all h1 descendents
		// Change their text
		$('.classy').last()
			.find('h1')
			.text('Hello Good Sir')


	});

	// Delegation -> attach the event to the document or some
	// Constant parent element
	$(document).on('click', '.delete-button', function(){
		// $(this).closest('.classy')
		// We Want to find the closest container
		// Our copy of the template with the class 'classy'
		var $classy = $(this).closest('.classy')
		
		// We are fading out the Classy container before removing it
		$classy.fadeOut(4000, function(){
			$classy.remove()
			// $('body').append($classy)
		})

	});


	// DOM traversal

	// Starting with 2 .mostly-animals ul's
	// Traversing to Children -> returns element with the classes fruit AND pear
	// Adding a class to change the text color of this .fruit.pear selection

	// Traversing to Parent -> returns the .mostly-animal ul that .fruit.pear is a part of
	// Adding a class to change the text color of this .mostly-animal parent ul

	// Traversing to Siblings -> returns all ul siblings of the currently selected .mostly-animal ul
	// Adding a class to change the text color of this ul sibling

	$('.mostly-animals')
		.children('.fruit.pear')
			.addClass('green-text')
			.parent()
				.addClass('red-text')
				.siblings('ul')
					.addClass('blue-text')
});