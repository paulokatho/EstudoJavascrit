
// HERANÇA EM JAVASCRIPT

/* 
	Herança é bem útil. 
	Todo objeto em jascript tem um prototipo e esse prototipo é uma propriedade que aponta para um outro objeto ou caso ele não tenha.

	Em java uma classe herda de outra classe e em javascript não tem esse conceito de classe então um objeto herda de outros objetos e essa é a idéia.

	Em java uma classe no fim das contas sempre vai acabar extendendo da classe Object
	E em javascript sempre vai acabar apontando para um outro objeto que é comum a ele ou Object.prototype.

*/

var volks = {
	fabricante: 'VW'
}

var fox = {
	nome: 'Fox',
	placa: 'AAA-1111',
}

var gol = Object.create(volks);
gol.nome = 'Gol';
gol.placa = 'AAA-2222';
// var gol = {
// 	nome: 'Gol',
// 	placa: 'AAA-2222',
// }

console.log('fox', fox);
console.log('gol', gol);

console.log(Object.getPrototypeOf(fox) === Object.getPrototypeOf(gol));

console.log('fox.fabricante:', fox.fabricante);
console.log('gol.fabricante', gol.fabricante);

Object.setPrototypeOf(fox, volks);	
console.log('---');
console.log('fox.fabricante ->', fox.fabricante);
console.log('gol.fabricante ->', gol.fabricante);

console.log('toString do fox:', fox);