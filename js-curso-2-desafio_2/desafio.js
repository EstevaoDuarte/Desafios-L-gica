//Desafio: Realizando atividades por meio de funções !! 

// 1 Função: Olá Mundo.
function olaMundo() {
  console.log('Olá mundo');
}
olaMundo();

// 2 Função: Nome de uma pessoa.
function olaPessoa(nome) {
  return nome;
}
olaPessoa('Jonas');

// 3 Função: O dobro de um número
function dobroDoNumero(numero) {
  return numero * 2;
}
dobroDoNumero(34)

// 4 Função: A média da soma de 3 valores. 
function maiorNumero(number1, number2, number3) {
  let media = (number1 + number2 + number3) / 3;
  return media;
}

let resultado = maiorNumero(11, 4, 17);
console.log(`A média dos numéros é ${resultado}`)

// 5 Função: Quem é o maior entre os dois valores. 
function oMaior(a, b) {
  let maior = a > b ? a : b;
  return maior;
}

let numero = oMaior(23, 10);
console.log(`O maior número é ${numero}`)

// 6 Função: Multiplicando um valor por ele mesmo.
function multiplicaNumEntrada(a) {
  return (a * a);
}

let resultadoMultiplica = multiplicaNumEntrada(6);

console.log(`Multiplicação de ${a} por ele mesmo é: ${resultadoMultiplica}`);
