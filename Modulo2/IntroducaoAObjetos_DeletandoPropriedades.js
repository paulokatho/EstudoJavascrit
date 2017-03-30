
// deletando uma propriedade do objeto

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

console.log('Katho:', katho);
console.log('');

delete katho.idade;

console.log('Katho sem a idade:', katho);
console.log('');

delete katho['endereco'].estado;
console.log('Katho sem idade e sem ESTADO:', katho);
