var doc = $(document);

$(document).ready(function() { 
console.log('welcome to the shopping list')

// Function to submit the input item of input

	$('.input-box').keydown(function (enter) {
		console.log("typed character in list")
		if (enter.keyCode == 13) {
			postItem();
		}
	})


});
	// $( "input" ).keyup(function() {
	// 	// if (event.keyCode == 13) {
	// 	// 	$('.add-button').click();
	// 	// }
 //   var value = $( this ).val();
 //   $( ".test" ).text( value );
 // })
 // .keyup();
 // //$('.added-items').prepend( value )

