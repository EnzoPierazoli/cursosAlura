let numeroSecreto = gerarNumeroAleatorio();
tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector(`input`).value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', `Acertou`);
        let palavraTentativas = tentativas > 1 ? `tentativas` : `tentativa`;
        exibirTextoNaTela('p', `Voce descobriu com ${tentativas} ${palavraTentativas}!!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O numero secreto e menor`);
        } else {
            exibirTextoNaTela('p', `O numero secreto e maior`);
        }
        tentativas++
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1)
}

function limparCampo() {
    chute = document.querySelector(`input`);
    chute.value = ``;
}

function reinicarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemInicial(){
    exibirTextoNaTela(`h1`, `Jogo do numero secreto`);
    exibirTextoNaTela(`p`, `Escolha um numero de 1 a 10`);
}