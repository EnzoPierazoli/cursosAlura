alert("Boas vindas ao jogo do numero secreto");

let numeroMaximo = 100;
document.getElementById('numeroMaximo').textContent=numeroMaximo;
let numeroSecreto = parseInt(Math.random() * (numeroMaximo + 1));
console.log(numeroSecreto);
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
    }
    if (chute > numeroSecreto) {
        alert(`O numero secreto e menor que o ${chute}`);
    } else {
        alert(`O numero secreto e maior que ${chute}`);
        }
        tentativas++
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
