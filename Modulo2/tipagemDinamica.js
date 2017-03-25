
//	Tipagem dinâmica

 var idade = 25;
 console.log(typeof idade);
 console.log(idade);

console.log('');

 idade += ' anos';
 console.log(typeof idade);
 console.log(idade);

console.log('');

 idade = false;
 console.log(typeof idade);
 console.log(idade);


 /*
	A tipagem dinâmica pode ser algo bem bacana, mas em projetos muito grandes, pode ser fácil perder o contole e depois conseguir enxergar um problema somente 
		em tempo de execução. Mas em projetos pequenos é tranquilo e pode ser uma boa saída.

	A variavel assume o tipo que você atribuir a ela!!!
 */