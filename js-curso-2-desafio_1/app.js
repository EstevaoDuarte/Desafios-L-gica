// 1 Desafio: Alterar tag HTML no JavaScript
let titulo = document.querySelector('h1');

titulo.innerHTML = 'Hora do Desafio!';

// 2 Desafio: Exibir mensagem ao clicar em botão.
function exibirMensagem() {
  console.log('O botão foi clicado');
}
// 3 Desafio: Exibir alert ao clicar em botão
function exibirAlert() {
  alert('Eu amo JS');
}
// 4 Desafio: Chamar prompt ao clicar em botão e exibir mensagem do input prompt.
function exibirPrompt() {
  let exibeCidade = prompt('Uma cidade do Brasil ?');
  return alert(`Estive em ${exibeCidade} e lembrei de você`);
}

// 5 Desafio: Exibir resultado de uma soma. Valores são escolhidos por usuário. 
function exibirSoma() {
  let num1 = parseInt(prompt(`Entre com o primeiro valor`));
  let num2 = parseInt(prompt(`Entre com o segundo valor`));
  let soma = (num1 + num2);
  alert(`${num1} + ${num2} = ${soma}`)
}
