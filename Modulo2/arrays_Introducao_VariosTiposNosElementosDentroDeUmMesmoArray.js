
// O array em js permite que seja armazenado qualquer tipo dentro de cada elemento, tipos misturados, tudo junto.
// Ex: String com Number, Object e por aí vai...

//Nesse exemplo vamos declarar um objeto, uma funcao  para colocar dentro do array e testar esse array exibindo na tela

//***SE PRECISAR DE MAIS FUNCOES DO ARRAY É POSSÍVEL IR NO SITE DO W3C E VER AS FUNCOES PARA O ARRAY***

var acessorio = { som: 'Pioneer', banco: 'Couro' };

var ligar = function(a) { //recebendo parametro 'a' que tem o valor 'agora!' vindo do 'fox[3]('agora!');'
	console.log('Ligando o carro...', a);
}

var fox = [ 'Fox', 4, acessorio, ligar ];

console.log('Exibindo Fox:', fox);
console.log('');

console.log('Exibindo o valor dentro do objeto:', fox[2].som);
console.log('');

fox[3]('Agora!');//lembrando que para chamar a funcao usamos () e o parametro passamos dentro do ()
console.log('');