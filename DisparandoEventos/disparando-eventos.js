$(function() {
	var atividade = $('#atividade');
	var listaAtividades = $('#lista-atividades');

	atividade.on('keyup', function(e){
		var keyCode = e.keyCode;

		if (keyCode === 13) {

			atividade.trigger('enter', atividade.val());

			//listaAtividades.prepend('<li>' + atividade.val() + '</li>');// 'prepend' a ultima atividade entra no começo da lista, ou seja, sempre aparece em primeiro
			atividade.val('');
		}
	});

	//Quem vai escutar o evento 'enter' da atividade.trigger?
	atividade.on('enter', function(evento, texto) { //recebo 2 parametros que é o evento 'enter' e algum texto
		//agora podemos escutar atividade.on 'keyup' e 'enter' que está dentro de atividade.on(....)

	//aqui agora podemos pegar
	listaAtividades.prepend('<li>' + texto + '</li>');

	});

});