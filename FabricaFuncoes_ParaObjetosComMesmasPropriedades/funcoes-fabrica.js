/*
	Nesse momento vamos ver como criar fabrica de funcoes para objetos que utilizam as mesmas prpriedades para evitar erros
		de digitação quando utilizamos as mesmas prppriedades em objetos diferentes
		E também para reutilizar código.
*/

var criarCarroDaVolks = function(nome, placa) {
	return {
		nome: nome,
		placa: placa,
		fabricante: 'VW'
	};
}

var fox = criarCarroDaVolks('Fox', 'AAA-1111');
console.log('fox', fox);

console.log('');

var gol = criarCarroDaVolks('Gol', 'AAA-2222');
console.log('gol', gol);