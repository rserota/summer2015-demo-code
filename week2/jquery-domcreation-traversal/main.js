// $(document).on('ready', function(){

// });

// Same as document ready above
$(function(){

	//------------------//
	//   DOM CREATION   //
	//------------------//

	// Store JQ selection in variable
	// var myHeader = $('h1')

	// Appending text / html
	// Append goes INSIDE selected element at the END (last child)
	// $('h1').append('! This was appended')
	// $('h1').append('<div> This is an appended div </div>')

	// Prepending text / html
	// Prepend goes INSIDE selected element at the BEGINNING (first child)
	// $('h1').prepend('woow, im first!')
	// $('h1').prepend('<div> This is an prepended div </div>')


	// Before
	// Before creates a new SIBLING that goes BEFORE the selected element
	// $('h1').before('<div> hello there, i come before </div>');

	// After
	// After creates a new SIBLING that goes AFTER the selected element
	// $('h1').after('hello there, i come after');

	// var myName = "Franklin"

	// // Highlander variable - there can be only one.  Multiple appends on this DOM node variable
	// Will cause it to be removed from its previous position and placed in a new position
	// var myDiv = $('<div class="my-div"> Hello, ' + myName + '! </div>');
	// // console.log(myDiv);

	// Can perform Methods on this Vitual DOM Element
	// myDiv.css({
	// 	'background-color' : 'blue',
	// 	'color' : 'white',
	// });

	// Virtual DOM element is NOT in the document until we use a method to place it there
	// $('body').append(myDiv);


	// Valid
	// $('.my-div').empty();

	// // Another Highlander variable
	// var $highlanderClone = myDiv.clone();

	// $highlanderClone.append(myDiv);

	// $('h1').append($highlanderClone);
	// // console.log(myDiv);

	// // Remove
	// // $('h1').remove();

	// // Empty
	// // $('h1').empty();



	//------------------//
	//   DOM TRAVERSAL  //
	//------------------//

	// How we can navigate through the DOM tree to select elements

	$('.buy-button').on('click', function(){
		// Making sure our event is attached properly
		// console.log('Click works!');

		// THIS keyword - is the event target
		// console.log(this);

		// can wrap THIS in jquery object to perform methods
		// $(this)

		// Remember - Jquery selections can be stored in variables
		var clickedButton = $(this)
		// console.log(clickedButton);

		// Get Text from event target
		// console.log( $(this).text() );

		// Selecting Price
		// Siblings Method
		// console.log( $(this).siblings('.price').text() );

		// Parent - Goes up ONE level to element's direct parent
		// console.log( clickedButton.parent() )
		
		// Children - Selects all children, optionally filtered by selector argument
		// console.log( $('.small-container').children().text('hello') );

		// Closest - Goes up through the DOM tree until it hits a direct ancestor matching selector
		// console.log( clickedButton.closest('.big-container') )

		// This will not work since h2 is not a direct ancestor
		// console.log( $(this).closest('h2') )

		// Find - Goes down through the DOM tree until it finds ALL descendents matching selector
		// console.log($('.big-container').find('h2'))

		// Chaining closest and find
		// console.log( $(this).closest('.big-container').find('h2').text() );






	});



});