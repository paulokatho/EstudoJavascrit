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

