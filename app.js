alert("Bem vindo ao jogo do número secreto!");
let numeroSecreto = 5;
console.log(numeroSecreto);
let palpite = prompt("Entre com um número entre 1 e 10");

if (palpite == numeroSecreto) {
  alert(`Parabéns! Você acerto o número secreto! (${numeroSecreto})`);
} else {
  if (palpite > numeroSecreto) {
    alert(`O número secreto é menor que ${palpite}`);
  } else {
    alert(`O número secreto é maior que ${palpite}`);
  }
}
