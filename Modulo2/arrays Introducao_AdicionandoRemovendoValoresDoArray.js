//Adicionando e removendo elementos do array

//add e remover no final do array: push() e pop()-pop apaga e exibe o que foi apagado.
//add e remover no início do array: shift() e unshift() - unshift apaga e exibe o que foi apagado.

var emails = ['katho@gmail.com', 'nathaly@linda.com', 'enzo@ninja.com']
	console.log('Adicionando emails:', emails.push('papai@gmail.com'));
	console.log('Emails:', emails);
	console.log('');
	console.log('Apagando emails:', emails.pop());

	
	console.log('');
	console.log('Adicionando e Removendo com: shift/unshift');	
	console.log('');


	console.log('Add emails shift:', emails.unshift('rock@hotmail.com'));
	console.log('Email add:', emails);
	console.log('');
	console.log('Removendo emails unshift:', emails.shift());
	console.log('Email removido:', emails);


	


