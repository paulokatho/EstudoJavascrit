var valor = 0;

if (valor === 0) {
	console.log('Valor deve ser maior que zero!');
}

// ou pode ser assim

if (!valor) { // assim o valor de zero continua sendo false, pois 0 sempre é false.
	console.log('Valor deve ser maior que zero');
} else {
	console.log('Maior que zero!');
}

console.log('');

var idade = 10;
console.log(typeof idade);
if (idade) {
	console.log('Daqui a 5 anos você terá', idade + 5, 'anos');
}