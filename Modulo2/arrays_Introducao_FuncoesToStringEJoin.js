
//Exibindo conteudo do array com toStrng() ou join()

//toString()

var carros = ['Jaguar', 'Porche', 'BMW', 'Rolls Royce'];

var car = carros.toString();
console.log('Carros do array:', car);// O toString() limita somente a exibição por vírgula, sempre assim
console.log('');

// join()

//com o join() é possível escolher o tipo de separador entre os elementos do array

console.log('Exibindo carros com join()', carros.join(' - '));

// o join é mais usado por ter essa flexibilidade.