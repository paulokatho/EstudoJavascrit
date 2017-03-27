/*
	Funcoes em javascript
*/

// Funçoes Matematicas

var menorNota = Math.min(3,5,9,10,4,6);
console.log('Menor Nota:', menorNota);

var maiorNota = Math.max(4,5,2,7,9,1,8);
console.log('Menor Nota:', maiorNota);
console.log('');

var temperatura = Math.round(22.4); // arredonda até 4 para baixo e a partir de 5 para cima
console.log('Temperatura:', temperatura);
console.log('');

var valorAleatorio = Math.random(); //tipo escolhe numeros aleatórios, retornando tipo float, com casa decimal
console.log('Valor Aleatório:', valorAleatorio);
console.log('');

var numero = valorAleatorio * 60; //traz numeros aleatorios somente até 60, mas pode ser que dê número 0
console.log('Número aleatorio até 60:', numero);
var numeroArredondado = Math.floor(numero) + 1; // floor arredonda para baixo e o +1 joga esse número arredondado para cima, ex: se deu 3 ele acrescenta +1 = 4
console.log('Numero Arredondado:', numeroArredondado);


/*
	Esse esquema acima pode ser jogado em um loop para ser gerado uma quantidade de números.
	Também podemos guardar os números num array para descartar os que derem repetidos para não mostrar numeros repetidos.
	Pode ser feito muita coisa.
*/

aula 3.6


