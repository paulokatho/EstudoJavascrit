var endereco = {
	rua: 'Rua Pitangueiras',
	numero: '134'
}

var pessoa1 = Object.create(endereco);
	pessoa1.nome= 'Paulo Katho';
	pessoa1.idade= '33';


var pessoa2 = {
	nome: 'Nathaly',
	idade: '09',
}

console.log('Pessoa 1 - Nome:', pessoa1.nome, 'Endereço:', pessoa1.rua, pessoa1.numero);
console.log('pessoa2:', pessoa2);