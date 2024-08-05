let titulo = document.querySelector('h1');

titulo.innerHTML = 'Hora do Desafio!';

function exibirMensagem() {
  console.log('O botão foi clicado');
}

function exibirAlert() {
  alert('Eu amo JS');
}

function exibirPrompt() {
  let exibeCidade = prompt('Uma cidade do Brasil ?');
  return alert(`Estive em ${exibeCidade} e lembrei de você`);
}

function exibirSoma() {
  let num1 = parseInt(prompt(`Entre com o primeiro valor`));
  let num2 = parseInt(prompt(`Entre com o segundo valor`));
  let soma = (num1 + num2);
  alert(`${num1} + ${num2} = ${soma}`)
}
