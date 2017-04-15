
/*
	Por convenção as funcoes contrutoras começa com var e o nome começa com letra maiúscula, exemplo: var Carro = ......

	Nesse caso o objeto é criado com "new".
	O objeto é referenciado com o "this."

	O nome na propriedade this. tem que ser sempre o nome do atributo que estamos querendo referenciar, depois do igual
		pode pode ser qualquer nome que esteja sendo utilizado na passagem de parametros da function()


	Ex: 
		function (carro, placa) {
			this.nome = nome;
		}

	Eu tanto posso ter propriedades passadas por parametros quanto propriedades fixas "proprias" desse objeto.
*/


var Carro = function(nome, placa) {
	this.nome = nome;
	this.placa = placa;
	this.fabricante = 'VW';
}

var fox = new Carro('Fox', 'AAA-1111');
console.log('fox', fox);

console.log('');

for (propriedade in fox) {
	console.log(propriedade, fox);
}