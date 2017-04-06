$(function() {
	var resposta = $.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET',
		dataType: 'jsonp'
	});

	resposta.done(function(estados) {
		var comboEstado = $('combo-estado');
		//comboEstado.empty(); //essa linha limpa o comboEstado antes de receber valores e apaga os <options>, caso haja no html algum implementado
		
		comboEstado.html('<option>Selecione o estado</option>');
		estados.forEach(function(estado) {
			//abaixo é acrescentado o valor para option e também o texto que sera exibido
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			comboEstado.append(optionEstado);
		});
	});

	resposta.fail(function() {
		alert('Erro carregando estados do servidor!');
	});

});