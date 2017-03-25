
var percentualImposto = 0.15;
valor = 100;

var totalImposto = valor * percentualImposto;

console.log('Total Imposto a pagar', totalImposto);

var valor;
//var valor = 100;

//HOISTING 
//*** Abaixo não vai funcionar, pois a atribuição do valor da variavel está embaixo.

/* 
var percentualImposto, totalImposto, valor;
percentualImposto = 0.15;
totalImposto = valor * percentualImposto;

console.log('Total imposto a pagar', totalImposto);

valor = 100;

*/

/*

	Segundo o conceito de hoisting, o javascript leva sempre a declaração das variaveis para o escopo da aplicação/função.
	como no cometario acima.
	Porem ele nunca leva os valores/atribuições, somente as declarações, então se voce atribuir um valor para uma variavel no escopo da aplicação
	e depois da função declarar a variavel ele vai entender e vai gerar o valor correto para a função.

	Mas então para aplicar boas praticas e evitar dores de cabeça posteriores, sempre declare as variveis no início, sempre no escopo.

*/