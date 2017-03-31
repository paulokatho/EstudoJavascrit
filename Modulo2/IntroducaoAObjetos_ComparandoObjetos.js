
//Comparando 2 objetos
/*
	No js não existe uma funcao de comparação de objetos, para isso temos que criar uma na mão.
	E também se comparamos uma propriedade de um objeto dentro de outro temos que utilizar "this.propriedade..."
	Observe o exemplo abaixo:
*/


var joao = {
	nome: 'João',
	idade: '34',
	email: 'joao@katho.com.br',

	comparaEmail: function(obj) {
		return this.email === obj.email;
	}
}

var maria = {
	nome: 'Maria',
	idade: '35',
	email: 'joao@katho.com.br'
}

console.log('João e Maria tem o mesmo e-mail?', joao === maria); // comparação assim não existe no javascript, aqui sempre vai retornar false

// assim é o jeito certo, passamaos o objeto maria para joão. Criando também a comparação lá na funcao.
console.log('João e Maria tem o mesmo e-mail?', joao.comparaEmail(maria)); 
