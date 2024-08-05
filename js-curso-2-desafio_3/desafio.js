// // 1

// function indiceImc(peso, altura) {
//   let alturaReal = altura / 100
//   let imc = peso / (alturaReal * alturaReal);
//   return imc.toFixed(2);
// }

// console.log(indiceImc(71, 169));

// // 2

// function calculaFatorial(n) {
//   let resultado = 1;
//   for (let i = 1; i <= n; i++) {
//     resultado *= i;
//   }
//   return resultado;
// }
// console.log(calculaFatorial(5));

// // 3

// function converteDolar(a) {
//   let resultado = (a * 4.80);
//   return resultado.toFixed(2);
// }

// console.log(converteDolar(50.20));

// // 4

// function areaDeUmaSala(comprimento, largura) {
//   let area = comprimento * largura;
//   area = area.toFixed(2);
//   let perimetro = 2 * (comprimento + largura);
//   perimetro = perimetro.toFixed(2);
//   return `Área ${area} metros quadrados, Perimetro: ${perimetro} metros`;
// }

// console.log(areaDeUmaSala(5.75, 3.20));

// // 5

// function areaPerimetroDaSalaCircular(raio) {
//   let pi = 3.14;
//   let area = pi * Math.pow(raio, 2);
//   area = area.toFixed(2);
//   let perimetro = (2 * pi * raio);
//   perimetro = perimetro.toFixed(2);

//   return `A área da sala é ${area} metros quadrados, Perimetro da sala é ${perimetro} metros`;
// }

// console.log(`Dados de uma sala cirular: ${areaPerimetroDaSalaCircular(5)}`);

// // 6

// function tabuada(a) {
//   let resultado = 1;
//   for (let i = 1; i <= 10; i++) {
//     resultado = i * a;
//     console.log(`${a} x ${i} = ${resultado}`)
//   }
//   return resultado;
// }

// console.log(` O resultado da tabuada é ${tabuada(10)}`);


function CalcularImc(peso, altura) {
  let alturaMetros = altura / 100;
  let imc = peso / (alturaMetros * alturaMetros);
  return imc;

}

console.log(CalcularImc(71, 169).toFixed(2));

// 2

function calcularFatorial(fator) {
  let resultado = 1;
  if (fator == 0 || fator == 1) {
    return 1;
  }
  for (let i = 1; i <= fator; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(calcularFatorial(5));

// 3
function converterDolar(dolar) {
  let resultado = dolar * 4.80;
  console.log(`O valor de ${dolar} dolares em reais é:`)
  return resultado;
}

console.log(converterDolar(10))

//4
function areaPerimetroSalas(comprimento, largura) {
  let area = (comprimento * largura);
  let perimetro = 2 * (comprimento + largura);
  area = area.toFixed(2);
  perimetro = perimetro.toFixed(2);

  return `A área da sala de jantar é: ${area} m² , e o perimetro é: ${perimetro} metros`;
}

console.log(areaPerimetroSalas(3.37, 4.15));

//5
function areaPerimetroSalaCircular(raio) {
  let pi = 3.14;
  let area = pi * Math.pow(raio, 2);
  area = area.toFixed(2);
  let perimetro = 2 * pi * raio;
  perimetro = perimetro.toFixed(2);

  return `A área da sala circular é: ${area} m² , e o perimetro é: ${perimetro} metros`;
}

console.log(areaPerimetroSalaCircular(5));

//6
function tabuada(numero) {
  let resultado;
  for (let i = 1; i <= 10; i++) {
    let produto = i * numero;
    resultado = console.log(`${numero} x ${i} = ${produto}`)
  }
  return resultado;
}

console.log(tabuada(5));
