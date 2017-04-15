/*$(function() {

	$('#botao1').on('click', function(e) {

		console.log('Botao 1 clicado');
	});

	$('#link1').on('click', function(e) {

		console.log('Link 1 clicado');

	});

	$("#input1").on('keyup', function(e) {

		console.log(e.keyCode);
		if (e.keyCode === 13) {
			alert('Enter pressionado!')
		}
	});

});*/

$(function() {
	$('#link1').on('click', function(e) {
		console.log(e);		
	});

	$( "#botao1" ).bind( "click", function() {
		  alert( "User clicked on 'foo.'" );
		});
});