// 

// $(selector).on( eventType, callback )

// Callbacks

// var adder = function(a, b){
// 	return a + b
// }

// var magicFunction = function(cb, d, e){
// 	// return adder(d, e)
// 	return cb(d, e)
// }


// console.log( magicFunction(adder, 5, 10) );

$(document).on('ready', function(){
	console.log('Document is ready!');

	// $('.my-button').on('click', function(){
		// Both buttons are affected
		// $('.my-button').text('I was clicked!');
		// alert('HEY!')

		// this keyword - shows the event target
		// console.log(this) // DOM Node Object
		// console.log( $(this) ) // Jquery Selection of that node


		// Only target button is affected
		// $(this).text('I was clicked!');
	// });



	$('a').on('click', function(event){
		// Event object
		// console.log(event);
		

		// Prevents browser from doing its default behavior
		// event.preventDefault();

		// Same as .preventDefault()
		return false
		
		// Conditional prevention - confirm evaluates to T/F
		// return confirm('Wanna go to google?');



	})

	// Delegated Events
	// Allows a parent container to watch its descendents for a specific event / target combination
	// if an element matching the target selector is the origin for the event, the callback fires
	$('#delegate').on('click', '.my-button', function(){
		$('#delegate').append('<button class="my-button">This a new button!!</button>')
	});


	// Appends a new button to the delegate container
	// $('#delegate').append('<button class="my-button">This a new button!!</button>')


	// Some Event Types
	// .on('click')
	// keydown
	// keyup

	// scroll

	// mouseover
	// mouseout

	// focus
	// blur

	// Focus and Blur
	$('.my-input').on('focus', function(){
		console.log('20/20 vision');
	})

	$('.my-input').on('blur', function(){
		console.log('Mr. Magoo');
	})


	// Scroll event
	$(window).on('scroll', function(){
		// console.log('scrollin with my homies');

		// Returns number of pixels scrolled from top of page
		console.log( $(window).scrollTop() );


		if ($(window).scrollTop() >= 100) {
			
			$('body').css({
				'background-color' : 'peachpuff'
			});
		}

	})




});






