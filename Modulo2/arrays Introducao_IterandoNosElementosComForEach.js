
//	Iterando nos elementos com forEach

/*
	Para percorrer cada posição do array é possível fazer com um for normal iterando a cada posição desse array.
	Existe também o forEach() que é uma função do Array e por isso abre e fecha parenteses.
*/

var nomes = ['Enzo', 'Nathaly', 'Katho', 'Halford'];

for(i = 0; i < nomes.length; i++) {
	console.log('Nomes [', i, ']=', nomes[i]);
}
console.log('');

//Agora podemos usar a função forEach() do Array
// Dentro dos () do forEach ele recebe outra função e nessa função que vai receber o elemento do array

console.log('Iterando com forEach()');

nomes.forEach(function (elemento){

	console.log('Nomes:', elemento);
});
