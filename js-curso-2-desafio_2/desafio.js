//Desafio: Realizando atividades por meio de funções !! 

// 1
function olaMundo() {
  console.log('Olá mundo');
}
olaMundo();
// 2
function olaPessoa(nome) {
  return nome;
}
olaPessoa('Jonas');
// 3
function dobroDoNumero(numero) {
  return numero * 2;
}
dobroDoNumero(34)

// 4
function maiorNumero(number1, number2, number3) {
  let media = (number1 + number2 + number3) / 3;
  return media;
}

let resultado = maiorNumero(11, 4, 17);
console.log(`A média dos numéros é ${resultado}`)

// 5
function oMaior(a, b) {
  let maior = a > b ? a : b;
  return maior;
}

let numero = oMaior(23, 10);
console.log(`O maior número é ${numero}`)

// 6

function multiplicaNumEntrada(a) {
  return (a * a);
}

let resultadoMultiplica = multiplicaNumEntrada(6);

console.log(`O resultado da multiplicação da entrada por ela mesma é ${resultadoMultiplica}`);
