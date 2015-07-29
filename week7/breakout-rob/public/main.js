/* global $ */
$(function(){
	
	$('#add-liquor').on('submit', function(e){
		e.preventDefault();
		
		$.post('/api/addbooze', $(this).serialize(), function(returnData){
			console.log('Yay booze', returnData)
		});
		
	})
	
});