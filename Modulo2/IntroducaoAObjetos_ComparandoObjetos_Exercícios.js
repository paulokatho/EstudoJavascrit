
var gato1 = {
	nome: 'Bichano',
	raca: 'Angorá',
	cor: 'Rajado',

	comparaRacaGato: function(obj) {
		return this.raca === obj.raca;

	},	

	comparaCorGato: function(gatoCor) {
		if(this.cor === gatoCor.cor) {
			return console.log('Gatos são iguais');
		} else {
			return console.log('Não são iguais!');
		}
	}
}

var gato2 = {
	nome: 'Xaninha',
	raca: 'Persa',
	cor: 'Branco'
}


console.log('Cor dos gatos:',gato1.nome, '= ', gato1.cor, ' / ', gato2.nome, '= ', gato2.cor);
console.log('');

console.log('A cor dos gatos são iguais?', gato1.comparaRacaGato(gato2));
console.log('');

//console.log('Cor do gato:', gato1.comparaCorGato(gato2));
gato1.comparaCorGato(gato2);

