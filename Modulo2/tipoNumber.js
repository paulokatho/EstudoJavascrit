
//	Variavel tipo Number


var x = 0.3 - 0.2;
console.log(x);

console.log('');

var x = (0.3 * 10 - 0.2 * 10) / 10;
console.log(x); //resultado: 0.1


/*

	A variavel mesmo sendo dinâmica, existe uma variavel padrão por traz dos panos e essa variável é do tipo NUMBER.
	Tanto uma variavel idade = 25 e preco = 14.99 são do tipo number. 

	Essa variavel é sempre 64 bits de precisão no tipo flutuante.

	Elas também seguem o padrão I3E754 que tem o probleminha de precisão famoso.

	Ex:
		var x = 0.3 - 0.2;
		console.log(x); //resultado: 0.09999999999999998

			Ou seja ele faz uma aproximação.
			Para resolver esse probleminha podemos fazer o seguinte.

		var x = (0.3 * 0.10 - 0.2 * .10) / 10;
		console.log(x); //resultado: 0.1
*/

/***	TESTANDO VARIAVEIS COM OUTRAS FUNCÕES PRE PRONTAS	***/
console.log('');
console.log('');
console.log('/***	TESTANDO VARIAVEIS COM OUTRAS FUNCÕES PRE PRONTAS	***/');
console.log('');

var y = 10;
console.log(y);

console.log(typeof y);
console.log(y.toString(2), '- Transforma em binario');
console.log(y.toString(16), '- Transforma em hexadecimal');

var preco = 14.99;
console.log(preco, '- Exibindo o valor da variavel preco');
console.log(preco.toFixed(), '- Arredondando para cima o valor da variavel preco, Ex: 15');

//	se abrir o console do nodejs e digitar, por exemplo, "y.", vai exibir uma lista com algumas funções prontas que existem
//	É possível fazer muita coisa... é so pesquisar a documentação ou no google. 

/*
	O tipo number pode ser "infinito, menos infinito ou NaN";
	Exemplo: 
		i = 10/0; //infinito
		i = -10/0; // - infinito
		NaN - Not a Number, quando retorna algo que não é um número, exemplo: z = 10 / 'Katho'; - o resultado vai ser "NaN" 

		OBS: O grande detalhe é que todos esses tipos, inclusive a divisão por zero, se der um typeof, vai retornar tipo number.

		
*/
