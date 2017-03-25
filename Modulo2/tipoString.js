

//propriedade length não usa () no final.
// 02:12

var x = 'Katho Mau.';
console.log(x);
console.log(x.length);
console.log('')
//comparar string == ou ===
var a = 'Katho';
var b = 'Mau';
var c = 'Katho';

console.log(a === b);//volta false
console.log(a ===c);//volta true
console.log('');

//indexOf()
//	Descobrir o índice de uma string, para saber onde está um índice que queremos saber.
//variavel.indexOf() - 05:27

var d = 'Tudo novo de outra vez'
console.log(d.indexOf('outra'));
console.log('');

console.log(d.indexOf('d'));
console.log(d.lastIndexOf('d'));
console.log(d.indexOf('y')); //retorna -, pois não existe a variavel y em d
console.log('');


//.substring(0,0)-- primeiro valor é o "excluisive" e o segundo valor é "inexclusive"
	//.substr(2, 4) -- traz a quantidade de caracteres e não a posição como no substring
	//06:57

var s = 'Tudo sobre progração'
console.log(s.substring(2, 10));
//também podemos fazer
var novaString = s.substring(2, 10);
console.log(novaString);
console.log(s); // a variavel s fica imutável
console.log(s.substring(2)); //traz tudo a partir do terceiro caracter


//slice(-17, -13) //tambem serve para pegar pedaço de string, mas a diferença do substring é que ele consegue pegar ao contrario uma string
		//08:32

var e = 'Tomar cerveja';
console.log(e.slice(-13, -8));
console.log('');


//.substr(0,0) -- traz a quantidade de caracteres. O segundo parametro é a qtd de caracteres e não a posição.
var f = 'Cade meu chopp';
console.log(f.substr(5, 3));
console.log('');

//.replace() // é possível substituir uma string marcada com <> por outra.
	//09:39

var g = 'Pare o mundo que o <Katho> quer descer';
console.log(g.replace('<Katho>', 'Thobias'));
console.log(g);
console.log('');

//.toUperCase()
//.toLowerCase()
var h = 'katho mau';
var i = 'JUDAS PRIEST';

console.log(h.toUperCase);
console.log(i.toLowerCase());
console.log('');

//- Concatenar
	//var m = 'Olá' + '' + 'Ricardo';
	//- E também tem a função concat()
	//var m = 'Olá'.concat(' ', 'Ricardo');

var j = 'Vai no Tchô';
console.log(j.concat(' ', 'que o Tchô é mau!!!'));
console.log('');

//.charAt()
	//m.charAt(4); //Ex: Caracter que está na posição 4

var l = 'Vai que sua Tafarel'
console.log(l.charAt(12));
console.log('');