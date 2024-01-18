alert("Bem vindo ao jogo do número secreto!");
let numeroSecreto = 2;
console.log(numeroSecreto);
let palpite = prompt("Entre com um número entre 1 e 10");

if (palpite == numeroSecreto) {
  alert(`Parabéns! Você acerto o número secreto! (${numeroSecreto})`);
} else {
  alert("Que pena... Você errou... :(");
}
