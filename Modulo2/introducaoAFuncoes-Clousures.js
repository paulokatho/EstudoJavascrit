
// Funções - Conceitos de Clousures
// Ele serve para proteger as variaveis também, pois quem manipular a variavel não pode alterar o valor dela, tipo no meio da execução mudar o valor.

/* O conceito da Clousures é de encapsular ou fechar algo ou variavel, mas continuar tendo acesso a ela.*/

function Incrementar () {

var valor = 0;

	return function() {
		return ++valor;
	}	
}

var fn = Incrementar(); // colocamos aqui, pois como a função não é auto-executavel temos que executar ela "chamar ela".

console.log(fn());
console.log(fn());
console.log(fn());
console.log('');



/***	Na clousure também pode se usar a função, como uma função auto-executavel	***/

var Incrementar = (function() {// função auto-executavel

var valor = 0;

	return function() {
		return ++valor;
	}	
})();

console.log(Incrementar());
console.log(Incrementar());
console.log(Incrementar());
