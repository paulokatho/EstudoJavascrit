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
}