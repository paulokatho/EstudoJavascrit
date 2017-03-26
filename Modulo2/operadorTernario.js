// imagina que se temFoto for verdadeiro traz a imagem do perfil do usuario e se não tiver foto cadastrada exibe um "mock" da imagem.

var temFoto = false;
// se tem foto: perfil.jpg
// se não tem foto:  mock-perfil.jpg
// <img src= "pathFoto"> -- essa imagem poderia ser colocado em uma img para ser exibido a imagem do perfil do usuario na tela

var pathFoto =  '';
if (temFoto) {
	pathFoto = 'maria-perfil.jpg';
} else {
	pathFoto = 'mock-perfil.jpg';
}
console.log('Path da imagem', pathFoto);

console.log('');

// se for uma condição mais simples podemos fazer com operador ternário, mas quando fica meio complexo é melhor fazer da maneira tradicional

var pathFoto = temFoto ? 'maria-perfil.jpg' : 'mock-perfil.jpg';
console.log('Path da imagem 2', pathFoto);