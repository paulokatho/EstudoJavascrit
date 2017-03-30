
//Recaptulando: Objeto é um container de chaves {} e valores, e os valores podem ser qq coisa, inclusive outro objeto!

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

console.log(katho);
console.log('Cidade do Katho:', katho.endereco.cidade); //acessando a propriedade do objeto que está dentro do objeto katho
console.log('Se quiser alterar o valor de uma propriedade');
katho.endereco.numero = 135;
console.log(katho); //aqui vai exibir os valores das propriedades já com o valor do número alterado.
console.log('');

//tentando acessa alguma propriedade que não existe vai dar erro de undefined
console.log('Cep', katho.endereco.cep);
console.log('');

//acessando dinamicamente os valores dos objetos
console.log('Exibindo dinamicamente o Estado:', katho['endereco'] ['estado']);
