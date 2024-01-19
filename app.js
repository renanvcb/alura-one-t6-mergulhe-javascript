alert("Bem vindo ao jogo do número secreto!");
let numeroSecreto = 5;
console.log(numeroSecreto);
let palpite;
let tentativas = 1;

while (palpite != numeroSecreto) {
  palpite = prompt("Entre com um número entre 1 e 10");

  if (palpite == numeroSecreto) {
    break;
  } else {
    if (palpite > numeroSecreto) {
      alert(`O número secreto é menor que ${palpite}`);
    } else {
      alert(`O número secreto é maior que ${palpite}`);
    }
    tentativas++;
  }
}

if (tentativas > 1) {
  alert(
    `Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas!`
  );
} else {
  alert(
    `Que sorte! Você acertou o número secreto ${numeroSecreto} na primeira tentativa!`
  );
}
