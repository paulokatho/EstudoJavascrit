var ativo = true;
console.log(ativo);
console.log(typeof ativo);

ativo = false;
console.log(ativo);
console.log('');

/*** O QUE DÁ FALSE OU O QUE DÁ TRUE ***/

// 0 SEMPRE é false em javascript por dafault
if (0) {
	console.log('0 é true');
} else {
	console.log('0 é false');
}
console.log('');

// truque para saber qual é o tipo booleano

console.log(!0);
console.log(!!0);
console.log('');

// uma string vazia também é false
console.log(!!'');

// NaN também é false
console.log(!!NaN);
console.log('');
// null e undefined são false
console.log(!!null);
console.log(!!undefined);
console.log('');
// e false é false
console.log(!!false);

// Testando se uma string vazia e uma com valor

var nome = '';
if (!nome) {
	console.log('Favor informe o nome');
}
console.log('');
var novoNome = 'João';
if (!novoNome) {
	console.log('Favor informe o nome');
} else {
	console.log('Obrigado!');
}