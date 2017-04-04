 	$(function() {
 		var selecaoTodosUsuarios = $('#selecao-todos-usuarios');//pegando valor por ID
 		var selecaoUsuarios = $('.js-selecao-usuario');//pegando valor pela class

 		//console.log('selecaoTodosUsuarios', selecaoTodosUsuarios); //dessa maneira colocando console.log é possivel testar no google developer tools

 		selecaoUsuarios.on('click', function() {
 			var totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').lenght;
 			var checked = selecaoUsuarios.lenght === totalUsuariosSelecionados;
 			selecaoTodosUsuarios.prop('checked', checked);
 		});

		selecaoTodosUsuarios.on('click', function() {
			selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
		}); 		

 	});