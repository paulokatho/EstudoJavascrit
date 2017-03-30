 
// Introduçao a Objetos com js.

/*** 	Um objeto em javascript é um conteiner de dados onde temos varias chaves com seus valores. ***/

/*
	Um objeto em js é formada por um conjunto de chave-valor, onde os valores das chaves podem ser de tipos diferentes, por exemplo: Pode haver string, number e function(){}.
		Tudo depende da necessidade.
		Esses valores podem ser alterados depois que objeto js foi criado, ao contrario do java.

	Esse é conceito é baseado na criação dos objetos java mesmo, pois se tem a necessidade de criar uma estrutura mais complexa.
	Onde irão ter algumas propriedades e comportamentos e posso depois usar esse objeto em outros lugares.
*/

//Para criar objeto é usando {} e para executar uma função é usado ().

// Formas de criar objetos em js

var fox = { cor: 'Prata', modelo: 'Fox', fabricante: 'VW' }

console.log('fox', fox);
console.log(typeof fox);

	//para acessar os valores dos objetos

	console.log('Cor do Fox:', fox.cor) //talvez essa forma de acessar o objeto seja a mais usada, mas as duas são boas a outra esta abaixo acessada por []
	//pintando o fox
	fox.cor = 'Branco';
	console.log('Fox depois de pintado:', fox);
	console.log('');

	// Outra forma de acessar o objeto
	console.log('Modelo:', fox['modelo']);// essa forma de acesso por receber uma string pode receber uma variavel e então acessar alguma propriedade do objeto.

// Maneira de acrescentar uma nova propriedade, chave/valor, no objeto em execução

	console.log('');
	fox.peso = 1100;
	console.log(fox);

	//tentando acessar alguma propriedade que não existe, vai retornar um tipo "undefined"
	console.log('Potência:', fox.potencia);
	console.log('');

// chamando uma função dentro de um objeto
	
	fox.ligar = function () {
		console.log('Ligando o carro!')
	};

	console.log(fox); //aqui vai exibir o tipo do retorno que é function dentro de uma função.
	//para executar a funcao usamos o ()
	fox.ligar();
	console.log('');

// montando objeto celta
// A estrutura do objeto é:
	/*
	 var nome = { };
		propriedades: valorDaPropriedade

			funcao() {
				//codigo
			}
	

	 } */

	var celta = {
		cor: 'branco',
		modelo: 'celta',
		fabricante: 'GM',

		ligar: function() {
			console.log('Ligando o carro');
		}
	};
	console.log('celta', celta);