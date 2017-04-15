var volks = {
	fabricante: 'VW'
}

var fox = {
	nome: 'Fox',
	placa: 'AAA-1111',
	fabricante: 'GM'
}

console.log('fox.fabricante', fox.fabricante);
Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante ->', fox.fabricante); // 'GM'

/*
	No primeiro console.log não funciona
	Na ideia da herança ainda, temos o seguinte conceito de que fox tem as propriedades e o prototype dele tem que apontar para 
		volks e o prototype volks aponta para o Object.prototype, pois no fim das contas aqui no js todo mundo herda de Object.prototype.
	Da maneira que está acima não funciona, pois fox não tem o objeto volks ainda, ou seja, não tem nada indicando que ele irá apontar para
		o objeto volks.

	No segundo o prototype é setado com Object.setPrototype(fox, volks) e então no segundo console.log já está com a propriedade fabericante do 
		objeto volks.
*/
console.log('');
console.log('--- Objeto fox com a propriedade fabricante GM setado exibe o fabricante GM e descarta o fabricante prototype ---');

// se deletar o fabricante inserido direto no objeto o fabricante do objeto volks volta a fazer parte do objeto fox

delete fox.fabricante
console.log('fox.fabricante -->', fox.fabricante); //'VW'
console.log('fox', fox);

console.log('---Para verificar se faz a propriedade faz parte do objeto ou é de algum prototype---');
console.log('');
//com o 'for in...' ele itera sobre as propriedades do fox e verifica se faz parte do objeto ou prototype. Se for do objeto= true, se não false.
for (propriedade in fox) {
	console.log(propriedade, fox.hasOwnProperty(propriedade));
}