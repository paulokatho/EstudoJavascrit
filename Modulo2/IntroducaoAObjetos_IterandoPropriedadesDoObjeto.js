var katho = {
	nome: 'Katho Mau',
	idade: 34,
	endereco: {
		logradouro: 'Rua Pitangueiras',
		numero: 134,
		complemento: 'Casa',
		cidade: 'São Paulo',
		estado: 'SP'
	}
};

for (var prop in katho) {
	console.log(prop);
	console.log('');
	console.log(prop, '-->', katho[prop]);
	console.log('');

	//exemplo: dá para comparar e encontrar uma propriedade
	if (katho ['endereco'] ['estado'] === 'SP') {
		console.log('Exibindo valor após comparação se estado for igual a SP:', katho ['endereco'] ['estado']);

	}

}