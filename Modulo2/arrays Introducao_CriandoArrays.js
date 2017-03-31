//Para criar um array no js, basta declarar uma variavel e abrir/fechar [] - Ex: var nome = []

var emails = [];
	emails[0] = 'katho@hotmail.com';
	emails[1] = 'tiribaca@gmail.com';

	console.log('Email na posição [1] -', emails[1]);
	console.log('Email na posicao [5] -', emails[5]); //email na posicao 5 não existe, então ele retorna undefined
	console.log('');

//criando array emails e já inicializando

var nome = ['Katho', 'Nathaly', 'Enzo'];

	console.log('Tem quantos nomes?', nome.length);
	console.log('');


//definindo um nome em uma posição que pulou outras posições do array. Essas posições que não foram preenchidas ficam como undefined
nome[4] = 'Biritiba';
	console.log('Quantos nomes até o Biritiba', nome.length);
	console.log('Nome[3]', nome[3]); //mas mesmo tendo preenchido o nome na posição 4 a posição tres vem vazia e definida como undefined
