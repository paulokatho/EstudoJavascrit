
$(function() {

	var valorElement = $('#valor');
	var totalElement = document.getElementById('total');
	var totalMascara = $('#total-mascara');
	var mascaraConfig = {
		decimal: ',',
		thousands: '.',
		prefix: 'R$ '
	};

	valorElement.on('keyup', function(e) {
		var total = 0;
		var valor = valorElement.maskMoney('unmasked')[0]; //definição passada pela documentação do jquery
		//var valor = parseFloat(valorElement.val() ? valorElement.val() : 0);

		if (valor > 0 && valor < 10) {
			total = valor + valor * 0.3 + 5;
		} else if (valor >= 10 && valor < 50) {
			total = valor + valor * 0.1 + 2;
		} else {
			total = valor;
		}

		totalMascara.maskMoney(mascaraConfig);
		totalMascara.maskMoney('mask', total);//inserindo a mascara no total, mas foi usado campo hidden no html, pois jquery só funciona certos plugins em campos input, colocamos hidden para utilizar e depois jogamos o resultado para o campo label
		totalElement.innerHTML = totalMascara.val();
	});

	valorElement.maskMoney(mascaraConfig);
});